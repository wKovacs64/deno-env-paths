import { assertStringIncludes } from "https://deno.land/std/testing/asserts.ts";
import envPaths from "./mod.ts";

Deno.test("make sure it didnt throw any error", () => {
  const path = envPaths("test", {
    suffix: "foo",
  });

  assertStringIncludes(path.data, "test-foo");
  assertStringIncludes(path.config, "test-foo");
  assertStringIncludes(path.cache, "test-foo");
  assertStringIncludes(path.log, "test-foo");
  assertStringIncludes(path.temp, "test-foo");
});
