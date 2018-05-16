"use strict";

var GuessBookContract = function () {
   LocalContractStorage.defineMapProperty(this, "dataMap");
   LocalContractStorage.defineMapProperty(this, "bookMap");
   LocalContractStorage.defineProperty(this, "size");
};

GuessBookContract.prototype = {
    init: function () {
        this.size = 0;
    },

    setAllBook: function () {
        var index = this.size;
        this.arrayMap.set(index, key);
        this.dataMap.set(key, value);
        this.size +=1;
    },

    get: function (key) {
        return this.dataMap.get(key);
    },

    len:function(){
      return this.size;
    },

    forEach: function(limit, offset){
        limit = parseInt(limit);
        offset = parseInt(offset);
        if(offset>this.size){
           throw new Error("offset is not valid");
        }
        var number = offset+limit;
        if(number > this.size){
          number = this.size;
        }
        var result  = [];
        for(var i=offset;i<number;i++){
            var key = this.arrayMap.get(i);
            var object = this.dataMap.get(key);
            var temp={
                index:i,
                key:key,
                value:object
            }
            result.push(temp);
        }
        return JSON.stringify(result);
    }
};

module.exports = GuessBookContract;