// Assignement AssignmentInheritance
// Program Rectangle
// Author Christian Makoma
// Created Sep 25, 2019


package assignmentInheritance;

public class Rectangle {
	private int length;
	private int width;
	
	public Rectangle(int l, int w) {
		length = l;
		width = w;
	}
	
	public int getLength() {
		return length;
	}
	
	public int getWidth() {
		return width;
	}
	
	@Override 
	public String toString() {
		return this.getClass().getSimpleName() + "(" + getLength() + "*" + getWidth() + ")";
	}
}
