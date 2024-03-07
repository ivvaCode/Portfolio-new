gsap.from(".myName", { y: 200, opacity: 0, duration: 2, ease: "bounce", delay: 1});
gsap.from(".menu", { y: -50, opacity: 0, duration: 3, ease: "bounce", delay: 2});
gsap.from(".link", {x:50, opacity: 0, duration: 5, delay: 2, stagger: .6});

const progects = document.querySelector(".pr");
progects.addEventListener('click', () => {
    gsap.from(".circle", { y: 400,  opacity: 1, duration: 3,  delay: 1});
}
)
const about = document.querySelector(".ab");
about.addEventListener('click', () => {
    gsap.from(".header-about", {y: 300, delay: 0.5, duration: 3, ease: "bounce", opacity: 0})

    gsap.from(".me", {y: 300, delay: 3, duration: 3, ease: "bounce", opacity: 0})
    
}
)
/*Проекты*/

/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": false,
          "value_area": 500
        }
      },
      "color": {
        "value": "#ffeddb"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#001220"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffeddb",
        "opacity": 0.8,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 50,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
  gsap.to(".header", { x: 650, y: 50, opacity: 1, duration: 3,  delay: 1});
  
  gsap.to(".one", {
    x: 30,
    text: "PROJECTS", 
    opacity: 0.2, 
    duration: 2,
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
    delay: .7
  })
  gsap.to(".two", {
    x: 90,
    text: "PROJECTS", 
    opacity: 1, 
    duration: 2,
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
    delay: 1
  })
  gsap.to(".three", {
    x: 150,
    text: "PROJECTS", 
    opacity: 0.2, 
    duration: 2,
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
    delay: 1.2
  })

  gsap.from(".circle", { y: 400,  opacity: 1, duration: 3,  delay: 1});

  //slider

const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
console.log (sidebar)
const container =  document.querySelector('.containerMain');


//Зададим правильное положение цвета слева и картинки справа, зададим отступ сверху для sidebar, например -300vh, т.к. у нас 4 слайда.
//Формула будет такая sidebar.style.top = `-${кол-во слайдов*100}vh`
//Но мы посчитаем количество слайдов, обратимся к div  main-slide и посчитаем у него кол-во div-ов.
const mainSlide = document.querySelector('.main-slide');
//console.log (mainSlide)
const slidesCount = mainSlide.querySelectorAll('div').length;
//console.log(slidesCount)
//создадим переменную для работы с кнопками, для понимания какой слвайд сейчас активный
let activeSlideIndex = 0;
//если подставим в формулу slidesCount, то получим белый экран, поэтому добавим -1, т.к. у нас по умолчанию есть один слайд
sidebar.style.top = `-${(slidesCount - 1)*100}vh`;

//Теперь кнопки
upBtn.addEventListener('click', () => {
    changeSlide('up');
})
downBtn.addEventListener('click', () => {
    changeSlide('down');
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount)
        {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if  (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }
    //теперь нужно проанимировать кнопки
  
    //формула может выглядеть так -перемещаем по оси y
    // mainSlide.style.transform = `translateY (-2000px)`, но нужно высчитать высоту экрана 
    const height = container.clientHeight;
    //console.log (height)
    mainSlide.style.transform = `translateY(-${activeSlideIndex*height}px)`
    // то же самое для sidebar, но убираем  минус, т.к. другое направление
   sidebar.style.transform = `translateY(${activeSlideIndex*height}px)`


}
/*ABOUT*/
function start () {

    let text = 'I am a web developer...';
    let i=0;
    let speed = 150;
    
        function type () {
            if(i<text.length) {
                document.querySelector('#par').textContent += text.charAt(i);
                i++;
        setTimeout(type, speed);
            }
        }  
        // сделать, чтобы повторялось действие 
        setInterval(type, 5000);
    }
    setTimeout(start, 100);
    
    gsap.from(".header-about", {y: 300, delay: 0.5, duration: 3, ease: "bounce", opacity: 0})
    
    
    gsap.from(".me", {y: 300, delay: 3, duration: 3, ease: "bounce", opacity: 0})
    

//Contacts
gsap.from(".headerContacts", { x: -300, opacity: 0, duration: 3, ease: "bounce", delay: 1});


/*Адаптация


let x = window.matchMedia("(max-width: 500px)");
mediaQueries(x);
x.addEventListener(mediaQueries);

function mediaQueries(x) {
    if (x.mathes) {

     document.querySelector(".containerMain").style.display = "none";
     document.querySelector(".progectsWidth500").style.display = "flex";
        }
     else {
        document.querySelector(".containerMain").style.display = "flex";
        document.querySelector(".progectsWidth500").style.display = "none";
           }
     
        } */
    
        
        
    
    

 
    