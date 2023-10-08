# xdump

`xdump` is a javascript dump function for [QuickJS](https://bellard.org/quickjs/) applications.

## Usage

```javascript
import xdump from "./path/to/xdump.js";

xdump("foo", 42, null);
xdump("", new Map([["France", "Paris"], ["Germany", "Berlin"]], [1, 2, 3]);
```

```bash
[dump] foo 42 null
[dump] 'empty_string' Map(2) [France: Paris, Germany: Berlin] Array(3) [1, 2, 3]
```

### Types

- null, undefined
- string
- number
- symbol
- object
  - Array
  - Object
  - Map
  - Set

### Config

```javascript
const log = xdump.configure({ delimiter: " | ", prefix: "[log]" });

log("foo", 42, null);
```

```bash
[log] foo | 42 | null
```

**Options**

| Option         | Descrition                       | Default  |
| -------------- | -------------------------------- | -------- |
| `delimiter`    | Delimiter to put between fields  | `" "`    |
| `finalNewline` | Add a newline after every output | `true`   |
| `prefix`       | Prefix to add to every output    | `[dump]` |
