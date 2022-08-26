document.querySelector("#loginPage").addEventListener("click",openLoginPage);

let customerData=JSON.parse(localStorage.getItem("signUpDetails"));

let customerName=customerData.name;
    console.log(customerName);
    let customer=document.querySelector("#loginPage").innerText;
    console.log(customer)
    customer=customerName
        
    function openLoginPage(){
        window.location.href="login.html"
    }

    





