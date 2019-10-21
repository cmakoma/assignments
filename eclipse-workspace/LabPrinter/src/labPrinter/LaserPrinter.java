// Assignement LabPrinter
// Program LaserPrinter
// Author Christian Makoma
// Created Sep 24, 2019


package labPrinter;

public class LaserPrinter extends Printer {
	
	private int remainingToner = 100;
	public LaserPrinter(int sNumber) {
		super(sNumber);
		
	
	}
	
	public int getRemainingToner(){
		return remainingToner;
	}

	@Override
	void print() {
		if(this.getRemainingToner() > 0) {
			remainingToner -= 10;
			System.out.println("LaserPrinter is priting . " + 
			"Remaining toner: " + this.remainingToner + "%");
		}else {
			System.out.println("toner is empty");
		}
		
	}


}
