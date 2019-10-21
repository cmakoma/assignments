// Assignement LabPrinter
// Program InkjetPrinter
// Author Christian Makoma
// Created Sep 24, 2019


package labPrinter;

public class InkjetPrinter extends Printer {
	
	private int remainingCartridge =100;
	
	public InkjetPrinter(int sNumber) {
		super(sNumber);
		
	}
	
	public int getRemainingCartridge(){
		return remainingCartridge;
	}
	
	@Override
	void print() {
		if(this.getRemainingCartridge() > 0) {
			remainingCartridge -= 10;
			System.out.println("InkjetPrinter is priting . " + 
			"Remaining Cartridge: " + this.remainingCartridge + "%");
		}else {
			System.out.println("Cartridge is empty");
		}
		
	}
}
