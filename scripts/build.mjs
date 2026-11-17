import { rmSync, mkdirSync, cpSync } from "node:fs";
rmSync("dist", { recursive: true, force: true });
mkdirSync("dist");
for (const p of ["index.html", "src", "assets"]) cpSync(p, `dist/${p}`, { recursive: true });
console.log("Built to ./dist (static files, no bundler needed).");
