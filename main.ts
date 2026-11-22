import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const src = process.env.MAKEFUN_BOT_DIR ?? ".";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
copyFileSync(join(src, "POST.json"), join(out, "POST.json"));
