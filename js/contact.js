document.querySelector("#contact-form-submit").addEventListener("click", verify);
// check validation of contact form
function verify() {
    let errorMessage = document.querySelector(".error");
    if(document.getElementById("name").value.trim() === "" || document.getElementById("email").value.trim() === "" || document.getElementById("enquiry").value.trim() === ""){
        errorMessage.innerHTML = "Please complete the enquiry form before submitting";
        errorMessage.style.display = "block";
        return false;
    }
    else{
        errorMessage.innerHTML = "";
        errorMessage.style.display = "none";
        let messageBody = {
            "name": document.getElementById("name").value,
            "email": document.getElementById("email").value,
            "inquiry": document.getElementById("enquiry").value,
        }
        sendSupportMail(messageBody);
        return false;
    }
}
const domain = "https://us-central1-third-cc-website.cloudfunctions.net/widgets";
// const domain = "http://localhost:5000/third-cc-website/us-central1/widgets"
function sendSupportMail(messageBody){
    fetch(domain+"/supportEmail",{
        method: "POST", 
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        redirect: 'follow', // manual, *follow, error
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS' 
        },
        body: JSON.stringify({
            "name": messageBody.name,
            "mail": messageBody.email,
            "inquiry": messageBody.inquiry
        })
    })
    .then(res => {
        window.location.reload();
    })
    .catch(err => {
        console.error(err)
    })
}