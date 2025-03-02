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
        "bg-amber-200", 
        "bg-lime-200", 
        "bg-orange-200", 
        "bg-green-200", 
        "bg-pink-200", 
        "bg-indigo-200",
        "bg-violet-300"
    ];
    return colors[Math.floor(Math.random()*colors.length)];
}
document.getElementById("bg-btn").addEventListener("click", function() {
    document.body.classList.remove(...document.body.classList);
    document.body.classList.add(bgColor(), "bg");
});


const today = new Date();

const currentWeekday = { weekday: 'short' };
const weekday = today.toLocaleDateString('en-US', currentWeekday);

const currentDate = { year: 'numeric', month: 'short', day: '2-digit' };
const date = today.toLocaleDateString('en-US', currentDate);

const formattedDate = `${weekday},\n${date.replace(',', '')}`;

console.log(formattedDate);

document.getElementById("date").innerText = formattedDate;



const completeBtn = document.querySelectorAll(".complete-btn");
    for(let i = 0; i < completeBtn.length; i++) {
        completeBtn[i].addEventListener("click", function(event) {
            event.preventDefault();
            alert("Board update Successfully");
        })
    }


document.addEventListener("click", function(event) {
    if(event.target.classList.contains("complete-btn")) {

        let card = event.target;
    while (card && !card.classList.contains("card")) {
    card = card.parentElement;
}

        const cardTitle = card.querySelector(".card-title").innerText;
        const time = new Date().toLocaleTimeString();

        const increment = document.getElementById("increment");
        const decrement = document.getElementById("decrement");
        let incrementValue = parseInt(increment.innerText);
        let decrementValue = parseInt(decrement.innerText);
        increment.innerText = incrementValue + 1;
        decrement.innerText = Math.max(0, decrementValue - 1);

        const activityLog = document.getElementById("activity-log");
        const p = document.createElement("p");
        p.innerText = `You have completed the task "${cardTitle}" at ${time}`;
        p.classList.add("mt-3", "text-indigo-600", "bg-[#F4F7FF]", "rounded-md");
        activityLog.appendChild(p);

        event.target.disabled = true;
        event.target.classList.add("cursor-not-allowed");

        const allBtns = document.querySelectorAll(".complete-btn:not([disabled])");
            if(allBtns.length === 0) {
                for(let i = 0; i < 1; i++) {
                    alert("Congrates!!! You have complete all the current task")
                }
            }
    }


    if(event.target.id === "clear-btn") {
        const activityLog = document.getElementById("activity-log" );
        const logs = activityLog.querySelectorAll("p");
        for(let i = 0; i < logs.length; i++) {
            logs[i].remove();
        }
    }
})