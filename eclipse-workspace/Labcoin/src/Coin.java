// Assignement Labcoin
// Program Coin
// Author Christian Makoma
// Created Nov 11, 2019

public enum Coin {
	CENT(2.5, 19.1), NICKEL(5.0, 21.2), DIME(2.3, 17.9),QUARTER(.7, 24.3);
	
	private final double weight, diameter;
	
	private Coin(double w, double d) {
		this.weight = w;
		this.diameter = d;
	}
	
	@Override
	public String toString() {
		return super.toString() + " w:" + weight + ", d:" + diameter;
	}
	
}
