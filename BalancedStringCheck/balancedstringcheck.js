/*======================================================================
// This function will evaluate the parenthesis and brackets in a passed
// in string to determine whether or not the characters are balanced
// with all left-sided parenthesis and brackets having matching
// right-sided parenthesis and brackets.
======================================================================*/
balancedStringChecker = (str) => {
    const inputExpression = str.split(''); // Delineate passed in string
    const openExpression = ['{', '(']; // Array of opening expressions for evaluation
    const closeExpression = [')', '}']; // Array of closing expressions for evaluation
    const evaluatorArray = [];

    // Loop through all string indexes and either push or pop to evaluator Array. If any items
    // are left in the array upon completion, then there are unclosed expressions and the test
    // will fail.
    for (let i = 0; i < inputExpression.length; i++) {
        if (openExpression.indexOf(inputExpression[i]) > -1) evaluatorArray.push(inputExpression[i]);
        if (closeExpression.indexOf(inputExpression[i]) > -1) evaluatorArray.pop();
    }

    // Ternary expression for determining if balance check passed.
    return evaluatorArray.length === 0 
        ? console.log(`\nPASS! Expression '${str}' is balanced.\n`) 
        : console.log(`\nFAIL! Expression '${str}' is not balanced.\n`);

}

// Run checker
balancedStringChecker("({})");
balancedStringChecker("({)");
balancedStringChecker("({{}})");