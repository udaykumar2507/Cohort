function dosometing<T> (arg: T):T{
    return arg;
}

const result1 = dosometing<string>("hello");
const result2 = dosometing<number>(123);

console.log(result1); // Output: hello
console.log(result2); // Output: 123


function getFirstElement<T>(arr : T[]): T | undefined {
    return arr[0];
} 

const num = getFirstElement([1, 2, 3]);     // num: number
const str = getFirstElement(["a", "b"]);    // str: string

console.log(num); // Output: 1      
console.log(str); // Output: a
