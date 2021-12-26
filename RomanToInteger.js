/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    const stringLength = s.length;
    let total = 0;

    for (let i = 0; i < stringLength; i++) {
        if (i < stringLength - 1 && romanNumerals[s[i + 1]] > romanNumerals[s[i]]) {
            total -= romanNumerals[s[i]];
        } else {
            total += romanNumerals[s[i]];
        }
    }
    return total;
};

/*

- Check if the current letter is followed by one with a higher value (indicating a deduction)
- Remove the current letter's numeric value from the total
- Add the current letter's numeric value to the total
- Return the total

*/
