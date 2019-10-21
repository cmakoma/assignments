// Assignement AssignmentInheritance
// Program IsoscelesRightTriangle
// Author Christian Makoma
// Created Sep 25, 2019


package assignmentInheritance;

public class IsoscelesRightTriangle {
	private final int leg;
	
	public IsoscelesRightTriangle(int lg) {
		leg = lg;
	}
	
	public double hypotenuse() {
		return Math.sqrt(leg*leg+ leg*leg);
	}
	
	public int getLeg() {
		return leg;
	}
	
	@Override 
	public String toString() {
		return this.getClass().getSimpleName() + "(" + getLeg() + ")";
	}
}
