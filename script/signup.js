let userform = document.getElementById("form");
let btn=document.getElementById("btn");
let data = JSON.parse(localStorage.getItem("account-data")) || [];
btn.addEventListener("click", (event) => {

    let formdata = {
        name:userform.name.value,
        lastname:userform.lastname.value,
        email:userform.emailaddress1.value,
        confirmemail:userform.emailaddress2.value,
        zipcode:userform.zipcode.value,
        phone:userform.phone.value,      
        password:userform.password.value,

    };
    data.push(formdata);
    localStorage.setItem("account-data", JSON.stringify(data));
});