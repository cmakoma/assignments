// Assignement LabConcert
// Program Concert
// Author Christian Makoma
// Created Sep 9, 2019


package Concert;

public class Concert {
	
	private String name;
	private Time startTime;
	private Time endTime;
	
	public Concert(String n, Time start, Time end ) {
		this.name = n;
		this.startTime = start;
		this.endTime = end;
		
	}
	
	public String toString() {
		return name + " concert starts at " + startTime + " and ends at " + endTime;
	}
}
