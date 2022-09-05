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
    // Set same parent for x and y
    arr[y] = x;
  }

  void unionByHeight(int x, int y) {
    // If y is deeper make y the new root
    if (arr[y] < arr[x]) {
      System.out.println(y + " is deeper than " + x);
      arr[x] = y;
    } else {
      // If same deep decrease the number of x
      if (arr[x] == arr[y]) {
        System.out.println(x + " is the same as " + y);
        arr[x]--; 
      }
      arr[y] = x;
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
        elementParents += arr[i] + " | ";  
      } else {
      // Else print the parent
        elementParents += find(i) + "  | ";
      }
      
    } 

    System.out.println("Index:  " + elementIndexes);
    System.out.println("Parent: " + elementParents);
    System.out.println();
  }
}
