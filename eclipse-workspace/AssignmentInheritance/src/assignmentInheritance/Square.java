// Assignement AssignmentInheritance
// Program Square
// Author Christian Makoma
// Created Sep 25, 2019


package assignmentInheritance;

public class Square extends Rectangle{

	public Square(int l, int w) {
		super(l, w);
		// TODO Auto-generated constructor stub
	}

	public int getSide() {
		return this.getWidth();
	}
	
	@Override 
	public String toString() {
		return this.getClass().getSimpleName() + "(" + getSide() + ")";
	}
}
