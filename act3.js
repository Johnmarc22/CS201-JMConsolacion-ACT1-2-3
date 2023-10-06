let password = prompt("Enter your password");
if(password.length == 8){
    console.log("Welcome");
}
else if(password == ""){
    console.log("Please provide a password");
}
else if(password >= 8){
    console.log("Password too long");
}
else if(password <= 8){
    console.log("Password too short");
}

