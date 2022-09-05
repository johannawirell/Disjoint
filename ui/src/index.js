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

  // Create a new tree div
  if (treediv.firstChild != undefined) {
    treediv = createNewDiv('tree')
  }
  
  for (let i = 0; i < arr.length; i++) {
    const newDiv = document.createElement("div");
    const newP = document.createElement("p")
    const newContent = document.createTextNode(arr[i])
    newDiv.classList.add('element')
    newDiv.id = parents[i]

    newP.appendChild(newContent);
    newDiv.appendChild(newP);
    treediv.appendChild(newDiv)
  }

  printParents(parents)
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

  dsu.unionByHeight(0, 1)

  printElements(elements, parents)

  dsu.unionByHeight(3, 1)

  printElements(elements, parents)
}

main()