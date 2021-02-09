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

  function addLeadingZero(number){
    if(number<10){
        return "0" +number.toString();
    } else{
        return number.toString();
    }
  }

  window.setInterval(function(){

      var currentTime= new Date()
      var hours= currentTime.getHours();
      var mins= currentTime.getMinutes();
      var secs= currentTime.getSeconds();
      document.getElementById("hours").innerHTML=addLeadingZero( hours);
      document.getElementById("minutes").innerHTML=addLeadingZero (mins);
      document.getElementById("seconds").innerHTML=addLeadingZero (secs);


  }
      
    ,1000);

    document.getElementById("color_ball").onchange=function(){
        var selectedField = document.getElementById("color_ball");
        var selectedOption = selectedField.options.selectedIndex
        var selectedValue = selectedField.options[selectedOption]
        var value=selectedValue.innerHTML
        document.getElementById("myAnimation").style.backgroundColor =value;
    }