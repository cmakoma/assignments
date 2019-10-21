// Assignement LabBalloon
// Program Balloon
// Author Christian Makoma
// Created Oct 9, 2019


package labBalloon;

public class Balloon {
	private Size size;
	private boolean helium;
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (helium ? 1231 : 1237);
		result = prime * result + ((size == null) ? 0 : size.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!(obj instanceof Balloon))
			return false;
		Balloon other = (Balloon) obj;
		if (helium != other.helium)
			return false;
		if (size != other.size)
			return false;
		return true;
	}
	public Balloon(Size size, boolean helium) {
		super();
		this.size = size;
		this.helium = helium;
	}
}
