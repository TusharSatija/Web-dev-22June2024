function outer(a)
{
    console.log("inside outer function ...");
    a(); // callback   
}
function inner()
{
    console.log("inside inner function ");
}

outer(inner);