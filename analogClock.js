// Function to set the clock hands
function setClock() {
  const now = new Date();

  // Calculate the Seconds
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 270; // Sets the initial rotation to 270°, since the layout wasn't correct before

  // Calculate the Minutes
  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 270; // Sets the initial rotation to 270°, since the layout wasn't correct before

  // Calculate the Hours
  const hours = now.getHours();
  const hoursDegrees = (hours % 12 / 12) * 360 + (minutes / 60) * 30 + 270; // Sets the initial rotation to 270°, since the layout wasn't correct before

  // Get the Hands from the DOM
  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  // Rotate the Hands based on the time
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Update the clock every second
setInterval(setClock, 1000);

setClock();
