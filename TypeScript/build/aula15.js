"use strict";
function fsoma(...n) {
    let s = 0;
    for (let en of n) {
        s += en;
    }
    return s;
}
console.log(fsoma(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));
