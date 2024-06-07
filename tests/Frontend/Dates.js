function formatDate(date) {
    const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

function getWeekDates(referenceDate) {
    const startOfWeek = new Date(referenceDate);
    const dayOfWeek = startOfWeek.getDay(); // 0 (Sunday) to 6 (Saturday)
    const diffToStart = startOfWeek.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // Adjust when day is Sunday

    startOfWeek.setDate(diffToStart);
    startOfWeek.setHours(0, 0, 0, 0); // Reset time to midnight

    const dates = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
        dates.push(formatDate(date));
    }

    return dates;
}

function getThisWeekDates() {
    const today = new Date();
    return getWeekDates(today);
}

function getLastWeekDates() {
    const today = new Date();
    today.setDate(today.getDate() - 7);
    return getWeekDates(today);
}

function getNextWeekDates() {
    const today = new Date();
    today.setDate(today.getDate() + 7);
    return getWeekDates(today);
}

// Example usage:
console.log("This week dates:", getThisWeekDates());
console.log("Last week dates:", getLastWeekDates());
console.log("Next week dates:", getNextWeekDates());
