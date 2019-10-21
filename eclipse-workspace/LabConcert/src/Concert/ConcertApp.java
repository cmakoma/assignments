// Assignement LabConcert
// Program ConcertApp
// Author Christian Makoma
// Created Sep 9, 2019


package Concert;

public class ConcertApp {

	public static void main(String[] args) {
		Concert myConcert1 = new Concert("Twight light", new Time(1,2,3), new Time(3,4,4));
		System.out.println(myConcert1);
		
		
		String n = "thanksgiving";
		Time start = new Time(3,10,00);
		Time end = new Time(23,40,00);
		Concert myConcert2 = new Concert(n, start, end);
		System.out.println(myConcert2);
				

	}

}
