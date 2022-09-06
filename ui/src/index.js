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

  printPointers(treediv) 
  printParents(parents)
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

function printPointers(treediv) {
  const elements = treediv.querySelectorAll('.element')

  for (const element of elements) {
    const parent = element.getAttribute('id')
    const pElement = element.querySelector('p')
    const newDiv = document.createElement("div");
    const pointTo = element.id
    
    const newContent = document.createTextNode(pointTo)
    newDiv.appendChild(newContent);

    newDiv.classList.add('pointer')

    element.insertBefore(newDiv, pElement); 

    if (parent > -1) {
      console.log(element)
      console.log('not the root')
    } 

  }
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

  // dsu.unionByHeight(0, 1)

  // printElements(elements, parents)

  // // Om den man ska koppla till redan ingår i en annan serie X
  // // Koppla ihop det nya elementet med denna serie X
  // //            __4__
  // //            |   |
  // //            5   6
  // dsu.unionByHeight(5, 6)

  // printElements(elements, parents)

}

main()