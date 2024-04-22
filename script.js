// Retrieve references to HTML elements
const digitalClockDisplay = document.getElementById("digitalClock");
const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

// Function to update the digital clock display
function updateDigitalClock() {
  const now = new Date(); // Get current date and time
  // Extract hours, minutes, and seconds and pad with leading zeros if necessary
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  // Format time as HH:MM:SS
  const time = `${hours}:${minutes}:${seconds}`;
  // Update digital clock display with the formatted time
  digitalClockDisplay.textContent = time;
  // Request animation frame to continuously update the clock
  requestAnimationFrame(updateDigitalClock);
}

// Function to update the analog clock display
function updateAnalogClock() {
  const now = new Date(); // Get current date and time
  const hours = now.getHours(); // Extract hours
  const minutes = now.getMinutes(); // Extract minutes
  const seconds = now.getSeconds(); // Extract seconds

  // Calculate degrees for each clock hand based on current time
  const hoursDegrees = hours * 30 + minutes * 0.5;
  const minutesDegrees = minutes * 6 + seconds * 0.1;
  const secondsDegrees = seconds * 6;

  // Rotate clock hands to calculated degrees
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // Request animation frame to continuously update the clock
  requestAnimationFrame(updateAnalogClock);
}

// Function to update background image and greeting message based on time of day
function updateBackgroundAndMessage() {
  // Retrieve references to necessary HTML elements
  const timeText = document.getElementById("time-text");
  const timeIcon = document.getElementById("time-icon");
  const body = document.querySelector("body");
  const digitalClock = document.getElementById("digital-clock-container");
  const analogClock = document.getElementById("analog-clock");
  const now = new Date(); // Get current date and time
  const hours = now.getHours(); // Extract hours
  const minutes = now.getMinutes(); // Extract minutes

  // Determine time of day and update background image, greeting message, and icon accordingly
  if (hours >= 6 && hours < 12) {
    // Morning
    // Update background image, greeting message, and icon
    body.style.backgroundImage = "url('./Images/morning.jpg')";
    timeText.textContent = "GOOD MORNING";
    timeIcon.className =
      "fa-solid fa-mug-saucer text-4xl bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] bg-clip-text text-transparent";
  } else if (hours >= 12 && hours < 16) {
    // Afternoon
    // Update background image, greeting message, and icon
    body.style.backgroundImage = "url('./Images/afternoon.jpg')";
    timeText.textContent = "GOOD AFTERNOON";
    timeIcon.className =
      "fa-solid fa-briefcase text-4xl bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] bg-clip-text text-transparent";
  } else if (hours >= 16 && hours < 20) {
    // Evening
    // Update background image, greeting message, and icon
    body.style.backgroundImage = "url('./Images/evening.jpg')";
    timeText.textContent = "GOOD EVENING";
    body.classList.remove("bg-center");
    body.classList.add("bg-bottom");
    timeText.className = "text-center text-4xl font-bold text-black";
    timeIcon.className = "fa-solid fa-burger-soda text-4xl text-black";
  } else if (hours >= 20 && hours < 24) {
    // Night
    // Update background image, greeting message, and icon
    body.style.backgroundImage = "url('./Images/night.jpg')";
    timeText.textContent = "GOOD NIGHT";
    timeText.className = "text-center text-4xl font-bold text-black";
    timeIcon.className = "fa-solid fa-house-night text-4xl text-black";
  } else if (hours >= 0 && hours < 6) {
    // Midnight
    // Update background image, greeting message, and icon
    body.style.backgroundImage = "url('./Images/midnight.jpg')";
    timeText.textContent = "SWEET DREAMS";
    timeText.className =
      "text-center text-4xl font-bold bg-gradient-to-t from-[#e6e9f0] to-[#eef1f5] bg-clip-text text-transparent";
    timeIcon.className =
      "fa-solid fa-moon text-4xl bg-gradient-to-t from-[#e6e9f0] to-[#eef1f5] bg-clip-text text-transparent";
    // Adjust background colors for midnight theme
    digitalClock.style.background =
      "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)";
    analogClock.style.background =
      "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)";
  }
}

// Initialize the clocks and background/message updater
updateDigitalClock();
updateAnalogClock();
updateBackgroundAndMessage();
// Update background/message every minute to reflect changes in time
setInterval(updateBackgroundAndMessage, 60000);
