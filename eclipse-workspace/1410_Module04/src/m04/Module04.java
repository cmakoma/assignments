// Assignement 1410_Module04
// Program Module04
// Author Christian Makoma
// Created Oct 16, 2019


package m04;

import java.util.List;
import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.stream.Collectors;

public class Module04 {
	/**
	 * this the method that does all the demoCollection
	 */
	public static void demoCollection()

	{
		
		/**
		 * printing just numbers
		 */
		
		List<Double> numbers = Arrays.asList(0.2,0.4, 0.6, 0.25, 0.5,0.75);
		System.out.println("numbers: "+ numbers);
		
		/**
		 * doubling and sorting numbers
		 */
		
		ArrayList<Double> arrayList = new ArrayList<Double>();
		for (int i = 0; i < numbers.size(); i++) {
			arrayList.add(numbers.get(i));
			arrayList.add(2*numbers.get(i));	
		}
		
		Collections.sort(arrayList);
		System.out.println("numbers: "+arrayList);
		
		
		/**
		 * 100times and sorting numbers
		 */
		
		ArrayList<Double> arrayList100 = new ArrayList<Double>();
		for (int j = 0; j < arrayList.size(); j++) {
			arrayList100.add(100*arrayList.get(j));	
		}
		
		System.out.println("numbers: "+ arrayList100);
		
		System.out.println();
		
		/**
		 * hex numbers
		 */
		ArrayList<String> hexNumbers = new ArrayList<String>();
		for (int k = 0; k < arrayList100.size(); k++) {
			hexNumbers.add(arrayList100.get(k).toHexString(arrayList100.get(k)));
		}
		
		System.out.println("hexNumbers: "+ hexNumbers);
		
		/**
		 * Sorted numbers
		 */
		
		Collections.sort(hexNumbers);
		System.out.println("hexNumbers: "+ hexNumbers.stream().distinct().collect(Collectors.toList()));
		
	}

}
