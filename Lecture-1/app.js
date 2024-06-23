console.log("connected");
// let a=true;
// typeof(a)
// 'boolean'
// a=12
// 12
// typeof(a)
// 'number'
// a=12.5
// 12.5
// typeof(a)
// 'number'
// a=[1,2,3,4]
// (4) [1, 2, 3, 4]
// typeof(a)
// 'object'
// a="tushar"
// 'tushar'
// typeof(a)
// 'string'


// object -- >  Key - value pair
let student={
    name1: "abc",
    id:1212,
    age:21
}
console.log(student.id);
console.log(student.age);
console.log(student.name1);




//functions

//defination
function fun1()
{
    console.log("this is a normal function")
}

fun1();
//calling


function sum1(a,b)
{
    return a+b;
}

console.log(sum1(3,4));
console.log(sum1(13,6));



let sum2=(c,d)=>{
    return c+d;
}

// let sum2=(c,d)=>c+d;

console.log(sum2(34,45));


for(let i=0;i<10;i++)
{
       console.log(i); 
}


// 1st  defination ---  when we pass a function inside another as a argument is known as Hof
function outer(a)  //HOF  ----- > higher order function....
{
      a();   // callback function
    console.log("outer function......");
}
function inner()
{
    console.log("inside inner function .....");
}
outer(inner);

// 2nd defination of Hof  when we return entire function inside the outer function is also known as Hof

function outer()  //HOF
{
    let a=10
    function inner()
    {
        console.log(a);
    }
    return inner;
}

let res=outer();  // function invoke
res();




let arr=[1,2,3,4,5,6];

// let cube1=[1,8,27,...];

let res1=arr.map((item,index)=>{
         console.log(index);
       return item*2;
})
console.log(res1);


let arr1=["a","b","c","d"];
// let res2=["aa","ba" ,"ca" ,"da"];

let res2=arr1.map((data)=>{
        return data+"a";
})
console.log(res2);

// filter

let even=arr.filter((itm)=>{
    return itm%2==0;
})

console.log(even)


let fruits=["Mango","banana"];
// let shakes=["Mango Shake", " banana shake"];


let shakes=fruits.map(function(s){
    return s+=' shakes'
});
// return shakes;]}
console.log(shakes)


// let arr = [1, 2, 3];
let res3 = arr.map((item, index) => {
  console.log(index);
  return item**3;
})
console.log(res3);


let fruit=["apple" ,"orange","pinapple",'lichi','mix-fruit'];
// let juices=["apple juice" ,"orange juice","pinapple juice",'lichi juice','mix-fruit juice']

let  juices=fruit.map(function(itm){
    return itm+" juice";
})
console.log(juices);

// reduce

let total_sum = arr.reduce((sum,data)=>{
        return sum+data
},0);

console.log(total_sum);











