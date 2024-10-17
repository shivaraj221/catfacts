const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn=document.querySelector("#btn");

function getfact(){
    fetch(URL).then((response)=>{
        return response.json();
    })
    .then((data) => {
        console.log(data);
        // Generate a random index to get a new fact each time
        const randomIndex = Math.floor(Math.random() * data.length);
        // Update the innerText of factPara with the random fact
        factPara.innerText = data[randomIndex].text;
    })
}

/* 
const getFacts = async()=>{
    console.log("getting data......");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    for(i=0;i<=10;i++){
        factPara.innerText=data[i].text;
    }
    
}; */
btn.addEventListener("click",getfact);