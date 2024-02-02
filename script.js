const h2 = document.createElement("h2");
h2.textContent = "About me:";

document.querySelector("body").appendChild(h2);

function toggleSection() {
    const section = document.getElementById("img");
    const sectionButton = document.getElementById("Show Images");
    if (section.hidden) {
        sectionButton.innerHTML = "Show Less";
        section.hidden = false;
    } else {
        sectionButton.innerHTML = "Show Images";
        section.hidden = true;
    }
}