## Info

ID generator for Node.js - Unique - Smart - Short.

## Installation

```bash
yarn add @iamnnort/smart-id
```

## Usage

```javascript
import { generate } from "@iamnnort/smart-id";

console.log(generate()); // AmLXmSwfJmUxoTbP
console.log(generate({ prefix: "cli" })); // cli_0Y3xbmodn37AUQkx
console.log(generate({ prefix: "cli", size: 32 })); // cli_Yhar8gzYEiU2Buf5dse3ZxBCI9Zr9VYg
```

## Parameters

| Parameter | Description            |
| --------- | ---------------------- |
| `prefix`  | Group or entity prefix |
| `size`    | Hash length            |

