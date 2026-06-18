

public class BuilderPatternTest {

    public static void main(String[] args) {

        Computer gamingPC = new Computer.Builder()
                .setCPU("Intel i9")
                .setRAM(32)
                .setStorage(1000)
                .setGraphicsCard(true)
                .setBluetooth(true)
                .build();

        Computer officePC = new Computer.Builder()
                .setCPU("Intel i5")
                .setRAM(16)
                .setStorage(512)
                .setGraphicsCard(false)
                .setBluetooth(true)
                .build();

        System.out.println("Gaming PC Configuration");
        gamingPC.displayConfiguration();

        System.out.println("Office PC Configuration");
        officePC.displayConfiguration();
    }
}
