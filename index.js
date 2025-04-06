function sendmail(){
    let params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value
    };
    const serviceID = "service_msb0ccd";
    const templateID = "template_cltjjut";
emailjs.send(serviceID,templateID,params).then(res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message send successfully");
    }
)
.catch((err) => document.write(err));
}

