package labInterface;

public class Bird
{
	private final String type;

	public Bird(String t)
	{
		type = t;
	}

	@Override
	public String toString()
	{
		return type;
	}
}
