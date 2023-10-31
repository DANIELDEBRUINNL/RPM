let currentRotation = 0;
let rpmInterval;

function setRPM() {
    // Clear any existing rotations
    if (rpmInterval) clearInterval(rpmInterval);
  
    const rpm = parseFloat(document.getElementById('rpmInput').value);
    if (isNaN(rpm) || rpm < 0) {
        alert('Please enter a valid positive RPM value.');
        return;
    }
    
    const rotationPerSecond = rpm / 60; // Convert RPM to RPS
    const rotationInDegreesPerSecond = rotationPerSecond * 360;
    
    rpmInterval = setInterval(() => {
        currentRotation += rotationInDegreesPerSecond / 60; // Divided by 60 because we're using setInterval with 1/60th of a second
        const line = document.getElementById('rotatingLine');
        line.style.transform = `rotate(${currentRotation}deg)`;
        line.style.transformOrigin = '110px 110px';
    }, 1000/60); // 60 frames per second
}
