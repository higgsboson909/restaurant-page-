import { contentEl } from "./index";
import  locationImg  from "./asset/resource/location.jpg";

export let load_about_page = () => {
    
    contentEl.innerHTML = "<h1>Coming Soon</h1>"

    class CreateDomElement {
        constructor (type, className) {
            this.domEl = document.createElement(type);
            this.domEl.classList.add(className);
        }

        getDomEl () {
            return this.domEl;
        }
    };


    // 1st El
    const aboutEl = new CreateDomElement('div', 'about').getDomEl();
    contentEl.append(aboutEl);

    
    const textEl = new CreateDomElement('div', 'about-text').getDomEl();
    const imgEl = new CreateDomElement('img', 'location-img').getDomEl();
    imgEl.src = locationImg;

    aboutEl.append(textEl);
    aboutEl.append(imgEl);


};