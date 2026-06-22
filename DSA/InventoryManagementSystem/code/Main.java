public class Main {
    public static void main(String[] args) {

        InventoryManager manager = new InventoryManager();

        manager.addProduct(new Product(101, "Laptop", 20, 50000));
        manager.addProduct(new Product(102, "Mouse", 100, 500));
        manager.addProduct(new Product(103, "Keyboard", 50, 1200));

        System.out.println("Inventory After Adding Products:");
        manager.displayProducts();

        manager.updateProduct(102, "Wireless Mouse", 120, 700);

        System.out.println("\nInventory After Updating Product:");
        manager.displayProducts();

        manager.deleteProduct(103);

        System.out.println("\nInventory After Deleting Product:");
        manager.displayProducts();
    }
}