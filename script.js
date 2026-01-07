function selectRoom(roomNumber) {
  document.getElementById("room").value = roomNumber;
}

function bookRoom() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const room = document.getElementById("room").value;
  const date = document.getElementById("date").value;
  const days = document.getElementById("days").value;

  if (!name || !phone || !room || !date || !days) {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerText = "Please fill all fields";
    return;
  }

  document.getElementById("message").style.color = "green";
  document.getElementById("message").innerText =
    "Room " + room + " booked successfully!";
}
