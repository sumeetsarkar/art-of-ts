//-- string type --------------------------------------
let fname: string;
let lname: string;

fname = 'Sumeet'; // OK
lname = 'Sarkar'; // OK

// fname = 1234;
// Error, Type '1234' is not assignable to type 'string'

//-- number type --------------------------------------
let age: number;

age = 28; // OK
// age = '28';
// Error, Type '"28"' is not assignable to type 'number'

//-- object type --------------------------------------
let address: object;

address = {}; // OK
address = new Object(''); // OK

function Address(street: string, city: string, pincode: string) {
  this.street = street;
  this.city = street;
  this.pincode = pincode;
}

address = new Address('ABC Ave', 'Bangalore', '56XX76'); // OK

// address = '';
// Error, Type '""' is not assignable to type 'object'

//-- boolean type --------------------------------------
let isResidentIndian: boolean;

isResidentIndian = true; // OK

// isResidentIndian = 'true';
// Error, Type '"true"' is not assignable to type 'boolean'

// Number, String, Boolean, and Object. These types refer to non-primitive boxed objects
// For eg: Boolean is different from boolean type. Illustration below in boolean example.

// isResidentIndian = new Boolean('true');
// Error, 'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible


//-- any type --------------------------------------
let someRandomInfo: any;

someRandomInfo = 'random string'; // OK
someRandomInfo = 12; // OK
someRandomInfo = false; // OK
someRandomInfo = {}; // OK
someRandomInfo = function() { console.log('random') }; // OK
someRandomInfo = () => { console.log('random') }; // OK
