import { expect, test } from "vitest";
import { runItems } from "./items";
import { downloadByPkgInfo, getLatestVersionResponse } from "./items/web2";
// NOTE: move this test part to build-all.sh

test("test-web2-version-check", async () => {
  // need to launch server2 service
  console.log("hello, test version check");
  // await runItems["web2"].load(true);
  let latestVer = await getLatestVersionResponse();
  console.log(latestVer);
  expect(JSON.stringify(latestVer)).contain("anyUpdate");
});
export const TEST_PKG_SERVER_LINK = "http://betalaftools.codegen.cc:8080";

test("test-web2-download-pkg-file", async () => {
  let r = await downloadByPkgInfo({
    version: "1.0.0",
    pkgURL:
      TEST_PKG_SERVER_LINK +
      "/latest/LafTools-v2.1.89-beta-linux-x64-minimal.tar.gz",
    fileName: "256AHMSSU.txt",
    sha256SumURL: TEST_PKG_SERVER_LINK + "/latest/SHA256SUM.txt",
  });
  console.log(r);
});
