function  outer()
{
    let num=0;
    function inner()
    {
        num++;
        console.log(num);
    }
    return inner;
}

let res=outer();
res();  //1
res();  //2
res();  //3
res();  //4
res();  //5
res();  //6