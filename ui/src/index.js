import { DSU } from './DSU.js' 

function createNewDiv(className) {
  let nodes = document.querySelectorAll("." + className)
  let oldDiv = nodes[nodes.length -1]
  const newDiv = document.createElement("div");
  newDiv.classList.add(className)
  newDiv.id = parseInt(oldDiv.id) + 1

  document.querySelector('body').appendChild(newDiv)

  return newDiv
}

function printElements(arr, parents) {
  let treediv = document.querySelector('.tree')
  let needToModify = false

  // Create a new tree div
  if (treediv.firstChild != undefined) {
    treediv = createNewDiv('tree')
  }
  
  for (let i = 0; i < arr.length; i++) {
    const root = parents[i] 

    printElement(arr[i], root, treediv)

    if (!needToModify && root > -1) {
      needToModify = true
    } 
  }

  if (needToModify) {
    modifyHeight(treediv)
  } 
  printParents(parents)
}

function modifyHeight(treediv) {
  const elements = treediv.querySelectorAll('.element')

  for (const element of elements) {
    if (element.id >= 0) {
      // Find parent element margin top
      for(const parent of elements) {
        if (parent.textContent == element.id) {
          const parentstyle = parent.currentStyle || window.getComputedStyle(parent);
          const parentMargin = parentstyle.marginTop
          const marginValue = parentMargin.replace(/\D/g, '')
          const newMargin = (parseInt(marginValue) + 100) + "px"

          // Add 100 px to element
          element.style.marginTop = newMargin

          return
        }
      }
      
    }
  }  
}

function printElement(index, root, treediv) {
  const newDiv = document.createElement("div");
  const newP = document.createElement("p")
  const newContent = document.createTextNode(index)
  newDiv.classList.add('element')
  newDiv.classList.add(index)

  newDiv.id = root

  newP.appendChild(newContent);
  newDiv.appendChild(newP);
  treediv.appendChild(newDiv);  
}

function printParents(arr) {
  let parentdiv = document.querySelector('.parents')

  // Create a new parent div
  if (parentdiv.firstChild != undefined) {
    parentdiv = createNewDiv('parents')

  }

  for (const parent of arr) {
    const newDiv = document.createElement("div");
    const newP = document.createElement("p")
    const newContent = document.createTextNode(parent)
    newDiv.classList.add('parent')

    newP.appendChild(newContent);
    newDiv.appendChild(newP);
    parentdiv.appendChild(newDiv)
  }
}

function main() {
  let dsu = new DSU(8)

  const elements = dsu.getElementIndexes();
  const parents = dsu.getParents();

  printElements(elements, parents)

  dsu.unionByHeight(4, 5)

  printElements(elements, parents)

}

main()