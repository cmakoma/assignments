// Assignement LabPolymorphism
// Program CircusDog
// Author Christian Makoma
// Created Sep 24, 2019


package labpolymorphism;

public class CircusDog extends Dog
{
    public CircusDog(String b)
    {
        super(b);
    }

    @Override
    public void move()
    {
        System.out.println("tightrope walking");
    }
}
