#!/usr/bin/env node

var hero = {

    _name: 'John Doe',
    
    getName: function() {
    
    return this._name;
    
    }
    
    };
    
    var getHeroName = hero.getName;
    
    console.log(getHeroName()); //#1 console.log(hero.getName());
    function multiplier(n) { return n * this.modifier; }

const times2 = {modifier: 2};
const times5 = {modifier: 5};

console.log(multiplier.apply(times2, [5, 4]));

let summer = {

data: [ 'Jul', 'Aug', 'Sep']
}

let winter = {

data: ['Dec', 'Jan', 'Feb'],
}

getLogger: function() {
    return () => console.log(this.data);

}

var logger = winter.getLogger();

logger();

logger.call(summer);
