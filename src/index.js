module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 > 0) return false;
    
    const OPEN_BRACKETS = [];
    const BRACKETS_PAIRS = {};

    bracketsConfig.forEach(bracket => {
        OPEN_BRACKETS.push(bracket[0]);
        BRACKETS_PAIRS[bracket[1]] = bracket[0];
    })

    const stack = [];


    for (let i = 0; i < str.length; i++) {
        let currentSymbol = str[i];

        if (OPEN_BRACKETS.includes(currentSymbol)) {

            if (BRACKETS_PAIRS[currentSymbol] == stack[stack.length - 1] && stack.length != 0) {
                stack.pop();
            } else {
                stack.push(currentSymbol);
            }

        } else {

            if (stack.length == 0) {
                return false;
            }

            if (BRACKETS_PAIRS[currentSymbol] == stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length == 0;


    // if (str.length % 2 > 0) return false;

    // let temp = str;

    // for (let i = 0; i < str.length; i++) {
    //     for (let j = 0; j < bracketsConfig.length; j++) {

    //         temp = temp.replace(bracketsConfig[j][0] + bracketsConfig[j][1], '');

    //         if (temp.length == 0) {
    //             return true;
    //         }

    //     }
    // }
    // return false;
}
