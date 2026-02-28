let btnform1=document.getElementById('btn');
let btnform2=document.getElementById('btn2');
let hello=1;

function findday(hereday){
if(hereday==="1"){
return "Monday";
}
else if(hereday==="2"){
  return "Tuesday";
  }
  else if(hereday==="3"){
    return "Wednesday";
    }
    else if(hereday==="3"){
      return "Thursday";
      }
      else if(hereday==="4"){
        return "Friday";
        }
        else if(hereday==="5"){
          return "Saturday";
          }
          else{
            return "Sunday";
          }
}

function updateClock(){
  const now=new Date();
  let hours=String(now.getHours()).padStart(2,'0');
  let minutes=String(now.getMinutes()).padStart(2,'0');
  let seconds=String(now.getSeconds()).padStart(2,'0');
  let date=String(now.getDate()).padStart(2,'0');
  let month=String(now.getMonth()).padStart(2,'0');
  let year=String(now.getFullYear()).padStart(2,'0');
    let day=String(now.getDay());
let hour1=Number(hours);
  let getday=findday(day);
   let nummonth=Number(month);
   let mon=nummonth+1;
   let strmonth=String(mon);
  let ampm=hour1>=12 ?'PM':'AM';
   hour1=hour1%12 || 12;
   let min1=Number(minutes);
   let min2=min1<10?'0'+min1:min1;
    let hour2=String(hour1);
   
   // document.getElementById('clock').textContent=`${hours}:${minutes}:${seconds}`;
    document.getElementById('date').textContent=`${date}/${strmonth}/${year}`;
    document.getElementById('day').textContent=`${getday}`;
  if(hello===1){
    document.getElementById('clock').textContent=`${hour2}:${min2}:${seconds}`;
    document.getElementById('ampm').textContent=`${ampm}`;
    document.getElementById("ampm").style.display="block";
    if(Number(hour2)<12 && Number(hour2)>=5 && ampm==="AM"){
      document.querySelector(".greet").textContent="Good Morning";
    }
    else if((Number(hour2)<5 || Number(hour2)>=12) && ampm==="PM" ){
      document.querySelector(".greet").textContent="Good Afternoon";
    }
    else if(Number(hour2)>=5 && Number(hour2)<7 && ampm==="PM"){
      document.querySelector(".greet").textContent="Good Evening";
    }
    else{
      document.querySelector(".greet").textContent="Good Night";
    }
  }     
  else if(hello===-1){
    document.getElementById('clock').textContent=`${hours}:${minutes}:${seconds}`;  
    document.getElementById("ampm").style.display="none";
    if(Number(hours)<12){
      if(Number(hours)>=5){
      document.querySelector(".greet").textContent="Good Morning";
    }
      else{
        document.querySelector(".greet").textContent="Good Night";
      }
    }
    else if(Number(hours)>=12 && Number(hours)<17 ){
      document.querySelector(".greet").textContent="Good Afternoon";
    }
    else if(Number(hours)>=17 && Number(hours)<19){
      document.querySelector(".greet").textContent="Good Evening";
    }
    else{
      document.querySelector(".greet").textContent="Good Night";  
    }
  }     
  }
       btnform1.addEventListener("click",()=>{   
     hello=1;  
      });
      btnform2.addEventListener("click",()=>{
    hello=-1;
      });
        
    setInterval(updateClock,1000);
    updateClock();

// Live sky background
function updateBackgroundSky() {
    const now = new Date();
    
    // Get IST time
    const istString = now.toLocaleString('en-US', { 
        timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit' 
    });
    
    let [hourStr, minuteStr] = istString.split(':');
    let hour = parseInt(hourStr, 10);
    if (hour === 24){
      hour = 0;
    }
    const decimalHour = hour + (parseInt(minuteStr, 10) / 60);

    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (decimalHour >= 6 && decimalHour < 18) {
        // Daytime
        document.body.style.backgroundColor = getSkyColor(decimalHour);
        sun.style.display = 'block';
        moon.style.display = 'none';
        
        const progress = (decimalHour - 6) / 12;
        sun.style.left = `calc(${progress * screenWidth}px - 50px)`;
        sun.style.bottom = `${Math.sin(progress * Math.PI) * (screenHeight * 0.75)}px`;
    }
    else {
        // Nighttime
        document.body.style.backgroundColor = '#0b0d17';
        sun.style.display = 'none';
        moon.style.display = 'block';
        
        let progress = decimalHour >= 18 ? (decimalHour - 18) / 12 : (decimalHour + 6) / 12;
        moon.style.left = `calc(${progress * screenWidth}px - 50px)`;
        moon.style.bottom = `${Math.sin(progress * Math.PI) * (screenHeight * 0.75)}px`;
    }
}

function getSkyColor(hour) {
    if (hour >= 6 && hour < 8) {
      return '#1a2b4c'; // Pre-dawn deep blue
    }
    if (hour >= 8 && hour < 16) {
      return '#87CEEB'; // Midday
    }
    if (hour >= 16 && hour < 18) {
      return '#ff7e67'; // Sunset
    }
      return '#0b0d17'; // Night
}

setInterval(updateBackgroundSky, 60000); 
updateBackgroundSky();







