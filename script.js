function getFormvalue(e) {
  e.preventDefault(); // Prevent form from refreshing
  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  alert(`${fname} ${lname}`);
}

const submitbtn = document.getElementById("form1");
submitbtn.addEventListener("submit", getFormvalue);  // Use 'submit' event
