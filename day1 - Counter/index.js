const value = document.querySelector(".counter")
const header = document.querySelector(".header")
const buttons = document.querySelectorAll("button")

let count = 0;

buttons.forEach((button) => {
    button.addEventListener("click", action);
});

function action(e){
    const style = e.currentTarget.classList;
    if(style.contains("plus")){
        if(count < 1000){
            count++;
        }
        console.log("PLUS clicked");
    }
    else if(style.contains("minus")){
        
            count--;
        console.log("MINUS clicked");
    }
    else{
       count = 0;
        console.log("RESET clicked");
    }
    if(count < 0){
        value.style.color = "#22ffcc"
        header.style.color = "#22ffcc"
    }
    
    if(count >= 40){
        value.style.color = "brown"
        header.style.color = "brown"
    }

    if(count > 0){
        value.style.color = "#93d823"
        header.style.color = "#93d823" 
    }
    if(count === 0){
        value.style.color = "red"
        header.style.color = "red" 
    }

    value.textContent = count;
          
}
