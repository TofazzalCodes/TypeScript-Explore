const addTwo = (a: number, b: number) : number => {
    return a + b ;
}

const sum = addTwo(6, 6);
console.log(sum);



// let myString : string = "programming hero";
// let myNumber: number = 34343 ;
// let myBoolean: boolean = true ; 
// let mySymbol: symbol = Symbol();
// let myBigInt : bigint = 100n ; 

// * Array and Tuple an readonly modifier

const arr : string[] = ["Programming", "Hero"];
arr.push("Next Level");
console.log(arr);

const numArr : number[] = [1,3,5];
console.log(numArr);

// const arr : Array<string> = ["programming", "hero"];
// * tuple

const dakhaLatLong: readonly [number, number] = [23.445, 893.343];

// * optional, default & rest parameter (...args)

// * optional parameter
const concatName = (firstName: string, lastName?: string) => {
 if(!lastName){
    return firstName
 }
 return firstName + " " + lastName
}
console.log(concatName("towfique","hossain"));

// * default parameter
const greetings = (fullName: string, greeting = "Hello") => {
    console.log(greeting + " " + fullName);
    
}
greetings("mir")

// * rest parameter (...args)

const sumNumber = (...numbers: number[]) => {
    return numbers.reduce((total, sum) => total + sum, 0)
}
sumNumber(1,3,5,8,7,6)


const logUserAction = (...args : [name: string, age: number, isActive: boolean]) => {
    const [name, age] = args;
    console.log(name + " " + age);
    
}
logUserAction("mir", 184, false)