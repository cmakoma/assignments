// Assignement LabPolymorphism
// Program Dog
// Author Christian Makoma
// Created Sep 24, 2019


package labpolymorphism;

public class Dog
{
    private final String breed;

    public Dog(String b)
    {
        breed = b;
    }
    
    
    public void communicate()
    {
        System.out.println("bark bark");
    }

    public void move()
    {
        System.out.println("run");
    }

    public String getBreed()
    {
        return breed;
    }
    
    @Override
    public String toString() {
    	return this.getClass().getSimpleName() + ": " + getBreed();
    }
}

