public class Main {

    public static void main(String[] args) {

        EmployeeManagement management = new EmployeeManagement(10);

        management.addEmployee(
                new Employee(101, "Rahul", "Manager", 60000));

        management.addEmployee(
                new Employee(102, "Priya", "Developer", 50000));

        management.addEmployee(
                new Employee(103, "Arjun", "Tester", 45000));

        System.out.println("Employee Records:");
        management.traverseEmployees();

        System.out.println("\nSearching Employee ID 102:");
        Employee employee = management.searchEmployee(102);

        if (employee != null) {
            System.out.println(employee);
        } else {
            System.out.println("Employee not found");
        }

        management.deleteEmployee(102);

        System.out.println("\nAfter Deleting Employee ID 102:");
        management.traverseEmployees();
    }
}