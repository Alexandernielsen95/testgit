const template = document.querySelector("template").content;

console.log(template)

const aCopy = template.cloneNode(true);
console.log(aCopy)

aCopy.querySelector("h2").textContent = "Jonas the pig"

aCopy.querySelector("p span").textContent = "Hotpink"

const whosyourdaddy = document.querySelector("main");

whosyourdaddy.appendChild(aCopy)
