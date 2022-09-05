class index {
  public static void main(String[] args) {
 
    // 8 elements
    DisjointSetUnion dsu = new DisjointSetUnion(8);
    System.out.println("Created!");
    dsu.printArray();

    dsu.unionByHeight(4, 5);
    dsu.printArray();

    dsu.unionByHeight(3, 4);
    dsu.printArray();

    // dsu.unionByHeight(6, 7);
    // dsu.printArray();

    // dsu.unionByHeight(4, 6);
    // dsu.printArray();
  }
}