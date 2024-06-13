let counter =0;

function callStack() {
    counter=counter+1;
    callStack();
}

try {
callStack();

}
catch{
    console.log(counter)
}


//this is the trampoline example from codeSandbox
// const trampoline = (f, ...args) => {
//     let result = f(...args);
//     while (typeof result === "function") {
//       result = result();
//     }
//     return result;
//   }

//   const facto = (n, a = 1) => {
//     if (n === 0) return a;
//     return () => facto(n - 1, n * a);
//   }

//   const factorial = (n) => {
//     if (n === 0) return 1; // The base case, to stop recursion
//     return n * factorial(n - 1); // The recursive call
//   }
//   console.log(trampoline(facto(10000)))