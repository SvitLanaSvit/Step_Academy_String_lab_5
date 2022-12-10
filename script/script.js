function isCompareString(str1, str2){
    if(str1.length - str2.length > 0)
        return 1;
    else if(str1.length - str2.length < 0)
        return -1;
    return 0;
}

function getFirstLetterUppercase(str){
    const s = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(s);
}

function getCountVowelsLetters(str){
    const count = str.match(/[aeiou]/g);
    console.log(count.length);
}

function isContainSpam(str){
    const s = str.toLowerCase().includes("100% безкоштовно, збільшення продажів, тільки сьогодні, невидаляйте, ххх");
    if(s) console.log("SPAM");
    else console.log("Not spam")
}

function isPalindrom(word){
    const w = word.split("").reverse().join("");
    if(word === w) console.log("The word is Palindrom.")
    else console.log("The word isn`t Palindrom.")
}

function getCountOfStr(str){
    const s = str.match(/[ ]/mg);
    console.log(s.length + 1);
}

function getMaxWordLenghtOfString(str){
    const s = str.replace(/[-,.! ?]/g, " ").split(" ");
    let wordMaxLength;
    let max;
    if(s.length != 0){
        wordMaxLength = s[0];
        max = s[0].length;
        for (let i = 1; i < s.length; i++) {
            if(s[i].length > max){
                max = s[i].length;
                wordMaxLength = s[i];
            } 
        }
        return wordMaxLength;
    }
    return -1;
}

function getAvgLenghtOfWordsOfString(str){
    const s = str.replace(/[-,.! ?]/g, " ").split(" ");
    console.log(s);
    let avg = 0;
    let count = 0;
    let sum = 0;
    if(s.length != 0){
        for (let i = 0; i < s.length; i++) {
            if(s[i].length != 0){
                sum += s[i].length;
                count++;
            }
        }
        avg = sum / count;
    }
    console.log(`Average = ${parseInt(avg)} Count of words = ${count}`);
}

function showIndexOfSimbolInString(str, symbol){
    const l = str.split("");
    let count = 0;
    for (let i = 0; i < l.length; i++) {
        if(l[i].includes(symbol)){
            console.log(`index of '${symbol}' = ${i}`);
            count++;
        }
    }
    console.log(`Count of '${symbol}' = ${count}`)
}