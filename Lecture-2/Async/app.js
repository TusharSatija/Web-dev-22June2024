

// setTimeout(()=>{
    //     console.log("this function is run after 2 sec");
    // },2000);

console.log("One");
setTimeout(()=>{
    console.log("one.1")
},1000);
console.log("two");
setTimeout(()=>{
    console.log("two.1");
},0);
console.log("two.2");
setTimeout(()=>{
    console.log("three")
},2000);



let isgood=true;
setTimeout(()=>{
    isgood=false;
},0);
console.log(isgood);