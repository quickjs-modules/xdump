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
