const environment = {
    theme: "light",
    themes: ["light", "dark"],
    colors: {
        dark: ["indianred", "mediumseagreen", "darkslategray", "slategray", "green", "darkorange", "mediumvioletred"],
        light: ["aliceblue", "aquamarine", "bisque", "thistle", "peachpuff", "lightcoral", "lemonchiffon"]
    }
}

document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

function addSubItem(e){
    const subItem = createSubItem(e)
    e.target.parentNode.appendChild(subItem)    
}

function createSubItem(e){
    const subItem = document.createElement("div")
    subItem.textContent = document.getElementById("input").value
    const button = document.createElement("button")
    button.textContent = "new sub-item"
    button.addEventListener("click", addSubItem)
    subItem.appendChild(button)
    let level = Number(e.target.parentNode.dataset.level) + 1
    if(level > environment.colors[environment.theme].length){
        level = 0
    }
    subItem.setAttribute("style", "margin-left: 10px; background-color: " + environment.colors[environment.theme][level - 1])
    subItem.setAttribute("class", "sub-item")
    subItem.setAttribute("data-level", level)
    return subItem
}

document.getElementById("theme").addEventListener("click", function(){ 
    const elements = document.getElementsByClassName("sub-item")
    for (let i = 0; i < elements.length; i++){
        const level = Number(elements[i].getAttribute("data-level"))
        elements[i].style.backgroundColor = environment.colors[environment.theme][level]
    }
    let whichThemeIndex = environment.themes.indexOf(environment.theme)
    if (whichThemeIndex === environment.themes.length - 1){
        whichThemeIndex = -1
    }
    environment.theme = environment.themes[whichThemeIndex + 1]
})


// take .length off
// refer to a id name wrong
// const a let