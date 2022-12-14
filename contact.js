var fname=document.getElementById("fname");
var lname=document.getElementById("lname");
var email=document.getElementById("email");
var text=document.getElementById("subject");

function submit(){
    var submitOk=true;

    if((fname.value.length<=0) && (submitOk===true)){
        alert("Invalid First Name");
        submitOk = false;
    }

    if((lname.value.length<=0) && (submitOk===true)){
        alert("Invalid Last Name");
        submitOk = false;
    }
    
    if((email.value.indexOf('@')==-1) && (submitOk===true)){
        alert("Invalid e-mail!");
        submitOk = false;
    }
    
    if((text.value.length<=0) && (submitOk===true)){
        alert("Please write something");
        submitOk = false;
    }
    if((text.value.length>100) && (submitOk==true)){
        alert("Over the 100 character limit");
        submitOk = false;
    }
    
    
    if(submitOk===true){
        alert("Email sent successfully")
        fname.value="";
        lname.value="";
        email.value="";
        text.value="";
    }
}