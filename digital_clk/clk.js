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
    if(Number(hour2)<12 && ampm==="AM"){
      document.querySelector(".greet").textContent="Good Morning";
    }
    else if(Number(hour2)<5 && ampm==="PM"){
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
      document.querySelector(".greet").textContent="Good Morning";
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







