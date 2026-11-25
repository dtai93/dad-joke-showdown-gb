// Dad joke entry for make.fun. Writes one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The moon looked full, so I said it had seconds.";

const chars = [...JOKE];
if (chars.length < 1 || chars.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry length out of range: ${chars.length}`);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, JOKE, { encoding: "utf8" });
