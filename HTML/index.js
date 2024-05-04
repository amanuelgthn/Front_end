#!/usr/bin/env node

function changing(arg1, arg2) {
    arg1.item = "bar";
    arg2 = {item: "bar"};
}

var obj1 = { item: "foo" },
    obj2 = { item: "foo" };

    changing(obj1, obj2);

    console.log(obj1.item);
    console.log(obj2.item);


    o