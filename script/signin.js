let data=JSON.parse(localStorage.getItem("account-data"))||[];
let userform=document.getElementById("form");


btn.addEventListener("click",(event)=>{
    let formdata={
      useremail:userform.emailaddress.value,
      userpassword:userform.password.value,
    };
   

    data.forEach((element,index)=>{
      if(element.email==formdata.useremail && element.password==formdata.userpassword){
        alert("Login In Successful")
        console.log(formdata.useremail)
      }else{
        alert("Wrong Credentials");
        event.preventDefault();
      }
      });

    });