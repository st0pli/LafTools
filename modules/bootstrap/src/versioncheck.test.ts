import { expect, test } from "vitest";
import { runItems } from "./items";
import { downloadByPkgInfo, getLatestVersionResponse } from "./items/web2";
import { computeHash } from "utils/hash";
import path from "path";
import { logger } from "utils/logger";
// NOTE: move this test part to build-all.sh

test(
  "test-web2-version-check",
  async () => {
    console.log("hello, test version check");
    let latestVer = await getLatestVersionResponse();
    console.log(latestVer);
    expect(JSON.stringify(latestVer)).contain("anyUpdate");
  },
  {
    timeout: 500000,
  },
);
export const TEST_PKG_SERVER_LINK = "http://betalaftools.codegen.cc:8080";

test(
  "test-web2-download-pkg-file",
  async () => {
    let ver = "v2.1.89-beta";
    let r = await downloadByPkgInfo({
      version: ver,
      pkgURL:
        TEST_PKG_SERVER_LINK +
        "/latest/LafTools-" +
        ver +
        "-linux-x64-minimal.tar.gz",
      fileName: "LafTools-" + ver + "-linux-x64-minimal.tar.gz",
      sha256SumURL: TEST_PKG_SERVER_LINK + "/latest/SHA256SUM.txt",
    });
    console.log(r);
  },
  {
    timeout: 500000,
  },
);

test(
  "test-web2-download-and-install-new-version",
  async () => {
    let ver = "v2.1.89-beta";
    let r = await downloadByPkgInfo({
      version: ver,
      pkgURL:
        TEST_PKG_SERVER_LINK +
        "/latest/LafTools-" +
        ver +
        "-linux-x64-minimal.tar.gz",
      fileName: "LafTools-" + ver + "-linux-x64-minimal.tar.gz",
      sha256SumURL: TEST_PKG_SERVER_LINK + "/latest/SHA256SUM.txt",
    });
    console.log(r);
  },
  {
    timeout: 500000,
  },
);

test("test-compute-hash", async () => {
  let exampleFile = path.join(
    __dirname,
    "..",
    "testdata",
    "other",
    "example.txt",
  );
  logger.info("exampleFile:" + exampleFile);
  let hash = await computeHash(exampleFile);
  logger.info("hash:" + hash);
  expect(hash).toBe(
    "62b1e32515d1aca692b27f55e26cc8cb0f5e81441b2d15e2e24022d5b05c6bc0",
  );
});
