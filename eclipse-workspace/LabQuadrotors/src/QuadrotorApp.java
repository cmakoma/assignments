import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;

// Assignement LabQuadrotors
// Program QuadrotorApp
// Author Christian Makoma
// Created Nov 10, 2019

public class QuadrotorApp {

	public static void main(String[] args) {
//		List<Quadrotor> rotors = Arrays.asList(
//				 new Quadrotor(2, 4, 2), new Quadrotor(3, 4, 4), new Quadrotor(4, 4, 6),
//				 new Quadrotor(5, 4, 2), new Quadrotor(6, 4, 4), new Quadrotor(7, 4, 6));
		
		List<Quadrotor> rotors = new ArrayList<Quadrotor>(Arrays.asList(
				 new Quadrotor(2, 4, 2), new Quadrotor(3, 4, 4), new Quadrotor(4, 4, 6),
				 new Quadrotor(5, 4, 2), new Quadrotor(6, 4, 4), new Quadrotor(7, 4, 6)));
		
		System.out.println(rotors);
		
		changeOrientation(rotors);
		System.out.println(rotors);
		
		Quadrotor searchItem = new Quadrotor(4,6,4);
		
		if(rotors.contains(searchItem)) {
			System.out.println("Rotors contain " + searchItem);
		} else {
			System.out.println("Rotors do not contain " + searchItem);
		}
		
		System.out.println("Number of rotors: " + rotors.size());
	
		
		rotors.remove(searchItem);
		System.out.println();
		System.out.println(rotors);
//		
		rotors.remove(0);
		System.out.println(rotors);
	}
	
	private static void changeOrientation(List<Quadrotor> l) {
		Quadrotor newor[] = new Quadrotor[l.size()];
		 int i = 0;
		
		for (Object o: l) {
			Quadrotor q = (Quadrotor)o;
			int x = q.getX();
			int y = q.getY();
			int z = q.getZ();
		
			newor[i] = new Quadrotor(y,x,z);
			i++;
		}
		
		int j = 0;
		 for (Quadrotor quad: newor) {
			 l.set(j, quad);
			 j++;
		 }
	}

}
