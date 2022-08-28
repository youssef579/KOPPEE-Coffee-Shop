let navBar = document.querySelector("header nav");
let header = document.querySelector("header");
let up = document.querySelector('a[href="#top"]');
let selectList = document.querySelector("select");

document.querySelector(".navbar-toggle").addEventListener("click", () => {
    if (navBar.getAttribute("class") == "closed") {
        navBar.setAttribute("class", "opened");
        header.style.backgroundColor = "#33211D";
    } else {
        navBar.setAttribute("class", "closed");
        header.style.backgroundColor = "transparent";
    }
});

selectList.addEventListener("focus", () => {
    selectList.nextElementSibling.style.transform = "translateY(-50%) rotate(180deg)";
});

selectList.addEventListener("blur", () => {
    selectList.nextElementSibling.style.transform = "translateY(-50%)";
});

window.addEventListener("scroll", () => {
    up.style.bottom = window.scrollY >= 200 ? "20px" : "-50px";
});