// Assignement 1410_A04_Inheritance
// Program IsoscelesRightTriangle
// Author Christian Makoma
// Created Nov 25, 2019

public class IsoscelesRightTriangle {
	private final int leg;
	
	public IsoscelesRightTriangle(int leg) {
		super();
		this.leg = leg;
	}
	
	public double hypotenuse(double hyp) {
		return hyp;
	}

	public int getLeg() {
		return leg;
	}

	@Override
	public String toString() {
		return String.format("IsoscelesRightTriangle (%d)", leg);
	}
	
	
}
