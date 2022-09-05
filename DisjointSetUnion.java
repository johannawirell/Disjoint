public class DisjointSetUnion {
  int[] arr;

  DisjointSetUnion(int numberOfElements) {
    this.arr = new int[numberOfElements];

    // All elements are the root element [-1]
    for (int i = 0; i < arr.length; i++) {
      arr[i] = -1;
    }
  }

  // Find parent of x
  int find(int x) {
    // If x is the root 
    if (arr[x] < 0) {
      return x;
    } 
    // Else find the parent on the x's parent
   return find(arr[x]);
  }

  void union(int x, int y) {
    // Find parent of x and y
    int parentOfX = find(x);
    int parentOfY = find(y);  

    // Set same parent for x and y
    if (parentOfY < 0) {
      arr[x] = y;  
    } else {
      arr[y] = parentOfX;
    }
  }

  void printArray() {
    String elementIndexes = "|  ";
    String elementParents = "| ";
    
    for (int i = 0; i < arr.length; i++) {
      elementIndexes += i + " |  "; 
      int parent = find(i);

      // If element is the root print [-1]
      if (parent == i) {
        elementParents += -1 + " | ";  
      } else {
      // Else print the parent
        elementParents += find(i) + "  | ";
      }
      
    } 

    System.out.println("Index:  " + elementIndexes);
    System.out.println("Parent: " + elementParents);
  }
}
