const URL="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact");
const bttn=document.querySelector("#btn")
const getData=async function(){
    console.log("getting facts");
    let response=await fetch(URL);
    console.log(response);
    let data=await response.json();
    factPara.innerText=data[0].text;
};

bttn.addEventListener("click",getData);