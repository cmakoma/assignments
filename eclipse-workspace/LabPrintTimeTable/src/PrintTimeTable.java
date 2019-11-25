import java.io.PrintWriter;

// Assignement LabPrintTimeTable
// Program PrintTimeTable
// Author Christian Makoma
// Created Nov 13, 2019

public class PrintTimeTable {

	public static void main(String[] args) {
		String filename = "PrintTimesTable.txt";
		
		try (PrintWriter writer = new PrintWriter(filename)){
			writer.println("Time Tables: ");
			for (int i = 1; i <= 10; i += 2) {
				for (int j =1; j <= 10; j++) {
					writer.printf("%2d * %2d = %-3d\t", j, i, j*i);
					writer.printf("%2d * %2d = %-3d\n", j, i+1, j*(i+1));
				}
				writer.println();
			}
		} catch(Exception e) {
			
		}

	}

}
