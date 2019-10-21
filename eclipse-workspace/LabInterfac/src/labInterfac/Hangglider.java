// Assignement LabInterfac
// Program Hangglider
// Author Christian Makoma
// Created Sep 24, 2019


package labInterfac;

public class Hangglider implements Flyable
{
	private final boolean isRigidWing;

	public Hangglider(boolean rigidWing)
	{
		isRigidWing = rigidWing;
	}

	@Override
	public String toString()
	{
		return String.format(isRigidWing ? "Rigid-wing" : "Flex-wing");
	}

	@Override
	public void launch() {
		System.out.println("Running until take-off");

		
	}

	@Override
	public void land() {
		System.out.println("Gliding to a land");
		
	}
}