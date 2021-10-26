

const header = document.getElementById("header")
const screen = document.querySelector(".screen")
 
function c(val){
   screen.value = val;
}
function v(val){
   screen.value += val;
}
function d(){
   var dd = screen.value;
  screen.value = dd.substring(0, dd.length-1);
}
function e(){
    try{
        c(eval(screen.value))
    }
    catch(e){
        c('Error')
    }
}