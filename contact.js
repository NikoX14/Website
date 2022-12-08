var fname=document.getElementById("fname");
var lname=document.getElementById("lname");
var email=document.getElementById("email");
var text=document.getElementById("subject");

function submit(){
    var submitOk=true;
    if(fname.value.length<=0){
        alert("Invalid First Name");
        submitOk = false;
        console.log("fname");
    }

    if(lname.value.length<=0){
        alert("Invalid Last Name");
        submitOk = false;
        console.log("lname");
    }
    
    if(email.value.indexOf('@')==-1){
        alert("Invalid e-mail!");
        submitOk = false;
    }
    
    if(text.value.length<=0){
        alert("Please write something");
        submitOk = false;
        console.log("text");
    }
    
    
    if(submitOk===true){
        alert("Email sent successfully")
        fname.value="";
        lname.value="";
        email.value="";
        text.value="";
    }
}