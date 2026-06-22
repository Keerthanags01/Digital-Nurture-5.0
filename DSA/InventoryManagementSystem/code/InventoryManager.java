import java.util.HashMap;

public class InventoryManager {
    private HashMap<Integer, Product> inventory;

    public InventoryManager() {
        inventory = new HashMap<>();
    }

    public void addProduct(Product product) {
        inventory.put(product.getProductId(), product);
    }

    public void updateProduct(int productId, String name, int quantity, double price) {
        Product product = inventory.get(productId);

        if (product != null) {
            product.setProductName(name);
            product.setQuantity(quantity);
            product.setPrice(price);
        }
    }

    public void deleteProduct(int productId) {
        inventory.remove(productId);
    }

    public void displayProducts() {
        for (Product product : inventory.values()) {
            System.out.println(product);
        }
    }
}