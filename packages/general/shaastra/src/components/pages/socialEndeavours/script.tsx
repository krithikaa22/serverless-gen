import { useColorModeValue } from "@chakra-ui/color-mode";
const Events = () => {
   
     window.onload =  (e) => {
        var body: HTMLElement  = document.querySelector(".social")!;
        console.log(body)
        if(body !== null)
        {
            document.addEventListener("scroll", () => {

                var sheCan: HTMLElement = document.querySelector(".she-can-backdiv")!;
                if(sheCan)
               {
                    var dist = window.innerHeight - sheCan.getBoundingClientRect().top;
                    if(dist > 150)
                    {
                        console.log(sheCan.style.transform)
                        sheCan.style.transform = "translate(-5%,5%)";
                        sheCan.style.transition = "all 0.5s ease";
                    }
                    var slidehead: HTMLElement = document.querySelector(".recog-heading")!;
                dist = window.innerHeight - slidehead.getBoundingClientRect().top;
                if(dist > 30)
                {
                    slidehead.style.animation = "headslide 2s ease";    
                }
        
                var slideIn: HTMLElement = document.querySelector(".one")!;
                dist = window.innerHeight - slideIn.getBoundingClientRect().top;
                if(dist > 30) slideIn.style.animation = "headslide 2s ease";
        
                slideIn = document.querySelector(".two")!;
                dist = window.innerHeight - slideIn.getBoundingClientRect().top;
                if(dist > 50) slideIn.style.animation = "headslideRev 2s ease ";
        
                slideIn = document.querySelector(".three")!;
                dist = window.innerHeight - slideIn.getBoundingClientRect().top;
                if(dist > 30) slideIn.style.animation = "headslide 2s ease";
        
                slideIn = document.querySelector(".four")!;
                dist = window.innerHeight - slideIn.getBoundingClientRect().top;
                if(dist > 30) slideIn.style.animation = "headslideRev 2s ease";
        
        
                var past: HTMLElement = document.querySelector(".past")!;
                dist = window.innerHeight - past.getBoundingClientRect().top;
                if(dist > 0) past.style.animation = "headslide 3s ease"
               }
        
                

        
            })
        }
    
    }
    
}

export default Events