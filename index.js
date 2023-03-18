var jalaali = require("jalaali-js");

const jd = jalaali.toJalaali(new Date());
const jds = jd.jy + "-" + jd.jm + "-" + jd.jd;
console.log(jds);
