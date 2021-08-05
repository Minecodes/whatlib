const { is } = require("../lib/main")

// isbool

console.log("────────────────── isbool ──────────────────");
console.log(is.isbool(true))
console.log(is.isbool(false))
console.log(is.isbool("hi"))

// isfunc

console.log("────────────────── isfunc ──────────────────");
console.log(is.isfunc(() => {}))
console.log(is.isfunc("hi"))

// isnum

console.log("────────────────── isnum ──────────────────");
console.log(is.isnum(5))
console.log(is.isbool("hi"))

// isobj

console.log("────────────────── isobj ──────────────────");
console.log(is.isobj({}))
console.log(is.isobj("hi"))

// isstr

console.log("────────────────── isstr ──────────────────");
console.log(is.isstr("hi"))
console.log(is.isstr(5))

// issymb

console.log("────────────────── issymb ──────────────────");
console.log(is.issymb(Symbol("hi")))
console.log(is.isbool("hi"))