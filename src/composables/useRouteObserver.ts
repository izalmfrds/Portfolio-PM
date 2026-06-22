import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { isTransitioning } from "./useProjectTransition";
import { lenis } from "./useScroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// -----------------------------------------------------------------------------
// GLOBAL REACTIVE PATH
// -----------------------------------------------------------------------------

export const path = ref(typeof window !== "undefined" ? window.location.pathname : "/");

// -----------------------------------------------------------------------------
// COMPUTED HELPERS
// -----------------------------------------------------------------------------

export const isProjectRoute = (path: string) => {
  return path.match(/^\/project\/([^/]+)$/);
};

export const isArchiveRoute = (path: string) => {
  return path === "/archive";
};

export const projectId = computed(() => {
  const match = isProjectRoute(path.value);
  return match ? match[1] : null;
});

export const isArchive = computed(() => {
  return isArchiveRoute(path.value);
});

export const projectVisible = computed(() => {
  return projectId.value !== null && !isTransitioning.value;
});

export const recentProject = ref<string | null>(null);

export const recentProjectId = computed(() => {
  if (projectId.value) {
    recentProject.value = projectId.value;
  }
  return recentProject.value;
});

// -----------------------------------------------------------------------------
// HISTORY PATCH (safe & minimal)
// -----------------------------------------------------------------------------

let historyPatched = false;

function patchHistory() {
  if (historyPatched || typeof window === "undefined") return;
  historyPatched = true;

  const wrap = (key: "pushState" | "replaceState") => {
    const original = history[key];
    history[key] = function (...args) {
      // @ts-ignore
      original.apply(this, args);

      // IMPORTANT FIX: delay events to avoid reactivity collisions
      queueMicrotask(() => {
        window.dispatchEvent(new Event("route-change"));
      });
    };
  };

  wrap("pushState");
  wrap("replaceState");
}

// -----------------------------------------------------------------------------
// COMPOSABLE
// -----------------------------------------------------------------------------

export function useRouteObserver() {
  const update = () => {
    const newPath = window.location.pathname;
    if (newPath !== path.value) {
      path.value = newPath;
    }
  };
  
  // Reset scroll when leaving archive page
  watch(isArchive, (newIsArchive, oldIsArchive) => {
    if (oldIsArchive && !newIsArchive) {
      // Navigating away from archive - reset scroll to top
      queueMicrotask(() => {
        // Force refresh Lenis to ensure smooth scrolling
        if (lenis.value) {
          lenis.value.scrollTo(0, { immediate: true });
          // Re-enable smooth scrolling
          setTimeout(() => {
            if (lenis.value) {
              lenis.value.start();
              ScrollTrigger.refresh();
            }
          }, 50);
        } else {
          window.scrollTo(0, 0);
        }
      });
    }
  });
  
  onMounted(() => {
    patchHistory();
    update();

    window.addEventListener("popstate", update);
    window.addEventListener("route-change", update);
  });

  onUnmounted(() => {
    window.removeEventListener("popstate", update);
    window.removeEventListener("route-change", update);
  });

  return {
    path,
    projectId,
    isArchive,
    recentProjectId,
  };
}
