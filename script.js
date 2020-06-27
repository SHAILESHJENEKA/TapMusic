window.addEventListener('load',(e)=> {
    var sounds = document.querySelectorAll('.sound');
    var pads = document.querySelectorAll('.pads div');
    var visual = document.querySelector('.visuals');
    const colors = ["#60d394","#d36060","#817583","#d3d160","#6860d3","#60b2d3"]


    pads.forEach((pad,index)=> {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            bubble(index);
        })
    })

    const bubble = (index)=> {
        var bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.background = colors[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        })
    }
    
})

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    var visual = document.querySelector('.visuals');
    const colors = ["#60d394","#d36060","#817583","#d3d160","#6860d3","#60b2d3"]
    if(!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();   
    key.classList.add('playing');
    console.log(key)
    bubble(e.keyCode);
    
});

const bubble = (key)=> {
    var bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.background = colors[key];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener('animationend',function(){
        visual.removeChild(this);
    })
}

    function removeTransition(e) {
      if (e.propertyName !== 'transform') return; // skip if it's not a transform event
      this.classList.remove('playing');
    }

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
