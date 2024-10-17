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
        factPara.style.fontSize = "20px";
            factPara.style.fontWeight = "bold";
            factPara.style.color = "#333";
            factPara.style.padding = "8px 150px"; 

            factPara.style.backgroundColor = "#f9f9f9";
            factPara.style.border = "2px solid #ddd";
            factPara.style.borderRadius = "10px";
            factPara.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            factPara.style.width = "80%";
            factPara.style.margin = "20px auto";
            factPara.style.textAlign = "center";
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
btn.style.textAlign="center";