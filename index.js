// let fullpage = document.querySelector(".fullpage");
let togglebtn = document.querySelector(".toggle-btn");
let mainContent = document.querySelector(".main-content h1");
togglebtn.addEventListener("click",(e)=>{
//check light-mode,if present
    if(togglebtn.classList.contains("light-mode") == true){
        togglebtn.classList.remove("light-mode");
        togglebtn.classList.add("dark-mode");
      //set dark mode
        mainContent.style.color ="black";
        document.body.style.backgroundColor = "white";
       //display:block for sun 
        document.querySelector("#sun1").style.display = "block";
        document.querySelector("#moon1").style.display ="none";
    }
    else{
        //check for dark mode
        togglebtn.classList.remove("dark-mode");
        togglebtn.classList.add("light-mode");
         //set light mode
        document.body.style.backgroundColor="black";
        mainContent.style.color = "white";
        //display:none for sun
        document.querySelector("#moon1").style.display = "block";
        document.querySelector("#sun1").style.display ="none";
        
    }
});
