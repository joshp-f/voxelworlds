(function(){
var utils = provides('utils');
utils.extend = function extend() {
    var target = arguments[0],
        i, argument, name, f, value;
    for(i = 1; i < arguments.length; i++) {
        argument = arguments[i];
        if(typeof argument == 'function'){
            argument = argument.prototype;
        }
        for(name in argument) {
            value = argument[name];
            if(value === undefined) continue;
            if(typeof value == 'function'){
                value.name = name;
            }
            target[name] = value;
        }
    }
    return target;
};

utils.clamp = function clamp(a, b, c) {
    return a < b ? b : (a > c ? c : a);
};

})();
