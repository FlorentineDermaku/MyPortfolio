//scroll animation
const sr= ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2000,
    reset: true
})

sr.reveal ('.home-text', {})
sr.reveal ('home-img', {delay:200})
sr.reveal ('social', {delay:200})

sr.reveal ('.about-img', {})
sr.reveal ('.heading', {})
sr.reveal ('about-text', {delay:200})

sr.reveal ('.skills-content', {})

sr.reveal ('.work-text', {})
sr.reveal ('.work-img', {delay:200})

sr.reveal ('.app h1', {})
sr.reveal ('.app', {delay:200})

sr.reveal ('form input', {})
sr.reveal ('form textarea', {})
sr.reveal ('.app', {delay:200})

//get all required elements

const form = document.querySelector("form");
statusTxt = form.querySelector(".button-area");

form.onsubmit = (e)=> {
    e.preventDefault();

    let xhr = new XMLHttpRequest(); // creating new xml object
    xhr.open("POST", "message.php", true); // sending post request to message.php file
    xhr.onload = ()=>{
        if(xhr.readyState == 4 && xhr.status == 200){
            let response = xhr.response;
            console.log(response);
        }

    }
    let formData = new FormData(form);
    xhr.send(formData);
}
