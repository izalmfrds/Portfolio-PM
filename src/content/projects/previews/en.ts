//import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
import thumbnailAdenco from "../../../assets/thumbnails/adenco-thumb.png";
import thumbnailWCC from "../../../assets/thumbnails/wcc-thumb.png";
import thumbnailDigits from "../../../assets/thumbnails/digits-thumb.png";
import thumbnailBaitulAdab from "../../../assets/images/projects/baituladab/baitul-thumb.webp";

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
    title: "DIGITS",
    slug: "digits",
    thumbnail: thumbnailDigits,
    description: "Telkom registration schools system",
  },
  {
    title: "Baitul Adab Schools",
    slug: "baituladab",
    thumbnail: thumbnailBaitulAdab,
    description: "Landing page for Baitul Adab Kids Schools",
  },
  /**  {
    title: "WebGL Particles",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Dynamic 3D particles",
  }, */
  // {
  //   title: "Pokédex",
  //   slug: "pokedex",
  //   thumbnail: thumbnailPokedex,
  //   description: "Open-source learning project",
  // },
] as const satisfies ProjectPreview[];
