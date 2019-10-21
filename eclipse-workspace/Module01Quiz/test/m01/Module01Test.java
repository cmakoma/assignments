// Assignement Module01Quiz
// Program Module01Test
// Author Christian Makoma
// Created Sep 11, 2019


package m01;

import static org.junit.Assert.*;

import org.junit.Test;

public class Module01Test {
	
	@Test
public void test1() {
		
		
		assertEquals("rebraB_Barber", m01.Module01.transform("barber"));
	}
	

	@Test
	public void test2() {
		
		Module01 tester = new Module01();
		assertEquals("Result", "abuyA_Ayuba", tester.transform("Ayuba"));
		
	}
	
	@Test
	public void test3() {
		
		Module01 tester = new Module01();
		assertEquals("Result", "Yalc_claY", tester.transform("Clay"));
		
	}
	
	@Test
	public void test4() {
		
		Module01 tester = new Module01();
		assertEquals("Result", "ZzuB_BuzZ", tester.transform("buzz"));
		
	}
	
	@Test
	public void test5() {
		
		Module01 tester = new Module01();
		assertEquals("Result", "null", tester.transform("null"));
		
	}
	
	@Test
	public void test6() {
		
		Module01 tester = new Module01();
		assertEquals("Result", "ZzuB_BuzZ", tester.transform("buzz'-"));
		
	}

}

