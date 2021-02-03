const faders = document.querySelectorAll('.fade-in')
const sliders = document.querySelectorAll('.slide-in')


const appearOptions={
    rootMargin:"-200px",
    threshold:0
};


const appearOnScroll =new IntersectionObserver(function(entries,appearOnScroll){
    entries.forEach(entry=>{
        if(!entry.isIntersecting)
        {return}
        else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });

},appearOptions)

faders.forEach(fader=>{
    appearOnScroll.observe(fader)
})

sliders.forEach(slider=>{
    appearOnScroll.observe(slider);
})
// document.getElementById("press_btn").addEventListener("click",ClickMe);
// document.getElementById("press_btn").addEventListener("click",ClickMe2);

function ClickMe(){
    for (i = 0; i < 5; i++) {
            document. getElementById("h1"). textContent = i-3  ;
            document. getElementById("h2"). textContent = '' ;
            setTimeout(function(){ 
            document. getElementById("h1"). textContent = i-3 }, 1000);
            setTimeout(function(){ 
            document. getElementById("h1"). textContent = i-2 }, 2000);
            setTimeout(function(){ 
            document. getElementById("h1"). textContent = i-1 }, 3000);
            setTimeout(function(){ 
            document. getElementById("h1"). textContent = i ;
            document. getElementById("h2"). textContent = 1 ;
            }, 4000);
            }

}
document.getElementById("myAnimation").addEventListener("mouseenter",bounce); 
function bounce(){
    var elem = document.getElementById("myAnimation"); 
    var posX= Math.floor(Math.random() * 90); 
    var posY= Math.floor(Math.random() * 90); 

    
    elem.style.top = posX + '%'; 
    elem.style.left = posY + '%'; 
}
function appear() {
    var element = document.getElementById("myAnimation");
    element.classList.remove("invis");
  }
