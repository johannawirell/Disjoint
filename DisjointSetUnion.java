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
    if (arr[x] == x) {
      return x;
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
}
