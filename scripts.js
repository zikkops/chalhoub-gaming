const faders = document.querySelectorAll('.fade-in')
const sliders = document.querySelectorAll('.slide-in')
var i=0;

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
    if(i<9){
    var elem = document.getElementById("myAnimation"); 
    var posX= Math.floor(Math.random() * 90); 
    var posY= Math.floor(Math.random() * 90); 

    
    elem.style.top = posX + '%'; 
    elem.style.left = posY + '%'; 
    i++;
    
    }
    else{
    var elem = document.getElementById("myAnimation"); 
    var posX= 100; 
    var posY=650; 
    elem.style.top = posX + 'px'; 
    elem.style.left = posY + 'px'; 
    setTimeout(() => {
        alert("Congratulations you have swiped the red ball 10 times!!!")
    }, 100);
    
    
    }
    
}

function reset(){
    i=0;
    var elem = document.getElementById("myAnimation"); 
    var posX= 0; 
    var posY=0; 
    elem.style.top = posX + 'px'; 
    elem.style.left = posY + 'px'; 
}

function appear() {
    var element = document.getElementById("myAnimation");
    element.classList.remove("invis");
  }
