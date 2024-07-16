let container = document.querySelector('.container')
let btns = document.querySelectorAll('.btn')
let images = ['logo1','logo2','logo3','logo4','logo5','logo6','logo7','logo8']
 
let index = 0

btns.forEach((button)=>{
    
    button.addEventListener('click',()=>{
        
        if(button.classList.contains('btn-left')){
            index--;
            if(index<0){
                index=images.length-1;
            }
            container.style.background = `url('/images/${images[index]}.jpg')` 
            container.style.backgroundPosition = 'center'
            container.style.backgroundSize = 'cover'
        }
        else{
            index++;
            if(index===images.length){
                index=0
            }
            container.style.background = `url('/images/${images[index]}.jpg') `
            container.style.backgroundPosition = 'center'
            container.style.backgroundSize = 'cover'
        }
    })
})
