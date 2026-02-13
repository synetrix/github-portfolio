// Partical network animation =================================
const canvas=document.getElementById("bg");
const ctx=canvas.getContext("2d");
canvas.width=innerWidth;
canvas.height=innerHeight;

let particles=[];
for(let i=0;i<80;i++){
 particles.push({
  x:Math.random()*canvas.width,
  y:Math.random()*canvas.height,
  dx:(Math.random()-0.5)*0.5,
  dy:(Math.random()-0.5)*0.5
 });
}

function animate(){
 ctx.clearRect(0,0,canvas.width,canvas.height);

 particles.forEach(p=>{
  p.x+=p.dx;
  p.y+=p.dy;

  if(p.x<0||p.x>canvas.width)p.dx*=-1;
  if(p.y<0||p.y>canvas.height)p.dy*=-1;

  ctx.beginPath();
  ctx.arc(p.x,p.y,2,0,Math.PI*2);
  ctx.fillStyle="#7a00ff";
  ctx.fill();

  particles.forEach(p2=>{
    let dist=Math.hypot(p.x-p2.x,p.y-p2.y);
    if(dist<120){
      ctx.strokeStyle="rgba(122,0,255,0.1)";
      ctx.beginPath();
      ctx.moveTo(p.x,p.y);
      ctx.lineTo(p2.x,p2.y);
      ctx.stroke();
    }
  });
 });

 requestAnimationFrame(animate);
}
animate();

// Cursor glow animation =================================
const glow=document.getElementById("glow");
document.addEventListener("mousemove",e=>{
 glow.style.left=e.clientX-150+"px";
 glow.style.top=e.clientY-150+"px";
});

// Subtle scroll stagger reveal================================

const items=document.querySelectorAll('.card,.project,.activity');
const observer=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
  if(entry.isIntersecting){
   entry.target.classList.add('show');
  }
 });
},{threshold:0.2});
items.forEach(el=>observer.observe(el));

// Magnetic button ================================
document.querySelectorAll('.magnetic').forEach(btn=>{
 btn.addEventListener('mousemove',e=>{
  const rect=btn.getBoundingClientRect();
  const x=e.clientX-rect.left-rect.width/2;
  const y=e.clientY-rect.top-rect.height/2;
  btn.style.transform=`translate(${x*0.2}px,${y*0.2}px)`;
 });
 btn.addEventListener('mouseleave',()=>{
  btn.style.transform='translate(0,0)';
 });
});

// Theme toggle =================================
function toggleTheme(){
 document.body.classList.toggle('light');
}

window.addEventListener("resize",()=>{
 canvas.width=innerWidth;
 canvas.height=innerHeight;
});