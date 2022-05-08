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
      const pass = prompt("Password:");

function myFunction2() {
  if (pass == null || pass == "") {
    text = "Nope";
  }
}

  } else {
    text = "I don't know you"; }
  document.getElementById("demo").innerHTML = text;

  if (pass == null || pass == "")  {
    text = "Incorrect";
  }

}

// function myFunction2() {
//   if (pass == null || pass == "") {
//     text = "Incorrect";
//   }
//   document.getElementById("demo").innerHTML = text;

// }

