#!/usr/bin/env node

for (var i = 0; i < 4; i++) {
    setTimeout(function () {
        console.log(i);
}, 0)
}



var User = name => this.name = name;
var u1 = new User("Hanter");
console.log(u1.name);