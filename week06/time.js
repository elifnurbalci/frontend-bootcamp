function showTime() {
    const name = prompt("Lütfen adınızı giriniz:");
    document.getElementById("myName").innerText = name;
  
    function updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
      const day = days[now.getDay()];
  
      const timeString = `${hours}:${minutes}:${seconds} ${day}`;
      document.getElementById("myClock").innerText = timeString;
    }
  
    updateClock(); 
    setInterval(updateClock, 1000);
  }
  
  showTime();
  