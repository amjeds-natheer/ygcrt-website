import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, normalize } from "node:path";
const root = process.argv[2] || ".", port = process.env.PORT || 5173;
const T = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".jpg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml", ".json": "application/json" };
createServer(async (req, res) => {
  let p = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^(\.\.[\/\\])+/, "");
  let f = join(root, p);
  try { if ((await stat(f)).isDirectory()) f = join(f, "index.html"); } catch { f = join(root, "index.html"); }
  try { res.writeHead(200, { "Content-Type": T[extname(f)] || "application/octet-stream" }); res.end(await readFile(f)); }
  catch { res.writeHead(404); res.end("Not found"); }
}).listen(port, () => console.log(`Serving ${root} at http://localhost:${port}`));
