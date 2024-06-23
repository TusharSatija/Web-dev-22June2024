const button=document.querySelector('section');
const inp=document.querySelector('input');
console.log(inp);
console.log(button);

document.addEventListener('click',(e)=>{

    // console.log(e.target.innerText);
    if(e.target.innerText==='C')
        {
            inp.value="";
        }
        else if(e.target.innerText==='bs')
            {
                if(inp.value!=="")
                    {
                       let res=inp.value.split('');
                       res.pop(); 
                        inp.value=res.join("");
                    }
            }
        else if(e.target.innerText==='=')
        {
            try{
                inp.value=eval(inp.value);
            }
            catch(e)
            {
                inp.value="INVALID !!!"
            }
        }
        else {
            inp.value+=e.target.innerText;
        }
})