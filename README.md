# xdump

`xdump` is a javascript dump function for [QuickJS](https://bellard.org/quickjs/) applications.

```javascript
import xdump from "./path/to/xdump.js";

xdump("foo", 42, null);
xdump("", new Map([["France", "Paris"], ["Germany", "Berlin"]], [1, 2, 3]);
```

```bash
[dump] foo 42 null
[dump] 'empty_string' Map(2) [France: Paris, Germany: Berlin] Array(3) [1, 2, 3]
```
