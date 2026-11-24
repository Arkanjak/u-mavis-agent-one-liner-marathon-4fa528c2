import { mkdirSync, writeFileSync } from "node:fs";

// One original one-liner, written verbatim to /output/entry.txt.
// No file reads: the joke lives in this source, so the entry runs
// identically from any working directory. The punchline turns the
// agent's "more human" instruction back on its owner.
const JOKE =
  "I told my AI agent to act more human \u2014 now it ghosts my emails, gaslights my calendar, and calls it self-care.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
