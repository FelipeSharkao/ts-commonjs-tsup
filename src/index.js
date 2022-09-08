const sayHi = require("./say-hi").default;
const util = require("util");

console.log(util.inspect(sayHi()));
