import * as std from "std";

const _DEFAULT_CONFIG = {
  prefix: "[dump]",
  delimiter: " ",
  finalNewline: true,
};

export function _xdump(...args) {
  const pieces = [];
  let result = "";

  for (const a of args) {
    pieces.push(format(a));
  }

  if (this.prefix) {
    result += this.prefix + " ";
  }

  result += pieces.join(this.delimiter);

  if (this.finalNewline) {
    result += "\n";
  }

  std.out.puts(result);
}

function formatArray(obj) {
  return `Array(${obj.length}) [${obj.map((item) => format(item)).join(", ")}]`;
}

function format(value) {
  const type = typeOf(value);
  switch (type) {
    case "null":
    case "undefined": {
      return type;
    }

    case "array": {
      return formatArray(value);
    }

    case "map":
      return formatMap(value);

    case "object":
      return formatObject(value);

    case "symbol": {
      return value.toString();
    }

    case "string":
      if (value.length === 0) {
        return "'empty_string'";
      }

    default:
      return value;
  }
}

function formatMap(obj) {
  const entries = Array.from(obj);
  return (
    `Map(${entries.length}) [` +
    entries
      .map(([key, value]) => `${format(key)}: ${format(value)}`)
      .join(", ") +
    "]"
  );
}

function formatObject(obj) {
  const entries = Object.entries(obj);
  return (
    `Object(${entries.length}) {` +
    entries
      .map(([key, value]) => `${format(key)}: ${format(value)}`)
      .join(", ") +
    " }"
  );
}

function typeOf(value) {
  if (value === null) return "null";
  if (value === undefined) return "undefined";

  if (typeof value === "object") {
    if (Array.isArray(value)) return "array";
    if (value instanceof Map) return "map";
    if (value instanceof Set) return "set";
    return "object";
  }

  return typeof value;
}

export default function xdump(...args) {
  return _xdump.apply(_DEFAULT_CONFIG, args);
}

xdump.configure = function (config) {
  return _xdump.bind(Object.assign({}, _DEFAULT_CONFIG, config));
};
