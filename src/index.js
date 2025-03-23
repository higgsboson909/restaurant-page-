import "./styles.css";
import { load_home_page } from "./home"


let contentEl = document.querySelector("#content");
let btnEls = document   .querySelectorAll("button");

load_home_page();

btnEls.forEach((b) => {
    b.addEventListener('click', (event) => {
        contentEl.innerHTML = ''
        if(event.target.classList.contains("p1")) {
            load_home_page();
        }
        else if(event.target.classList.contains("p2")) {
            contentEl.innerHTML = "<h1>Coming Soon</h1>"
        }
        else if (event.target.classList.contains("p3")) {
            contentEl.innerHTML = "<h1>Coming Soon</h1>"
        }

    })
});
