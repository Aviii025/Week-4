class QAItem {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }

    render() {
        let div = document.createElement("div");
        div.className = "qa";

        let q = document.createElement("div");
        q.className = "question";
        q.innerHTML = this.question + " <span>+</span>";

        let a = document.createElement("div");
        a.className = "answer";
        a.innerText = this.answer;

        q.onclick = function () {
            div.classList.toggle("active");

            let sign = q.querySelector("span");
            if (div.classList.contains("active")) {
                sign.innerText = "-";
            } else {
                sign.innerText = "+";
            }
        };

        div.appendChild(q);
        div.appendChild(a);

        return div;
    }
}

let data = [
    new QAItem("What is HTML?", "HTML is used to structure web pages."),
    new QAItem("What is CSS?", "CSS is used to style web pages."),
    new QAItem("What is JavaScript?", "JavaScript makes websites interactive.")
];

let container = document.getElementById("qaContainer");

for (let i = 0; i < data.length; i++) {
    container.appendChild(data[i].render());
}