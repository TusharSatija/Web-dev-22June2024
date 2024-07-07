let arr=["still Rollin" ,"cheques" ,"all is well"];

let foundData=arr.find((song)=>{
    return  song.includes("all"); 
})
console.log(foundData);
