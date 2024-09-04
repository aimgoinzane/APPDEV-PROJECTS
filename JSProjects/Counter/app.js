//set initial value for our count variable 
let count = 0;
//select the value buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
btns.forEach((btn) => {
    //conesole.log(btn) 
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            count--
        }
        else if(styles.contains('increase')){
            count++
        }
        else if(styles.contains('plus5')){
            count += 5
        }
        else if(styles.contains('minus5')){
            count -= 5
        }
        else if(styles.contains('randomize')){
            count = Math.floor((Math.random() * 2 - 1) * 1000)
        }
        else {
            count = 0
        }
        if(count > 0) {
            value.style.color = "green"
        }
        if(count < 0) {
            value.style.color = "red"
        }
        if(count == 0) {
            value.style.color = "black"
        }

        value.textContent = count
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