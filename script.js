let userFirstname = prompt(`Quel est ton prénom?`);
function sayHello(firstname, hour) {
  let message = "Bonjour !";
  if (hour >= 18) {
    console.log(`Bonsoir ${firstname} !`);
  } else {
    message = `Bonjour ${firstname} ! `;
    document.querySelector("h1").innerText = message;
  }
}

sayHello(`Beyonce`, 11);
sayHello(`Beyonce`, 18);
sayHello(`Beyonce`, 17);
sayHello(userFirstname);
