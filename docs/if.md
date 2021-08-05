# The "if" methods
## isbool
### Typescript
```typescript
import { isbool } from "whatlib/is"

console.log(isbool(true))   // output: true
console.log(isbool(false))  // output: true
console.log(isbool("hi"))   // output: false
```
### Javascript
```javascript
const { isbool } = require("whatlib/is")

console.log(isbool(true))   // output: true
console.log(isbool(false))  // output: true
console.log(isbool("hi"))   // output: false
```
## isfunc
### Typescript
```typescript
import { isfunc } from "whatlib/is"

console.log(isfunc(() => {console.log("lol")}))   // output: true
console.log(isfunc("hi"))                         // output: false
```
### Javascript
```javascript
const { isbool } = require("whatlib/is")

console.log(isfunc(() => {console.log("lol")}))   // output: true
console.log(isfunc("hi"))                         // output: false
```
## isnum
### Typescript
```typescript
import { isnum } from "whatlib/is"

console.log(isnum(5))                            // output: true
console.log(isnum("hi"))                         // output: false
```
### Javascript
```javascript
const { isnum } = require("whatlib/is")

console.log(isnum())                             // output: true
console.log(isnum("hi"))                         // output: false
```
## isobj
### Typescript
```typescript
import { isobj } from "whatlib/is"

console.log(isobj({}))                           // output: true
console.log(isobj("hi"))                         // output: false
```
### Javascript
```javascript
const { isobj } = require("whatlib/is")

console.log(isobj({}))                           // output: true
console.log(isobj("hi"))                         // output: false
```
## isstr
### Typescript
```typescript
import { isstr } from "whatlib/is"

console.log(isstr("hi"))                         // output: true
console.log(isstr(5))                            // output: false
```
### Javascript
```javascript
const { isstr } = require("whatlib/is")

console.log(isstr("hi"))                         // output: true
console.log(isstr(5))                            // output: false
```
## issymb
### Typescript
```typescript
import { issymb } from "whatlib/is"

console.log(issymb(Symbol("hi")))       // output: true
console.log(issymb("hi"))               // output: false
```
### Javascript
```javascript
const { issymb } = require("whatlib/is")

console.log(issymb(Symbol("hi")))       // output: true
console.log(issymb("hi"))               // output: false
```