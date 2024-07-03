// Base URL
const ShippingURL = "https://shipping.dev.tako-syun.com/";
const SupllierURL = "Base URL Paste here";
const AdminURL = "https://hq.dev.tako-syun.com/";

const DriverID = 'Harsh01'
const DriverPassword = 'Harsh@2142'

const AdminID = 'tester.softcolon@gmail.com'

// var AdminPassword = 'Harsh123'
// let newPassword_admin = 'Harsh@2142'

var AdminPassword = 'Harsh@2142'
let newPassword_admin = 'Harsh123'


const today = new Date();

// Get the year, month, and day
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
const day = String(today.getDate()).padStart(2, '0'); // Get the day and pad with leading zero if needed

// Combine into the desired format
const TodaysDate = `${year}-${month}-${day}`;



module.exports = { ShippingURL,AdminPassword, AdminURL, DriverID, DriverPassword,newPassword_admin, AdminID, TodaysDate };