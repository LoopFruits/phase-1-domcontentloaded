// Your code goes here
document.addEventListener("DOMContentLoaded", function(){
    console.log('The DOM has loaded');
const contentLoaded = document.getElementById('text');
contentLoaded.innerHTML = 'This is really cool!';    
})

// no going to like this doesn't feel correct. Need to take a better look 

// Another way to get the code working. 
// document.addEventListener("DOMContentLoaded", function() {  
//     console.log("This is really cool!");
// })

// function textFix(text) {
//     const text = document.getElementById('text');
// }
