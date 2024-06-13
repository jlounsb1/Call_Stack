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