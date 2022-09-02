class index {
  public static void main(String[] args) {
 
    // 8 elements
    DisjointSetUnion dsu = new DisjointSetUnion(8);
    System.out.println("Created!");
    System.out.println("Parent of 0 is: " + dsu.find(0));
    System.out.println("Parent of 1 is: " + dsu.find(1));
    System.out.println("Parent of 2 is: " + dsu.find(2));
    System.out.println("Parent of 3 is: " + dsu.find(3));
    System.out.println("Parent of 4 is: " + dsu.find(4));
    System.out.println("Parent of 5 is: " + dsu.find(5));
    System.out.println("Parent of 6 is: " + dsu.find(6));
    System.out.println("Parent of 7 is: " + dsu.find(7));
  }
}