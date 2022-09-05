class index {
  public static void main(String[] args) {
 
    // 8 elements
    DisjointSetUnion dsu = new DisjointSetUnion(8);
    System.out.println("Created!");
    // Warning! Uses array outside of class
    dsu.union(4, 5);
    dsu.printArray();
  }
}