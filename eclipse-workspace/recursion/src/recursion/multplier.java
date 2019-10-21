// Assignement recursion
// Program multplier
// Author Christian Makoma
// Created Sep 19, 2019


package recursion;

public class multplier {

	public static void main(String[] args) {
		
		multiplyof(6,5);
		System.out.print(count);

	}
	
	public static int count = 0;
	
	public static void multiplyof(int x, int y) {
		
		if((x>=y)) {
			count++;
			
			x = x - y;
			multiplyof(x,y);
		}
		
		
		
	}
	
	

}
