module.exports = function repeater(str, options) {
    let newstr = [];
  
    if (options.separator === undefined) {
        options.separator = '+';
    }

    if (options.additionSeparator === undefined) {
        options.additionSeparator = '|';
    }

    if (options.repeatTimes === undefined) {
        options.repeatTimes = 1;
    }

    if (options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = 1;
    }

    if (options.addition === undefined) {
        options.additionRepeatTimes = '';
    }
  
    for (i = 0; i < options.repeatTimes; i++) {
        newstr += str;
    for (j = 0; j < options.additionRepeatTimes; j++) {
        newstr += options.addition;

        if (j < (options.additionRepeatTimes - 1)) {
            newstr += options.additionSeparator;
        }
    } 

    if (i < (options.repeatTimes - 1)) {
        newstr+=  options.separator;
    } 
}

    return newstr;
};
  