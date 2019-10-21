// Assignement LabPolymorphism
// Program DogApp
// Author Christian Makoma
// Created Sep 24, 2019


package labpolymorphism;

public class DogApp
{
    public static void main(String[] args)
    {
        Dog myDog = new Dog("Greyhound");
        
        SledDog mySledDog = new SledDog("Husky");
        
        CircusDog myCircusDog = new CircusDog("Terrier");
        
        
        
        Dog [] dogArray = new Dog[] {myDog,mySledDog,myCircusDog};


        for(Dog dog : dogArray){

        System.out.println(dog);
        
        if(dog instanceof SledDog) {
        	((SledDog) dog).pullSled();
        }
        
        actAsDog(dog);

        }
    }

    private static void actAsDog(Dog d)
    {
    	
        d.communicate();
        d.move();
        System.out.println();
    }
    
    
}

