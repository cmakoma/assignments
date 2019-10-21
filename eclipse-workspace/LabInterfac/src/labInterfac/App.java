// Assignement LabInterfac
// Program App
// Author Christian Makoma
// Created Sep 24, 2019


package labInterfac;

public class App
{

	/**
	 * @param args
	 */
	public static void main(String[] args)
	{
		
		Plane myPlane = new Plane(4, "Boing 747");
		System.out.printf("myPlane: %s%n", myPlane);

		Hangglider myHangglider = new Hangglider(true);
		System.out.printf("myHangglider: %s%n", myHangglider);

		Bird myBird = new Bird("Swallow");
		System.out.printf("myBird: %s%n", myBird);
		
		Flyable[] flyingThings = new Flyable[] {myPlane, myHangglider,myBird};

		 for(Flyable f : flyingThings ){
			 
	
			 System.out.println();
			 System.out.println(f);
			 f.launch();
			 f.land();
			 
			 
			 
			 
		 }
	}

}
