let radii=[1,2,3,4,5];
function Calaculate(helper)
{
    let res=[];
    for(let i=0;i<radii.length;i++)
        {
            res.push(helper(radii[i]));
        }
        console.log(res);
}
function Area(r)
{
    return Math.PI*r*r;
}
function Perimeter(r)
{
    return 2*Math.PI*r;
}

function Sphere(r)
{
    return 4/3*(Math.PI*r*r*r);
}
function HemiSphere(r)
{
    return 2/3*(Math.PI*r*r*r);
}


Calaculate(Area);
Calaculate(Perimeter);
Calaculate(Sphere);
Calaculate(HemiSphere);



// To Convert arr to string use join func
// To Convert string to arr use split func

// input ---- >   This is some Dummy Data 
// output ----->  Data Dummy some is This  
// output1 ----->  siht  si emos ymmud atad 






let str= "This is Some Dummy Data";

    let res=str.split(' ');
    let ans="";
    for(let i=0;i<res.length;i++)
        {
            ans+=res[i].split('').reverse().join("")+" ";
            console.log(res[i].split('').reverse().join(""));
        }
        console.log(ans);




    str.split(" ").reverse().join(" ");

    // let arr=str.split(" ");
    // arr.reverse();
    // arr.join("");

    // console.log(arr.join(" "));


//Home Work

/*
    let n=3;  1+2+3=6
    sum  of n natural number 


    n 
    permutaion of a number  

    n,r 
    combination of a number 

*/












