
let sidebar_navigation = document.getElementById('sidebar_navigation');

let sidebar_navigation_bottom = document.getElementById('sidebar_buttom_menu');

sidebar_navigation_bottom.addEventListener('click', function () {
    if (sidebar_navigation.style.left == "" || sidebar_navigation.style.left == "-100%") {
        sidebar_navigation.style.left = "0"
        document.getElementById('sidebar_menu_icon').classList.add('fa-close');
    }
    else {
        sidebar_navigation.style.left = "-100%"
        document.getElementById('sidebar_menu_icon').classList.remove('fa-close');
    }
})


let global_menu_buttom = document.getElementById('global_menu_button')
let global_navigation = document.getElementById('global_menu_items')
let global_close_buttom = document.getElementById('global_menu_close_button')

global_menu_buttom.addEventListener('click', function () {
    global_navigation.style.left = "0";
})

global_close_buttom.addEventListener('click', function () {
    global_navigation.style.left = "-120%";
})

// document.getElementById("contact-form").addEventListener("submit", function(event){
//     event.preventDefault();  // Prevent form from submitting the traditional way

//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     if (email && message) {
//         // Send an email to the user's email address (backend required here)
//         // For now, just displaying success
//         document.getElementById("status").textContent = "Thank you for your message! We will get back to you soon.";
//         window.open("https://mailto:philippeedikayil321@gmail.com");
//         // Reset the form
//         document.getElementById("contact-form").reset();
//     }
//     else{
//         document.getElementById("status").textContent = "fill both fields";
//     }
// });