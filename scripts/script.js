//user input
document
  .getElementById("akanName")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.getElementById("gender").value;

    if (!day || !month || !year || !gender) {
      alert("Kinldly ensure all empty forms have been filled!");
      return;
    }

    const weekDayIndex = monthAndYear(day, month, year);

    const dayName = weekDaysNames[weekDayIndex];
    let akanName;
    if (gender === "male") {
      akanName = maleNames[weekDayIndex];
    } else {
      akanName = femaleNames[weekDayIndex];
    }
    document.getElementById(
      "dayResult"
    ).textContent = `The day of the week is ${dayName}.`;
    document.getElementById(
      "akanNameResult"
    ).textContent = `Your Akan name is ${akanName}.`;
  });

//Arrays
const weekDaysNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function monthAndYear(day, month, year) {
  if (month === 1 || month === 2) {
    month += 12;
    year -= 1;
  }

  const CC = year / 100;
  const YY = year % 100;

  const zeller =
    Math.floor(CC / 4) -
    2 * CC +
    Math.floor((5 * YY) / 4) +
    Math.floor((26 * (month + 1)) / 10) +
    day;

  const weekDayIndex = Math.floor((zeller % 7) + 7) % 7;

  console.log(weekDayIndex);
  return weekDayIndex;
}
