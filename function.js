function getData(dataId,getNextData){
    setTimeout(() => {
        console.log("data is",dataId);
        if(getNextData){
        getNextData();
        }

    }, 2000);
  
}
getData(1,()=>{
    getData(2)
})
// setTimeout(getData(20),2000);