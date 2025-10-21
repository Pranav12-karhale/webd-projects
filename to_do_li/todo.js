

const input=document.getElementById("in");
let i=0;
input.addEventListener("keydown",logKey);

function logKey(e){
    if(e.code==='Enter'){
        let newcont=document.createElement('div');
let newelement=document.createElement('li');
let newbtn=document.createElement('button');
let newb=document.createElement('b');
newcont.style.background="black";
newcont.style.width="100%";
newcont.style.height="50px";
newcont.style.justifyContent="center";
newcont.style.alignItems="center";
newcont.id="cont"+i;

newcont.addEventListener("mouseenter",()=>{
    newcont.style.background="rgb(42, 42, 42)";
    newcont.style.color="white";
    newbtn.style.display="block";
});

 newcont.addEventListener("mouseleave",()=>{
     newcont.style.background="black";
     newcont.style.color="white";
     newbtn.style.display="none";
});

newbtn.textContent="-";

newelement.id="element"+i;
newelement.style.alignItems="center";
newelement.style.justifyContent="center";

newbtn.id="btn"+i;
newbtn.style.color="grey";
newbtn.style.float="right";
newbtn.style.height="50px";
newbtn.style.width="50px";
newbtn.style.display="none";
newbtn.style.marginTop="0px";
newbtn.style.outline="0px";
newbtn.style.border="none";
newbtn.style.background="rgba(85, 85, 85, 0.53)";
newbtn.style.fontSize="40px";
newb.id="b"+i;
newb.textContent=document.getElementById("in").value;
newb.style.marginLeft="40px";
newb.style.fontSize="25px";
document.querySelector(".container").querySelector("ul").appendChild(newcont);

document.getElementById("cont"+i).appendChild(newelement);
document.getElementById("element"+i).appendChild(newb);
document.getElementById("element"+i).appendChild(newbtn);
newbtn.addEventListener("click",()=>{
newcont.remove();
});
i++;

document.getElementById("in").value="";
    }
}

