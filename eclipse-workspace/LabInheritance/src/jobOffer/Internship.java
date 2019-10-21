// Assignement LabInheritance
// Program Internship
// Author Christian Makoma
// Created Sep 24, 2019


package jobOffer;

public class Internship extends Job {

	private int studentNumber;
	
	public Internship(String n, int s) {
		super(n);
		studentNumber = s;
		
		
	}

	@Override
	public void experience() {
		System.out.println(" no Experience required ");
	}
	
	@Override
	public String toString(){
		return String.format("Total number of student: " + studentNumber);
	}

}
