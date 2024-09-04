//set initial value for our count variable 
let count = 30;
//select the value buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
btns.forEach((btn) => {
    //conesole.log(btn) 
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList
        if(styles.contains('countdown')){

            let x = setInterval(function() {
                count = count - 1;
                if(count<1){
                    clearInterval(x)
                }
                if(count==0){
                    value.style.color = "red"
                }
                else{
                    value.style.color = "black"
                }
                value.textContent = count
            }, 1000)
        }
        else{
            location.reload();
        }
    })  
})

const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')
navToggle.addEventListener('click', () => {
    /*
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links')
    }
    else{
        links.classList.add('show-links')
    }
    */
    links.classList.toggle('show-links')
})