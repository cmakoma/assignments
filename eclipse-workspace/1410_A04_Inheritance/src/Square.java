// Assignement 1410_A04_Inheritance
// Program Square
// Author Christian Makoma
// Created Nov 25, 2019

public class Square extends Rectangle{
	public Square(int side) {
		super(side, side);

	}
	
	public int getSide() {
		return super.getLength();
	}
	
	@Override
	public String toString() {
		return String.format("Square (%d)", getLength());
	}
	
	
}
