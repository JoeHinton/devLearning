const button = document.querySelector('button');

function greet() {
  const name = prompt('What is  your name?');
  alert(`Hello ${name} nice to see you!`);
}

function myFunction() {
  let text;
  let person = prompt("Username:");
  if (person == null || person == "") {
    text = "Canceled"; 
  
  } else if (person == "Admin") {
    text = "Hello!";
  
  } else {
    text = "I don't know you"; }
  document.getElementById("demo").innerHTML = text;
  }
