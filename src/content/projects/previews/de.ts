import thumbnailCubeWar from "../../../assets/thumbnails/cubewar.webp";
//import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";
import thumbnailSharkie from "../../../assets/thumbnails/sharkie.webp";
import thumbnailStreakon from "../../../assets/thumbnails/streakon.webp";
import thumbnailBaitulAdab from "../../../assets/images/projects/baituladab/baitul-thumb.webp";
import thumbnailPapanclip from "../../../assets/thumbnails/papanclip.jpeg";
import thumbnailAimos from "../../../assets/thumbnails/AImos.jpeg";
import thumbnailAtlas from "../../../assets/thumbnails/atlas.jpeg";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "StreakOn",
    slug: "streakon",
    thumbnail: thumbnailStreakon,
    description: "App für tägliche Gewohnheiten",
  },
  {
    title: "CubeWar",
    slug: "cubewar",
    thumbnail: thumbnailCubeWar,
    description: "Multiplayer-Strategiespiel",
  },
  {
    title: "DIGITS",
    slug: "digits",
    thumbnail: thumbnailCubeWar,
    description: "Telkom-Registrierungssystem",
  },
  {
    title: "Baitul Adab Schools",
    slug: "baituladab",
    thumbnail: thumbnailBaitulAdab,
    description: "Landingpage für Baitul Adab Kids Schools",
  },
  {
    title: "Papanclip",
    slug: "papanclip",
    thumbnail: thumbnailPapanclip,
    description: "Internes Clipboard- & Snippet-Management-Tool",
  },
  {
    title: "AIMOS",
    slug: "aimos",
    thumbnail: thumbnailAimos,
    description: "KI-gestütztes Betriebsüberwachungssystem",
  },
  {
    title: "ATLAS",
    slug: "atlas",
    thumbnail: thumbnailAtlas,
    description: "Workflow-Automatisierungsplattform",
  },
  {
    title: "Sharkie",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "2D-Abenteuerspiel",
  },
  /**  {
    title: "WebGL Partikel",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Dynamische 3D Partikel",
  }, */
  {
    title: "Pokédex",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "Open-Source Lernprojekt",
  },
] as const satisfies ProjectPreview[];
