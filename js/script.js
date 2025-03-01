document.getElementById("board").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href="index2.html"
})


function back() {
    window.history.back();
}


function bgColor() {
    let colors = [
        "bg-red-200", 
        "bg-orange-200", 
        "bg-amber-200", 
        "bg-lime-200", 
        "bg-green-200", 
        "bg-pink-200", 
        "bg-indigo-200",
        "bg-violet-300"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}
document.getElementById("bg-btn").addEventListener("click", function() {
    document.body.classList.remove(...document.body.classList);
    document.body.classList.add(bgColor(), "bg");
});


let date = new Date();
let currentDate = date.toLocaleDateString();
document.getElementById("date").textContent = currentDate;


const completeBtn = document.querySelectorAll(".complete-btn");

    for(let i = 0; i < completeBtn.length; i++) {
        completeBtn[i].addEventListener("click", function(event) {
            event.preventDefault();
            alert("Board update Successfully");
        })
    }