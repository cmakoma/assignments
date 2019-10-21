// Assignement LabPrinter
// Program Printer
// Author Christian Makoma
// Created Sep 24, 2019


package labPrinter;

public abstract class Printer {
	private int serialNumber;
	
	public Printer(int number) {
		serialNumber = number;
	}
	
	abstract void print();
	
	@Override
	public String toString() {
		return this.getClass().getSimpleName()+ " #"+serialNumber;
	}
	
}
