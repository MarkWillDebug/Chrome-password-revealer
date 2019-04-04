document.addEventListener("DOMContentLoaded", ()=>
{
    let input = document.getElementById("show-always");
    let button =document.getElementById("showPass");

    button.addEventListener("click", ()=>{ button.innerText = button.innerText === "Show" ? "Hide" :"Show";

    function showPass() 
      {
        let passwordFields = document.querySelectorAll("input[name='password']") || document.querySelectorAll("input[type='password']");

        if(passwordFields.length === 0)
        {
          console.log("nothing to show");
          return;
        }
        passwordFields.forEach(element => { element.type = element.type === "password" ? "text" : "password";});
      };
    chrome.tabs.executeScript({code: '(' + showPass + ')();' }, (results) => {console.log(results[0]);});});
});                                                  
