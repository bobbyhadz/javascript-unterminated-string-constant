// SyntaxError: Unterminated string constant in JavaScript

// EXAMPLE 1 - Make sure you've added a closing quote to the string

// ✅ added closing quote to string
const a = 'test';
console.log(a);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Or a closing backtick

// // ✅ works
// const str = `hello
// world`;

// console.log(str);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Validating your string

// const str = 'a\n multi \n line \r string \n!';

// const withoutLineBreaks = str.replace(/[\r\n]/gm, '');
// console.log(withoutLineBreaks); // 👉️ a multi line string !
