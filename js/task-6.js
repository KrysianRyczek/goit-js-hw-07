function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("#controls > button:nth-child(2)")
const btnDestroy = document.querySelector("#controls > button:nth-child(3)")



const boxCount = (boxes) => {
    if (boxes == null) return 0
    return boxes.length
}

const sizeGenerator = (currentBoxesCout, index,) => {
    let size = 0 
    
    if (currentBoxesCout == 0) {
        size = 30
        return size
    }

    size = 30 + 10 * (index + currentBoxesCout-1)
    return size
}
    
const create = (event) => {
   
   const boxesToCreate = document.querySelector("#controls > input").value
   const parentBox = document.querySelector("#boxes")
    
    
    for (let index = 1; index <= boxesToCreate; index++) {
        const color = getRandomHexColor() 
        const boxes = document.querySelectorAll("#boxes > div")
        const currentBoxesCout= boxCount(boxes)
        const actualsize = sizeGenerator(currentBoxesCout, index)
        parentBox.insertAdjacentHTML("afterbegin",`<div style ="background-color: ${color}; width: ${actualsize}px; height: ${actualsize}px"></div>`)   

   }   
}

const destroy = (event) => {
    let boxesToDestroy = document.querySelector("#controls > input").value
    const boxes = document.querySelectorAll("#boxes > div")
    const currentBoxesCout = boxCount(boxes)
        
    if (boxesToDestroy > currentBoxesCout) {
            boxesToDestroy= currentBoxesCout
    }

    for (let index = 1; index <= boxesToDestroy; index++) {
        const toDestroy = document.querySelector("#boxes > div")
         toDestroy.remove();  
    }
 }   


btnCreate.addEventListener("click", create)
btnDestroy.addEventListener("click", destroy)

