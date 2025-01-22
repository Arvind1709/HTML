$(document).ready(function() {
  $("#myButton").click(function() {
    let myAcount = 1;
    alert("Hello arvind");
    let sum = add();
    let rollno = 100;
    let test = sum;
    alert("Second alert");
    $("#message").text("Button clicked! Inspect the code to learn more.");
  });
});

function add()
{
  let a=2;
  let b=2;
  return a+b;

}