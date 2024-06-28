

// Base URL
const DriverURL = "https://api.dev.tako-syun.com/api";
const AdminURL = "https://api.dev.tako-syun.com/api"
//https://api.dev.tako-syun.com/api


const today = new Date();

// Get the year, month, and day
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
const day = String(today.getDate()).padStart(2, '0'); // Get the day and pad with leading zero if needed

// Combine into the desired format
const TodaysDate = `${year}-${month}-${day}`;

// console.log(formattedDate);

module.exports = {DriverURL, TodaysDate, AdminURL};