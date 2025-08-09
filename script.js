function validateLogin() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  if (!email || !password) {
    alert("Please fill in all fields.");
    return false;
  }
  return true;
}

function validateRegister() {
  const username = document.getElementById("regUsername").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  const confirm = document.getElementById("regConfirm").value;

  if (!username || !email || !password || !confirm) {
    alert("All fields are required.");
    return false;
  }
  if (password !== confirm) {
    alert("Passwords do not match.");
    return false;
  }
  return true;
} 
