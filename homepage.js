document.querySelector("#loginPage").addEventListener("click",openLoginPage);

let customerData=JSON.parse(localStorage.getItem("signUpDetails"));
   
    function openLoginPage(){
        window.location.href="login.html"
    }
document.querySelector(".hundred1").addEventListener("click",function(){
    window.location.href="Products.html"
})

document.querySelector("#main-heading>h1").addEventListener("click",function(){
    window.location.href="homeLogin.html"
})


    





