module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 > 0) return false;
    let temp = str;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            temp = temp.replace(bracketsConfig[j][0] + bracketsConfig[j][1], '');
        }
    }
    return temp.length === 0;
}
