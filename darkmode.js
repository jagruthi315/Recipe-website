
    
//    let darkMode= localStorage.getItem("darkmode")
//      const themeToggle=document.getElementById("theme-toggle")
    

//      const enableDarkmode=()=>{
//         document.body.classList.add("darkmode")
//         localStorage.setItem("darkmode","active")
//      }

//      const disableDarkmode=()=>{
//         document.body.classList.remove("darkmode")
//         localStorage.setItem("darkmode",null)
//      }

//      if (darkmode ==="active") enableDarkmode()
//         // the just above code of if will be used so that if the dark mode is enabled and we have stoped the webpage for a while and reopen it then it will open with dark mode just the way the user left it.  

//     themeToggle.addEventListener("click",()=>{
//         darkMode !=="active"?enableDarkmode():disableDarkmode();
//         // if you are not able to understand this code then know this is the same thing as writing the ifelse condition but in an easier format. before ? is the if condition after? is the code which is executed if the "if" condition is true and after: is the code which will be executed if the "if" condition is false just like else block. 
        
//     })























const themeToggle=document.getElementById("theme-toggle").addEventListener("click", function(e) {
        e.preventDefault();
        //  e.preventDefault();  this prevents the data from getting auto-submitted and also prevents from the page being refreshed all the time even after a single click and that e is the parameter.
    
        document.body.classList.toggle("dark");
        // Toggle visibility between moon and sun icons
    const moonIcon = document.getElementById("firstchild");
    const sunIcon = document.getElementById("secondchild");

    if (document.body.classList.contains("dark")) {
        moonIcon.style.display = "none";
        sunIcon.style.display = "block";
    } else {
        moonIcon.style.display = "block";
        sunIcon.style.display = "none";
    }

     });


     
   
    
    
