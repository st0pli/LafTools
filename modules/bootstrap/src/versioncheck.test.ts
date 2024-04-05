import { expect, test } from "vitest";
import { runItems } from "./items";
import { getLatestVersionResponse } from "./items/web2";
// NOTE: move this test part to build-all.sh

test("test-web2-version-check", async () => {
  console.log("hello, test version check");
  // await runItems["web2"].load(true);
  let latestVer = await getLatestVersionResponse();
  console.log(latestVer);
  expect(JSON.stringify(latestVer)).contain("anyUpdate");
});
