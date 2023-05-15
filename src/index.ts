function add(input: number, input2: number): number{
    return input + input2
} 

function printValue(value: string): void{
   console.log("The printed value is: ", value);
}

let funcresult: (a: number, b: number) => number;

funcresult = add;

console.log(funcresult(3,4))



