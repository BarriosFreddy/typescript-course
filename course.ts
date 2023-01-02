console.log("From TS to JS");

type User = {
  readonly _id?: string;
  name: string;
  email: string;
  isActive: string | boolean;
};

function createUser(user: User): User {
  return { name: "", email: "", isActive: false };
}

createUser({
  name: "whoever",
  email: "who@ever.com",
  isActive: "true",
});

// Union types

type UserAccount = {
  login: string;
  password: string;
};

type Person = {
  name: string;
  lastname: string;
};

// the union syntax combines the properties of both types

const UserAdded: Person | UserAccount = {
  login: "",
  password: "",
  name: "",
  lastname: "",
};

// For arrays you can use in this way

const elements: (string | number)[] = ["12", 543];

// Tuples
// Restricts the type position inside the array type
// but at this moment typescript allows something that is wrong. You can use the typical methods of an array
// such as; push, shift and so on, which shouldn't be allowed

const location: [number, number] = [42.12434, 42.04353];
const [lat, long] = location;

location.push(); // it should be an error

// ENUMS

enum COORDINATES {
  NORTH,
  WEST,
  EAST,
  SOUTH,
}

const coord = COORDINATES.NORTH;

// interfaces

interface iUser {
  readonly _id?: string;
  name: string;
  email: string;
  isActive: string | boolean;
  register: () => boolean;
  login(): boolean;
}

const myself: iUser = {
  email: "",
  name: "",
  isActive: false,
  register() {
    return false;
  },
  login() {
    return false;
  },
};

// Differences between interfaces and types

// interfaces are extendable and can be re-opened, it mean you can add more properties to the interfaces without problem, unlike
// types can not be extended and it's not possible to add more properties once the type is created

// abstract class
abstract class SuperUser {
  constructor(public name: string, public email: string) {}
  abstract register: () => boolean;
  login(): boolean {
    return true;
  }
}

//Generics

//generic function

function getValue<T>(param: T): T{
    return param
}

function getValue2<K, T>(param: T, param1: K): K{
    return param1
}

export {};
