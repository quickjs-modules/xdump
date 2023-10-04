import xdump from "../xdump.js";

xdump({ foo: "bar", 42: "baz" }, [1, 2], "hello", 42);
xdump(null, Symbol("hello"));
xdump([1, ["foo", "bar", "baz", ""]]);
xdump(
  new Map([
    ["foo", "bar"],
    [42, "baz"],
  ])
);
xdump(new Set([1, 2, 3, "foo", "bar", "baz"]));

const log = xdump.configure({ prefix: "[log]", delimiter: " | " });

log("hello", "world", 42);
