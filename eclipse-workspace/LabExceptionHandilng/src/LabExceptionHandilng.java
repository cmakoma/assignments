// Assignement LabExceptionHandilng
// Program LabExceptionHandilng
// Author Christian Makoma
// Created Nov 12, 2019

import java.util.InputMismatchException;
import java.util.Scanner;

public class LabExceptionHandilng {

	public static void main(String[] args) {
		
			try {
				int digit = numberFromUser();
				int result = sevenModulusN(digit);
				System.out.printf("7 %% %d = %d", digit, result);
			} catch (IllegalArgumentException e) {
				System.out.println(e.getMessage());
			}
		
	}
	
	private static int numberFromUser(){
		Scanner input = new Scanner(System.in);
		
		while (true) {
			try {
				System.out.print("number: ");
				int number = input.nextInt();
				if (number == 0) throw new IllegalArgumentException("Can’t calculate 7 % 0 ");
				return number;
				
			} catch (InputMismatchException e) {
				System.out.printf("Please Enter Whole number \n");
				input.nextLine();
			} 
		}
		
	}
	private static int sevenModulusN(int number){
		return 7 % number;
	}

}
