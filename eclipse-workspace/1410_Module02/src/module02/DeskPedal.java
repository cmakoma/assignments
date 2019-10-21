// Assignement 1410_Module02
// Program DeskPedal
// Author Christian Makoma
// Created Sep 25, 2019


package module02;
/**
 * this is the DeskPedalclass
 * @author christianmakoma
 *
 */
public class DeskPedal {
	
	private String color;
	
	public DeskPedal(String c) {
		color = c;

	}
	
	public String getColor() {
		return color;
	}
	
	public void pedal() {
		System.out.println("pedaling ....");
	}
	
	
	public String toString() {
		return "deskPedal1: "+ getColor() + " DeskPedal";
	}

}
