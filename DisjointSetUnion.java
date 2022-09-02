public class DisjointSetUnion {
  private int[] arr;

  DisjointSetUnion(int n) {
    this.arr = new int[n];

    for (int i = 0; i < n; i++) {
      arr[i] = i;
    }
  }

  // Find parent of x
  int find(int x) {
    // If element is the parent
    if (arr[x] == x) {
      return -1;
    }
    return arr[x] = find(arr[x]);
  }

  void union(int x, int y) {
    // Find parent of x and y
    int parentOfX = find(x);
    int parentOfY = find(y);

    // Same parent for x and y
    arr[parentOfY] = parentOfX;
  }

  void printArray() {
    String elementParents = "|  ";
    String elementIndexes = "|   ";
    

    for (int element : this.arr) {
      elementParents += find(element) + "  | ";
      elementIndexes += element + "  |  "; 
    } 

    System.out.println("Element parents: " + elementParents);
    System.out.println("Element indexes: " + elementIndexes);
  }
}
