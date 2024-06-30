// async function fetchdata()
// {
//     let data = await fetch("https://api.tvmaze.com/search/shows?q=girls")
//     try {
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchdata();

// function fetch_Response()
// {
//     fetch("https://api.tvmaze.com/search/shows?q=girls")
//     .then((res)=>{
//        return res.json();  
//     })
//     .then((data)=>{
//         console.log(data);
//     })

// }
// fetch_Response();

// console.log(fetch_Response());


// fetch  data using axios ..



async function fetch_data()
{
        let data =await axios.get("https://api.tvmaze.com/search/shows?q=girls");

        console.log(data);

}
fetch_data();