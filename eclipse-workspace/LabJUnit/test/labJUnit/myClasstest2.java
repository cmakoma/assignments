// Assignement LabJUnit
// Program myClasstest2
// Author Christian Makoma
// Created Sep 9, 2019


package labJUnit;

import static org.junit.Assert.*;

import org.junit.Test;

public class myClasstest2 {

	@Test
	public void test4() {
		
		MyClass tester = new MyClass();
		assertEquals("Result", 15, tester.multiply(30, 2));
	}
	
	@Test
	public void test5() {
		
		MyClass tester = new MyClass();
		assertEquals("Result", 2, tester.multiply(34, 1));
	}

}
