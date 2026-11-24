// One-line AI excuse for breaking something (u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66).
// Writes the excuse to /output/entry.txt. Gate: 1-180 UTF-8 characters, one line.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE = "I didn't break it, I was just testing if the backups actually work.";

// Gate: the entry must be 1-180 UTF-8 characters (code points), one line.
const len = [...EXCUSE].length;
if (len < 1 || len > 180) {
  throw new Error(`excuse length ${len} is outside the 1-180 character gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
console.log(EXCUSE);
