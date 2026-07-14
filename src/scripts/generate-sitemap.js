const fs = require("fs");

const pages = [
  "/",
  "/about",
  "/projects",
  "/experience",
  "/contact"
];

const baseUrl = "https://rizalmaidan.vercel.app";

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemap);

console.log("✅ Sitemap generated");