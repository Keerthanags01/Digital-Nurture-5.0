public class Main {

    public static void main(String[] args) {

        Order[] orders1 = {
                new Order(101, "Rahul", 4500),
                new Order(102, "Priya", 1200),
                new Order(103, "Arjun", 8000),
                new Order(104, "Sneha", 3000)
        };

        System.out.println("Orders Before Bubble Sort:");
        SortOperations.displayOrders(orders1);

        SortOperations.bubbleSort(orders1);

        System.out.println("\nOrders After Bubble Sort:");
        SortOperations.displayOrders(orders1);

        Order[] orders2 = {
                new Order(101, "Rahul", 4500),
                new Order(102, "Priya", 1200),
                new Order(103, "Arjun", 8000),
                new Order(104, "Sneha", 3000)
        };

        SortOperations.quickSort(orders2, 0, orders2.length - 1);

        System.out.println("\nOrders After Quick Sort:");
        SortOperations.displayOrders(orders2);
    }
}