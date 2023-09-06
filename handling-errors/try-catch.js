function getDayName(dayNumber) {
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var key = dayNumber - 1;
    if (!days[key]) {
        throw new Error("Invalid day number");
    }
    return days[key];
}
 
try {
    var dayNumber = 10;
    var dayName = getDayName(dayNumber);
} catch (exc) {
    console.log(exc.message);
}

try {
    var dayNumber = 10;
    var dayName = getDayName(dayNumber);
} catch(exc){
    console.log(exc.message);
} finally {
    try {
        dayNumber = 7;
        dayName = getDayName(dayNumber);
    } finally {
        console.log(dayName);
    }
}