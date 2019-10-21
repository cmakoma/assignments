// Assignment LabInheritance
// Program jobDescription
// Author Christian Makoma
// Created Sep 24, 2019


package jobOffer;

public class Job {
	
	private String name;
	
	public Job (String n) 
	{
		name = n;
	}
			
	
	public String toString() 
	{
		return String.format("Job title %s ", getJob());
	}
	
	public void experience() {
		System.out.println("at least 1 year ");
	}
	
	public void location() 
	{
		System.out.println("Utah Area ");
	}
	public void benefit() {
		System.out.println(" Paid Gym");
	}

	public String getJob() {
		return name;
	}
}
