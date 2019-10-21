// Assignement AssignmentInheritance
// Program Circle
// Author Christian Makoma
// Created Sep 25, 2019


package assignmentInheritance;

public class Circle {
	
	private final int radius;
	
	public Circle(int r) {
		radius = r;
	}
	
	public int diameter() {
		return 2*radius;
	}
	
	public double circumference() {
		return 2*Math.PI*radius;
	}
	
	public int getRadius() {
		return radius;
	}
	
	@Override 
	public String toString() {
		return this.getClass().getSimpleName() + "(" + getRadius() + ")";
	}
}
