document.getElementById("akanName").addEventListener("submit", function(event) {
  event.preventDefault();

  const day = parseInt(document.getElementById("day").value, );
  const month = parseInt(document.getElementById("month").value, );
  const year = parseInt(document.getElementById("year").value, );
  const gender = document.getElementById("gender").value;
}

if (!day || !month || !year || !gender) {
  alert("Kinldly ensure all empty forms have been filled!");
  return;
}
