import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
//import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";
import thumbnailSharkie from "../../../assets/thumbnails/sharkie.webp";
import thumbnailAdenco from "../../../assets/thumbnails/adenco-thumb.png";
import thumbnailWCC from "../../../assets/thumbnails/wcc-thumb.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Adenco Enterprise System",
    slug: "streakon",
    thumbnail: thumbnailAdenco,
    description: "Construction management system",
  },
  {
    title: "WCC Digital Platform",
    slug: "cubewar",
    thumbnail: thumbnailWCC,
    description: "Construction management system",
  },
  {
    title: "Quibbo",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "Multiplayer gaming platform",
  },
  {
    title: "Sharkie",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "2D adventure game",
  },
  /**  {
    title: "WebGL Particles",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Dynamic 3D particles",
  }, */
  {
    title: "Pokédex",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "Open-source learning project",
  },
] as const satisfies ProjectPreview[];
