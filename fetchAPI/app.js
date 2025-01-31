const URL="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact");
const bttn=document.querySelector("#btn")

//using async await
const getData=async function(){
    console.log("getting facts");
    let response=await fetch(URL);
    console.log(response);
    let data=await response.json();
    factPara.innerText=data[0].text;
};

//using promise chain
// function getData(){
//     fetch(URL).then((result)=>{
//         return result.json();
//     })
//     .then((data)=>{
//     factPara.innerText=data[0].text;
        
//     })
// }

bttn.addEventListener("click",getData);