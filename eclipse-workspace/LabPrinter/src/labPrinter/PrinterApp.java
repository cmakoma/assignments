// Assignement LabPrinter
// Program PrinterApp
// Author Christian Makoma
// Created Sep 24, 2019


package labPrinter;

public class PrinterApp {

	public static void main(String[] args) {
		LaserPrinter lPrinter = new LaserPrinter(1234567);
		InkjetPrinter iPrinter = new InkjetPrinter(238889);

		
		Printer[] printers = {lPrinter, iPrinter};
		System.out.println("Array of Printers \n");
		
		System.out.println(lPrinter);
		System.out.println("Remaining Toner: " + lPrinter.getRemainingToner()+ "%");
		System.out.println();
		
		
		System.out.println(iPrinter);
		System.out.println("Remaining Carttridge: " + iPrinter.getRemainingCartridge() + "%");
		System.out.println();
		
		for (Printer p: printers) {
			System.out.println(p);
			p.print();
			p.print();
			System.out.println();
		}
	}

}
