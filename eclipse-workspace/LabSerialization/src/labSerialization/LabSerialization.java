package labSerialization;

import java.awt.Color;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

public class LabSerialization {
    public static void main(String[] args) {
        ListVsSetDemo demo = new ListVsSetDemo(
                new ColoredSquare(4, Color.RED),
                new ColoredSquare(6, Color.BLUE),
                new ColoredSquare(4, Color.RED),
                new ColoredSquare(8, Color.YELLOW));

        testDemo(demo);
        serialize(demo, "Demo.ser");
        ListVsSetDemo demo2 = deserialize("Demo.ser");
        testDemo(demo2);

    };

 

    private static ListVsSetDemo deserialize(String filename) {
    	try (ObjectInputStream in = new ObjectInputStream(new FileInputStream(filename))) {
    		return (ListVsSetDemo) in.readObject();
    	} catch (FileNotFoundException e) {
    		System.out.println("File not found.");
    	} catch (IOException e) {
    		System.out.println("IO Exception occured");
    	} catch (ClassNotFoundException e) {
    		System.out.println("Class not found.");
    	}
    	return null;
    }
    
    private static void serialize(ListVsSetDemo demo, String filename) {
    	try (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream(filename))) {
    		out.writeObject(demo);
    	} catch (FileNotFoundException e) {
    		System.out.println("File not found.");
    	} catch (IOException e) {
    		System.out.println("IO Exception occured");
    	}
    }
    
   

    private static void testDemo(ListVsSetDemo demo) {
        System.out.println("List:");
        System.out.println(demo.getListElements());
        System.out.println("Set:");
        System.out.println(demo.getSetElements());
    }

}
