var pricing = require('./faker');
main = {
    main: phone => {
        var number = main.cleanNumber(phone);
        var prefixLength = main.prefixLength();
        var operator = { fake: true };
        for (var i = prefixLength; i >= 0; i--) {
            var prefix = number.substring(0, i);
            pricing.forEach(item => {
                if (item.prefix == prefix) {
                    if (operator.fake || item.price < operator.price) {
                        operator = item;
                    }
                }
            });
            if (!operator.fake) return operator;
        }
        return { name: null, prefix: null, price: null };
    },
    cleanNumber: number => {
        if (number) {
            var rtn = number.split('+').join("");
            rtn = rtn.split(' ').join("");
            rtn = rtn.split('-').join("");
            return rtn;
        }
        return number;
    },
    prefixLength: () => {
        var length = 0;
        pricing.forEach(x => {
            if (x.prefix.length > length) length = x.prefix.length;
        });
        return length;
    }
}
module.exports = main;
