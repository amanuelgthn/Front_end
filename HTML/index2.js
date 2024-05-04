#!/usr/bin/env node

const x = 5;
var obj = {
    x: 10,
    doIt: function(){
        var x = 20;
        setTimeout(()=>{
            console.log(this.x);
        }, 10);
    }
};
obj.doIt();