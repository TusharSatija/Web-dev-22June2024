let input=document.querySelector('input');
let button =document.querySelector('button');
let list=document.querySelector('#list');
let search_val="";

button.addEventListener('click' ,()=>{
    search_val=input.value;
    fetchdata();
    input.value="";
    console.log(search_val);
});


function fetchdata()
{
    fetch(`https://api.tvmaze.com/search/shows?q=${search_val}`)
    .then(function(res){
        return res.json();
    })
    .then((data)=>{
        manipulateDom(data);
        console.log(data);
    })
}


function manipulateDom(alldata)
{

    while(list.firstChild)
    {
        list.firstChild.remove();
    }
    for(let data of alldata)
    {
        let figure=document.createElement('figure');
        figure.innerHTML=` 
        <img  src=${data.show.image.medium} />
        <h2>Name : ${data.show.name}</h2>
        <h5> Language : ${data.show.language}</h5>
        ` 
        list.appendChild(figure);
    } 
}



