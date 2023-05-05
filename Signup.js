
//Login Page
function myFunction(){ 
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    document.getElementById("btn1").addEventListener("click",myFunction)
     if(email==null ||email==""){
        alert("Email cannot be blank");
        return false;
     }else if (password==null ||password==""){
        alert("Password cannot be blank");
     }
    else{
        alert("You have successfully logined.You are redirected to shop page.");
        window.location="Shop.html";
}
}

//Sign Up page
    function ValidFunction(){
        var name=document.getElementById("name").value;
        var email=document.getElementById("email").value;
        var password=document.getElementById("password").value;
        var cpassword=document.getElementById("cpassword").value;
         document.getElementById("btn").addEventListener("click",ValidFunction)
         if(name==null ||name==""){
            alert("Name cannot be blank");
         }else if(email==null ||email==""){
            alert("Email cannot be blank");
         }else if (password==null ||password==""){
            alert("Password cannot be blank");
         }
         else if (password.length<6){
            alert("Password must be atleast 6 characters");
         }else if(password!=cpassword){
        alert("Both passwords are not matching");}
        else{
            alert("You have successfully registered.You are redirected to shop page.");
        window.location="Shop.html";
        return false;
}
}
//Contact page
function Validate(){
var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var message=document.getElementById("message").value;
document.getElementById("btn2").addEventListener("click",Validate)
if(name==null ||name==""){
    alert("Name cannot be blank");
}else if(email==null ||email==""){
    alert("Email cannot be blank");
} else if(message==null ||message==""){
    alert("Message cannot be blank");
}else{
    alert("Your message has been sent.You are redirected to Home page.");
    window.location="index.html";
    return false;
}}
//Shipping
function Validation(){
    alert("Your order is placed succesfully and other details will be sent to your email.Thank you!");
    window.location="index.html";
}



