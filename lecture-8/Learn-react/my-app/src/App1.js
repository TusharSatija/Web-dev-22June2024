
const App1=()=>{
    let val=0;
    console.log("this is app ");
    function increment()
    {
        console.log(val);
        val++
    }

    return(
        <div>
           <h1> Value : {val}</h1>
           <button onClick={increment}>increment</button>
        </div> 
    )

};

export default App1;