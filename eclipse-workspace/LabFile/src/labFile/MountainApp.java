package labFile;

import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

public class MountainApp {
	public static void main(String[] args) {
		List<Mountain> mountainList = new LinkedList<>();
		String line = null;
		
		try(Scanner reader= new Scanner(MountainApp.class.getResourceAsStream("Mountains.csv")))
		{
			
			do {
				line = reader.nextLine();
				Mountain mountain = getMountain(line);
				if(mountain != null) {
					mountainList.add(mountain);
				}
//				System.out.println(reader.nextLine());
				
			} while (reader.hasNext());
		}
		
		
		System.out.println("\n Mountain List");
		
		for(Mountain m: mountainList) {
			System.out.println(m);
		}
	}

	private static Mountain getMountain(String line) {
		try {
			String[] items = line.split(",");
			return new Mountain(items[0], Integer.parseInt(items[1]), Boolean.parseBoolean(items[2]));
		} catch (NumberFormatException | ArrayIndexOutOfBoundsException e) {
			System.err.println(line + ".. cound not be read in as a mountain.");
		}
		
		return null;
	}
}
