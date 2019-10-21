// Assignement LabInheritance
// Program JobApp
// Author Christian Makoma
// Created Sep 24, 2019


package jobOffer;

public class JobApp {

	public static void main(String[] args) {
		Job software = new Job("Software Engeneer");
		Apply(software);
		
		System.out.println();

		
		Internship sales = new Internship("sales Intern", 24545535);
		Apply(sales);
	}
	
	public static void Apply(Job s) {
		System.out.println(s);
		s.location();
		s.benefit();
		s.experience();
	}

}
