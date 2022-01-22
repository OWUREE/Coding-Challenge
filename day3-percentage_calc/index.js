function percentage(){
    const amount = Number(document.getElementById("input").value);
    const percent = document.getElementById("range").value;
    const time = Number(document.querySelector("#time_input").value);
   let answer = document.querySelector("#output");

    

    let result = (amount * percent * time) / 100;
    let value = result.toFixed(2);
    
    answer.innerHTML = value;

   // value = result.toFixed(2)
   let newResult = document.getElementById("percent")
   newResult.innerHTML = percent + "%";
}
const container = document.querySelector(".main-container")
container.addEventListener("input", percentage)