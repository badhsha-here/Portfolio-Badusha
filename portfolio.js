function sendMail() {
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_eqgw7vu";
  const templateID = "template_b3x0wfj";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log("Email sent successfully:", res.status);
      alert("Your Response Sent Successfully");
    })
    .catch(err => {
      console.error("Email send error:", err);
      alert("Failed to send message. Please try again later.");
    });
}


if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('load', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


  


