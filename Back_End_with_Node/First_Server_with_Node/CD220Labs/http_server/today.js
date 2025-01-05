 // Export a function named 'getDate' from the module
module.exports.getDate = function getDate() {
    // Get the current date and time in the timezone "Australia/Brisbane"
    let aestTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
    return aestTime; // Return the formatted date and time
};

module.exports.getHours = function getHours() {
    // Get the current date and time in the timezone "Australia/Brisbane"
    let hours = new Date().getHours();
    return hours; // Return the formatted date and time
};