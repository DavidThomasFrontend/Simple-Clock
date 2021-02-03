// Digital clock build

const clock = document.querySelector('.clock');

const tick = () => { // calling the tick function every second

   const now = new Date(); // so that this can create a new date everysecond. then from the date object we can get the hours mins and secs. update the browser with the information

   const h = now.getHours();
   const m = now.getMinutes();
   const s = now.getSeconds();

   const html = `
      <span>${h}</span> : 
      <span>${m}</span> : 
      <span>${s}</span>
   `;

   clock.innerHTML = html //overwriting and updating the above html template

};

setInterval(tick, 1000);
   




