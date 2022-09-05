export class DSU {
  constructor(numberOfElements) {
    this.arr = new Array(numberOfElements)

    // All elements are the root element [-1]
    for (let i = 0; i < this.arr.length; i++) {
      this.arr[i] = -1;
    }
  }

  find(x) {
    // If x is the root 
    if (this.arr[x] < 0) {
      return x;
    } else {
      // Return set that containing x
      return this.find(this.arr[x])
    }
  }

  union(x, y) {
    this.arr[y] = x
  }

  unionByHeight(x, y) {
    let arr = this.arr
    // If y is deeper make y the new root
    if (arr[y] < arr[x]) {
      console.log(y + " (" + arr[y]+ ") is deeper than " + x + "(" + arr[x]+ ")");
      arr[x] = y;
      arr[y]--; 
    } else {
      // If same deep decrease the number of x
      if (arr[x] == arr[y]) {
        console.log(x + " is the same as " + y);
        arr[x]--; 
      } else {
        console.log(y + " (" + arr[y]+ ") is not as deep as " + x + "(" + arr[x]+ ")");
      }

      arr[y] = x;
    }
  }

  getParents() {
    return this.arr
  }

  getElementIndexes() {
    let indexes = []
    for (let i = 0; i < this.arr.length; i++) {
      const index = this.find(i)
      indexes.push(index)
    }
    return indexes
  }

  printArray() {
    let arr = this.arr
    let elementIndexes = "|  ";
    let elementParents = "| ";
    
    for (let i = 0; i < arr.length; i++) {
      elementIndexes += i + " |  "; 
      let parent = this.find(i);

      // If element is the root print [-1]
      if (parent == i) {
        elementParents += this.arr[i] + " | ";  
      } else {
      // Else print the parent
        elementParents += this.find(i) + "  | ";
      }
      
    } 

    console.log("Index:  " + elementIndexes);
    console.log("Parent: " + elementParents);
    console.log();
  }

}