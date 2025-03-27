
const home_foto = document.querySelector('.home-foto');
const greeting = document.querySelector('.greeting');
const about = document.querySelector('.about');
const names = document.querySelector('.name-con');
const sections = document.querySelectorAll('.section')
const calendar = document.querySelector('.calendar')

function main() {
    //    home photo animation
    setTimeout(() => {
        home_foto.classList.add('window_animation')
    }, 700)

    //   greeting animation
    setTimeout(() => {
        greeting.classList.add('txt_animation')
    }, 1200)

    setTimeout(() => {
        about.classList.add('txt_animation')
    }, 1500)

    setTimeout(() => {
        names.classList.add('txt_animation')
    }, 1800)



    window.addEventListener("scroll", function () {
        let scrollpos = window.scrollY;

        sections.forEach((section, index) => {
            let sectionTop = section.offsetTop -600;
            let sectionHeight = section.offsetHeight;

            if (scrollpos >= sectionTop && scrollpos < sectionTop + sectionHeight) {

                
                if (index === 1) {
                    
                    setTimeout(() => {
                        calendar.classList.add('txt_animation')
                    }, 700)
                
                }

            }
        })

        
    });









}