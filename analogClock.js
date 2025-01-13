// Function, to set the trivial hands onto the clock
function setClock() {
  const now = new Date();

  // Calculates the Seconds
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360;

  // Calculates the minutes
  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;

  // Calculates the hours
  const hours = now.getHours();
  const hoursDegrees = (hours % 12 / 12) * 360 + (minutes / 60) * 30;

  // Get the Hand out of the DOM
  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  // This rotates the Hand with the reference of the time
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Upate the clock every second
setInterval(setClock, 1000);


setClock();
