// Assignement 1410_A04_Inheritance
// Program Circle
// Author Christian Makoma
// Created Nov 25, 2019

public class Circle {
	private final int radius;
	
	public Circle(int r) {
		this.radius = r;
	}
	
	public int diameter(int radius) {
		return 2*radius;
	}
	
	public double circumference() {
		return diameter(radius)*Math.PI;
	}

	public int getRadius() {
		return radius;
	}
	
	public String toString() {
		return String.format("Circle(%d)", radius);
	}
}
