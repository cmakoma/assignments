// Assignement 1410_Module02
// Program Module02App
// Author Christian Makoma
// Created Sep 25, 2019


package module02;

public class Module02App {

	public static void main(String[] args) {
		DeskPedal test1 = new DeskPedal("blue");
		System.out.println(test1.toString());
		test1.pedal();
		System.out.println();
		
		
		DeskPedalPlus test2 = new DeskPedalPlus("blue",0);
		DeskPedalPlus test3 = new DeskPedalPlus("blue",60);
		DeskPedalPlus test4 = new DeskPedalPlus("blue",75);
		DeskPedalPlus test5 = new DeskPedalPlus("blue",0);
		
		DeskPedalPlus[] tests = new DeskPedalPlus[]{test2,test3,test4,test5};
		
		for(DeskPedalPlus d : tests) {
			System.out.println(d.toString());
			System.out.println(d.printReport());
			d.pedal();
			d.reset();
			System.out.println();
		}
	
		
	}

}
