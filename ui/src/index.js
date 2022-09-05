import { DSU } from './DSU.js' 

function printElements(arr) {
  const treediv = document.querySelector('.tree')

  for (const element of arr) {
    const newDiv = document.createElement("div");
    const newP = document.createElement("p")
    const newContent = document.createTextNode(element)
    newDiv.classList.add('element')
    newDiv.id = element

    newP.appendChild(newContent);
    newDiv.appendChild(newP);
    treediv.appendChild(newDiv)
  }
}

function printParents(arr) {
  const parentdiv = document.querySelector('.parents')

  for (const parent of arr) {
    console.log(parent)
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

  console.log("Elements: " + elements)
  console.log("Parents: " + parents)

  printElements(elements)
  printParents(parents)
}

main()