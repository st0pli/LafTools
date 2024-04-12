import { expect, test } from "vitest";
import path from "path";
import { logger } from "../utils/logger";
import { deleteDLinkConfig, getDLinkConfig } from "../fn";
import { join } from "path";
import compressUtils from "./compressUtils";
let examplesDIR = join(__dirname, "examples");
let distDIR = join(__dirname, "dist");
import fs from "fs";
import { computeHash } from "./hash";

test(
  "test-hash-code",
  async () => {
    let file = join(__dirname, "examples", "testfile.txt");
    let hashVal = await computeHash(file);
    expect(hashVal).toBe(
      "f29844cce4124c9ced28a46148f3c7ee81ae18b254bc95b01b4d98fbebf4d119",
    );
  },
  {
    timeout: 500000,
  },
);
