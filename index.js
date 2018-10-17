const environment = {
    theme: "light",
    colors: {
        dark: ["indianred", "mediumseagreen", "darkslategray", "slategray", "green", "darkorange", "mediumvioletred"],
        light: ["aliceblue", "aquamarine", "bisque", "thistle", "peachpuff", "lightcoral", "lemonchiffon"]
    }
}

environment.themes = Object.keys(environment.colors)

document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

function addSubItem(e){
    const subItem = createSubItem(e)
    e.target.parentNode.appendChild(subItem)    
}

function createSubItem(e){
    const subItem = createElement("div")
    subItem.textContent = document.getElementById("input").value
    const button = document.createElement("button")
    button.textContent = "new sub-item"
    button.addEventListener("click", addSubItem)
    subItem.appendChild(button)
    const level = Number(e.target.parentNode.dataset.level) + 1
    if(level > environment.colors[environment.theme].length){
        level = 0
    }
    subItem.setAttribute("style", "margin-left: 10px; background-color: " + environment.colors[environment.theme][level - 1])
    subItem.setAttribute("class", "subItem")
    subItem.setAttribute("data-level", level)
    return subItem
}

document.getElementById("theme").addEventListener("click", function(){ 
    const elements = document.getElementByClass("subItem")
    for (let i = 0; i < elements.length; i++){
        const level = Number(elements[i].getAttribute("data-level"))
        elements[i].style.backgroundColor = environment.colors[environment.theme][level]
    }
    const whichThemeIndex = environment.themes.indexOf(environment.theme)
    if (whichThemeIndex === environment.themes - 1){
        whichThemeIndex = -1
    }
    environment.theme = environment.themes[whichThemeIndex + 1]
})

    