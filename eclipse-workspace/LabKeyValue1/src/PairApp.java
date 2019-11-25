import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

// Assignement LabKeyValue1
// Program PairApp
// Author Christian Makoma
// Created Nov 12, 2019

public class PairApp {

	@SuppressWarnings("unchecked")
	public static void main(String[] args) {
		KeyValuePair<String , Integer> p1= new KeyValuePair<>("SLC", 189899);
		KeyValuePair<String , Integer> p2 = new KeyValuePair<>("NYC", 8244910);
		KeyValuePair<String , Integer> p3 = new KeyValuePair<>("LA", 3819701);
		KeyValuePair<String , Integer> p4 = new KeyValuePair<>("SF", 812826);
		
		List<KeyValuePair> cities = new ArrayList<KeyValuePair>();
		cities.add(p1);
		cities.add(p2);
		cities.add(p3);
		cities.add(p4);
		
		System.out.println("p1: " + p1);
		System.out.println("p2: " + p2);
		System.out.println("p1.equals(p2): " + p1.equals(p2));
		System.out.println();
		
		
		p2 = p1;
		System.out.println("p1: " + p1);
		System.out.println("p2: " + p2);
		System.out.println("p1.equals(p2): " + p1.equals(p2));
		System.out.println();
		
		System.out.println("Original List: ");
		for(KeyValuePair c: cities) {
			System.out.println(c);
		}
		System.out.println();
		
		Collections.sort(cities);
		
		///// print sorted list 
		System.out.println("Sorted List:");
		for(KeyValuePair city: cities) {
			System.out.println(city);
		}
	}

}
