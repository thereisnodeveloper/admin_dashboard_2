const addCardButton = document.querySelector(".new")
const card = document.querySelector(".card")
const projects = document.querySelector(".projects")

const addProject = function(){
    // projects.appendChild(card);
    projects.appendChild(card.cloneNode(true))
}
addCardButton.addEventListener("click", addProject)