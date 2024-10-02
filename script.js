document.getElementById('calculate').onclick = function() {
    const dob = new Date(document.getElementById('dob').value);
    const now = new Date();
  
    let years = now.getFullYear() - dob.getFullYear();
    let months = now.getMonth() - dob.getMonth();
    let days = now.getDate() - dob.getDate();
  
    if (days < 0) {
      months--;
      days += 30;
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
  };
  