// Assignement 1410_Module02
// Program DeskPedalPlus
// Author Christian Makoma
// Created Sep 25, 2019


package module02;

/**
 * this is the DeskPedal extended from DeskPedal
 * @author christianmakoma
 *
 */
public class DeskPedalPlus extends DeskPedal{
	private int time;
	public DeskPedalPlus(String c, int t) {
		super(c);
		time = t;
		
	}

	public String printReport() {
		
		int fraction = time/60;
		int rest = time - (fraction * 60);
		
		return "Total time pedaled: " + (time < 60 ? rest + '"' : fraction + "'" + rest + '"' );
		
	}
	
	@Override
	public void pedal() {
		
		
		
		if(!(time < 15)) {
		System.out.println("pedaling ....");
		time = time - 15;
		pedal();
		
		}
		
		
			
	}
	
	public void reset() {
		time = 0;
	}
	
	
	
	@Override
	public String toString() {
		return "deskPedal2: " + this.getColor() +" DeskPedalPlus " + time + " min " ;
	}
	
	
}
