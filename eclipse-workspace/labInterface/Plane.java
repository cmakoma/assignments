package labInterface;

public class Plane
{
	private final int numberOfEngines;
	private final String model;

	public Plane(int engines, String m)
	{
		numberOfEngines = engines;
		model = m;
	}

	@Override
	public String toString()
	{
		return String.format("%s with %d engines", model, numberOfEngines);
	}
}
