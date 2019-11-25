// Assignement 1410_Module05
// Program Module05
// Author Christian Makoma
// Created Nov 13, 2019


package m05;

import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

/**
 * 
 * @author ChristianMakoma
 * This Program mirrors any pattern by X-axis and Y-axis
 */

public class Module05 {
/**
 * 
 * @param args
 * Pattern.txt need to be created before running this program
 * Pattern1.txt mirrors over vertical axis
 * Pattern2.txt mirrors over Horizontal axis
 */
	public static void main(String[] args) {
		List<Pattern2> pattern2List = new LinkedList<>();
		
		String filename1 = "Pattern1.txt";
		String filename2 = "Pattern2.txt";
		String line = null;	
	
		try(Scanner reader= new Scanner(Module05.class.getResourceAsStream("Pattern.txt"));
			PrintWriter writer1 = new PrintWriter(filename1);
			PrintWriter writer2 = new PrintWriter(filename2);)
		{
			
			do {
				line = reader.nextLine();
				Pattern1 pattern1 = getPattern1(line);
				Pattern2 pattern2 = getPattern2(line);
				
				writer1.println(pattern1);
				writer2.println(line);
				pattern2List.add(pattern2);
				
				
			} while (reader.hasNext());
			
			
			for(int i = pattern2List.size()-1;i  >= 0;  i-- ) {
				writer2.println(pattern2List.get(i));
			}
			
		} catch (FileNotFoundException e) {
			System.err.println("File not found");
		} 
		
		
	}
/**
 * 
 * @param line : get passed from main
 * @return each class returns accordingly;
 * No error expected from these classes
 */
	private static Pattern2 getPattern2(String line) {
		try {
			return new Pattern2(line);
		} catch (Exception e) {
			System.err.println("Unexpected Error");
		}
		return null;
	}

	private static Pattern1 getPattern1(String line) {
		try {
			return new Pattern1(line);
		} catch (Exception e) {
			System.err.println("Unexpected Error");
		}
		return null;
		
	}

}
