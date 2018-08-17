/*=======================================================================
// Question: Given a string, find the length of the longest substring 
// without repeating characters.
=======================================================================*/
function longestSubstring (str) {
    let currentLongestStr = '';
    let tempStr = str[0];

    for (let i = 1; i < str.length; i++) {
        if (tempStr.search(str[i]) != -1) {
            if (tempStr.length > currentLongestStr.length) currentLongestStr = tempStr;
            tempStr = str[i];
        }
        else {
            tempStr = tempStr + str[i];
        }
    }

    console.log(`\nThe longest substring: ${currentLongestStr}\nTotal length: ${currentLongestStr.length} characters.`);

    return currentLongestStr;
}

longestSubstring('abcabcbb');
longestSubstring('bbbbb');
longestSubstring('pwwkew');