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
