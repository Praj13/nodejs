function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("data received");
        }, 1000);
    })
}

async function getData() {
    console.log("fetching data");
    const result= await fetchData();
    console.log(result);
}

getData();