// const P1=new  Promise((res,rej)=>{
//     res();
// });


// console.log(P1);

// const P2= new Promise((res,rej)=>{
//     rej();
// })

// console.log(P2);


// const P3 = new Promise((res,rej)=>{

// })
// console.log(P3);

 
// if the number is even then promise get fulfilled otherwise promise get rejected


function fun(num)
{
    return new Promise((res,rej)=>{
        if(num%2===0)
        {
            res("the number is even");
        }
        else{
            rej(num);
        }

    })
}
fun(5)
.then((data)=>{
        console.log(data);
})
.catch((err)=>{
    console.log(err);
})


