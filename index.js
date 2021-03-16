const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    const navLinks = document.querySelector('.nav-links li');
    // toggle name
    
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

         //animate link
    navLinks.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation=''; 
        }
        else{
            link.style.animation = 'navLinkFade 0.5s ease forwards ${index/7+0.3}s';
        }

    })
    });

    
}

navSlide();