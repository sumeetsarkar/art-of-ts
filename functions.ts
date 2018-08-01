//-- function type --------------------------------------
let simplyLog: () => void;

simplyLog = () => console.log('simplyLog');
simplyLog = () => {
  console.log('simplyLog');
  return 'simplyLog';
}

// simplyLog('hello'); // Error, Expected 0 arguments, but got 1

let add: (num1: number, num2: number) => number;

add = (a, b) => a + b;

// add = (a, b) => { a + b };
// Error,
// Type '(a: number, b: number) => void' is not assignable to type '(num1: number, num2: number) => number'

// add = (a, b) => {
//   return `${a + b}`;
// };
// Error,
// Type '(a: number, b: number) => string' is not assignable to type '(num1: number, num2: number) => number'

add(1, 2); // OK

// add(1, '2');
// Error, Argument of type '"2"' is not assignable to parameter of type 'number'


//----------------------------------------
// Declaring no param types vs any
let subtract1: (num1, num2) => number;
let subtract2: (num1: any, num2: any) => number;

subtract1 = (num1, num2) => num1 - num2;
subtract2 = (num1, num2) => num1 - num2;

subtract1(2, 1);
subtract2('2', '1');

// BOTH declarations of subtract1 and subtract2 are same
// subtract 1 mentions no parameter type whereas subtract2 generalized parameter types to be any

//----------------------------------------
// Single line assignment will look like this
const multiply: (num1: number, num2: number) => number
  = (num1, num2) => num1 * num2;

multiply(1, 2);

// What happens when we try using non number type for arithmetic operation
// const multiply: (num1: number, num2: string) => number = (num1, num2) => num1 * num2;
// Error,
// The right-hand side of an arithmetic operation must be of type 'any', 'number' or an enum type.


//----------------------------------------
// declaring a function expression, accepting a function param
const someFunctionExpAcceptingFunction: (arg: number, callback: (() => void)) => void
  = (arg, callback) => {
    callback();
  };

someFunctionExpAcceptingFunction(0, () => {});

// declaring a function expression, accepting a function param, and returning a function
const someFunctionExpReturningFunction: (arg: number, callback: (() => void)) => (() => void)
  = (arg, callback) => {
    callback();
    return () => {};
  };

const resultFunc = someFunctionExpReturningFunction(0, () => {});
resultFunc();

// const resultFunc = someFunctionExpReturningFunction(0, () => {}) + 2;
// Error,
// Operator '+' cannot be applied to types '() => void' and '2'


// declaring regular functions
function addRegularFunction(num1: number, num2: number): number {
  return num1 + num2;
}

addRegularFunction(1, 2);

function regularFunction(arg: number, callback: () => void): void {
  callback();
}

regularFunction(0, () => {});

// dual return types
function regularFunctionDynamicReturnType(arg: number): string | number {
  return arg ? `${arg}` : arg;
}

regularFunctionDynamicReturnType(1);

// Function return type
function regularFunctionReturningFunction(arg: number): Function {
  return () => {};
}

regularFunctionReturningFunction(0)();
