// Assignement LabJUnit
// Program MyTestRunner
// Author Christian Makoma
// Created Sep 9, 2019


package labJUnit;

import org.junit.runner.JUnitCore;
import org.junit.runner.Result;
import org.junit.runner.notification.Failure;

class MyTestRunner {

	public static void main(String[] args) {
		Result result = JUnitCore.runClasses(AllTests.class);
		for(Failure failure : result.getFailures()) {
			System.out.println(failure.toString());
			}
		
		System.out.println("test run: " + result.getRunCount());
		System.out.println("test Failed: " + result.getFailureCount());
		System.out.println("test success: " + (result.getRunCount()-result.getFailureCount()));
		
	}

}
