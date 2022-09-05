class index {
  public static void main(String[] args) {
 
    // 8 elements
    DisjointSetUnion dsu = new DisjointSetUnion(8);
    System.out.println("Created!");
    dsu.printArray();

    System.out.println("Union(4,5)");
    dsu.unionByHeight(4, 5);
    dsu.printArray();

    System.out.println("Union(6, 7)");
    dsu.unionByHeight(6, 7);
    dsu.printArray();

    System.out.println("Union(3, 4)");
    dsu.unionByHeight(3, 4);
    dsu.printArray();

    System.out.println("Union(4,6)");
    dsu.unionByHeight(4, 6);
    dsu.printArray();
  }
}