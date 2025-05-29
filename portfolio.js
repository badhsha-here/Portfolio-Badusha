emailjs.init('HQ-V_VB5DvFnNJgnE');

function sendMail() {
  const params = {
    fname: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
  };

  const serviceID = "service_eqgw7vu";
  const templateID = "template_b3x0wfj";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      console.log("Email sent successfully:", res.status);
      alert("Your Response Sent Successfully");
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch(err => {
      console.error("Failed to send email:", err);
      alert("Failed to send message. Please try again later.");
    });
}


if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('load', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


  


