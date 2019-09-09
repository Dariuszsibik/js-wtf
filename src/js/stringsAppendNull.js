t = 'test'
undefined

t += 'ing'
"testing"

t=null
null

t += 'ing'
"nulling"


// toString on numbers
// You can cast floats to strings, but not integers.
3..toString();
// "3"
3.toString();
// Uncaught SyntaxError: Invalid or unexpected token

'10' - 3
// 7

'10' + 3
// '103'

'1' / '1'
// 1
'1' * '1'
// 1
'1' + '1'
// '11'