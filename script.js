const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`)
}
window.addEventListener("resize", documentHeight)
documentHeight();

const filterStoriesBtn = document.getElementById("filters-stories-btn");
const filtersStories = document.getElementById("filters-stories");
const filtersStoriesClose = document.getElementById("filters-stories-close");

const filterObjectsBtn = document.getElementById("filters-objects-btn");
const filtersObjects = document.getElementById("filters-objects");
const filtersObjectsClose = document.getElementById("filters-objects-close");

const functions = () => {
    clickOpen(filterStoriesBtn, filtersStories, "show", filtersObjects);
    clickOpen(filterObjectsBtn, filtersObjects, "show", filtersStories);
    clickClose(filtersStoriesClose, filtersStories, "show");
    clickClose(filtersObjectsClose, filtersObjects, "show");
}

const clickOpen = (button, elementOne, className, elementTwo) => {
    button.addEventListener("click", () => {
        elementOne.classList.toggle(className);
        if (elementTwo.classList.contains(className)) {
            elementTwo.classList.remove(className)
        }
    })
}

const clickClose = (button, element, className) => {
    button.addEventListener("click", () => {
        if (element.classList.contains(className)) {
            element.classList.remove(className);
        }
    })
}

functions();