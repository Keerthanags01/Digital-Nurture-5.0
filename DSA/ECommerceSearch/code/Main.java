public class Main {
    public static void main(String[] args) {

        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mouse", "Accessories"),
            new Product(103, "Keyboard", "Accessories"),
            new Product(104, "Monitor", "Electronics"),
            new Product(105, "Printer", "Office")
        };

        int searchId = 104;

        Product linearResult =
                SearchOperations.linearSearch(products, searchId);

        System.out.println("Linear Search Result:");
        if (linearResult != null) {
            System.out.println(linearResult);
        } else {
            System.out.println("Product not found");
        }

        Product binaryResult =
                SearchOperations.binarySearch(products, searchId);

        System.out.println("\nBinary Search Result:");
        if (binaryResult != null) {
            System.out.println(binaryResult);
        } else {
            System.out.println("Product not found");
        }
    }
}