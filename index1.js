setInterval(() => {
    // Create a new Date object
    const date = new Date(); // Corrected to 'Date' with uppercase 'D'
    
    // Get the current hours, minutes, and seconds
    const htime = date.getHours(); // Use 'date' instead of 'd'
    const mtime = date.getMinutes();
    const stime = date.getSeconds();
    
    // Calculate the rotation for each hand
    const hrotation = 30 * htime + mtime / 2; // 360 degrees / 12 hours = 30 degrees per hour
    const mrotation = 6 * mtime; // 360 degrees / 60 minutes = 6 degrees per minute
    const srotation = 6 * stime; // 360 degrees / 60 seconds = 6 degrees per second
    
    // Apply the rotation to the clock hands
    hours.style.transform = `rotate(${hrotation}deg)`;
    minutes.style.transform = `rotate(${mrotation}deg)`;
    seconds.style.transform = `rotate(${srotation}deg)`;
}, 1000);