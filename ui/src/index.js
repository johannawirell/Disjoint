import { DSU } from './DSU.js' 

function printElements(arr, parents) {
  // Delete previous content
  const treediv = document.querySelector('.tree')
  while(treediv.firstChild){
    treediv.removeChild(treediv.firstChild);
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
  // Delete previous content
  const parentdiv = document.querySelector('.parents')
  while(parentdiv.firstChild){
    parentdiv.removeChild(parentdiv.firstChild);
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


}

main()