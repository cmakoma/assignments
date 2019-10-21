// Assignement LabJUnit
// Program MyclassTest
// Author Christian Makoma
// Created Sep 9, 2019


package labJUnit;

import static org.junit.Assert.*;

import org.junit.Test;

public class MyclassTest {

	@Test
	public void test1() {
		
		MyClass tester = new MyClass();
		assertEquals("Result", 2, tester.multiply(10, 5));
	}
	
	@Test
	public void test2() {
		
		MyClass tester = new MyClass();
		assertEquals("Result", 2, tester.multiply(20, 10));
	}
	
	@Test
	public void test3() {
		
		MyClass tester = new MyClass();
		assertEquals("Result", 20, tester.multiply(100, 5));
	}
}
