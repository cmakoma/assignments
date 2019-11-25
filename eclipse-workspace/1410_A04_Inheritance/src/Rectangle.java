// Assignement 1410_A04_Inheritance
// Program Rectangle
// Author Christian Makoma
// Created Nov 25, 2019

public class Rectangle {
	private final int length, width;
	
	public Rectangle(int l, int w) {
		this.length = l;
		this.width = w;
	}

	public int getLength() {
		return length;
	}

	public int getWidth() {
		return width;
	}

	@Override
	public String toString() {
		return String.format("Rectangle (%dX%d)", length, width);
	}
	
	
}
