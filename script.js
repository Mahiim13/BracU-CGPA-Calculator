// script.js
function calculateWakeUpTimes() {
    const bedtimeInput = document.getElementById('bedtime').value;
    if (!bedtimeInput) {
      alert('Please enter a bedtime.');
      return;
    }
  
    const bedtime = new Date(`1970-01-01T${bedtimeInput}:00`);
    const sleepCycles = [6, 7.5, 9]; // Sleep cycles in hours (6, 7.5, 9 hours)
  
    const results = sleepCycles.map(cycle => {
      const wakeUpTime = new Date(bedtime.getTime() + cycle * 60 * 60 * 1000);
      return wakeUpTime.toTimeString().slice(0, 5);
    });
  
    displayResults(results);
  }
  
  function calculateBedtimes() {
    const wakeupInput = document.getElementById('wakeup').value;
    if (!wakeupInput) {
      alert('Please enter a wake-up time.');
      return;
    }
  
    const wakeup = new Date(`1970-01-01T${wakeupInput}:00`);
    const sleepCycles = [6, 7.5, 9]; // Sleep cycles in hours (6, 7.5, 9 hours)
  
    const results = sleepCycles.map(cycle => {
      const bedtime = new Date(wakeup.getTime() - cycle * 60 * 60 * 1000);
      return bedtime.toTimeString().slice(0, 5);
    });
  
    displayResults(results);
  }
  
  function displayResults(times) {
    const timesList = document.getElementById('times-list');
    timesList.innerHTML = times.map(time => `<li>${time}</li>`).join('');
  }