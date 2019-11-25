// Assignement 1410Gps
// Program Gps
// Author Christian Makoma
// Created Nov 24, 2019


package gps;

import java.util.ArrayList;
import java.util.Random;

import org.junit.runner.JUnitCore;
import org.junit.runner.Result;
import org.junit.runner.notification.Failure;

public class Gps {
	private ArrayList<GpsPosition> route;
	/**
	 * 
	 * @param route GpsPosition argument
	 */

	public Gps(GpsPosition route) {
        this.route = new ArrayList<>();
        this.route.add(route);
    }
	
	public ArrayList<GpsPosition> getRoute() {
		return route;
	}

	public void update(GpsPosition position) {
		route.add(position);
	}

	public void randomUpdate() {
		
		Random rand = new Random();
		
		GpsPosition randomPosition = new GpsPosition(
				
				route.get(route.size()-1).getLatitude() + rand.nextDouble() - 0.5,
                route.get(route.size()-1).getLongitude() + rand.nextDouble() - 0.5,
                route.get(route.size()-1).getElevation());
		
		route.add(randomPosition);
	}
	
	
	/**
	 * 
	 * @return GpsPosition is the current position 
	 */
	public GpsPosition position() {
		return route.get(route.size()-1);
	}
	
	/**
	 * 
	 * @return this is the total distance from origin to current destination;
	 * 
	 */
	public double distanceTraveled() {
		double totalDistance = 0;
		
		for (int i = 1; i < route.size(); i++){
			
			totalDistance += distance(route.get(i-1), route.get(i));
		}
		return totalDistance;
	}
	
	/**
	 * distance calculates the distance between two locations 
	 * @param origin is the first gps position
	 * @param destination is the last gps position
	 * @return this is the distance between two position
	 */
	private Double distance(GpsPosition origin, GpsPosition destination) {
		
		final int R = 6371; // radius of the earth
        double longitudeDistance = Math.toRadians(destination.getLongitude() - origin.getLongitude());
        double latitudeDistance = Math.toRadians(destination.getLatitude() - origin.getLatitude());
        double a = Math.pow(Math.sin(latitudeDistance / 2), 2)
                + Math.cos(Math.toRadians(origin.getLatitude())) * Math.cos(Math.toRadians(destination.getLatitude()))
                * Math.pow(Math.sin(longitudeDistance /2), 2);
        double distance = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        // Converting to Km by dividing by 1000
        double height = (origin.getElevation() - destination.getElevation()) / 1000;

        return Math.sqrt(Math.pow(distance, 2) + Math.pow(height, 2));
		
		
	}
	
	
	/**
	 * here we are reseting to the previous position by removing all other ones
	 */
	public void reset() {
		GpsPosition position = route.get(route.size()-1);
		
		route.clear();
		
		route.add(position);
	}
	
	/**
	 * this is our main method to catch errors
	 * @param args
	 */
	 public static void main(String[] args){
	        Result result = JUnitCore.runClasses(GpsPositionTest.class, GpsTest.class);

	        for (Failure failure : result.getFailures()) {
	            System.out.printf("Failed test: %s%n", failure.toString());
	        }

	        System.out.printf("Number of tests run: %d%n", result.getRunCount());
	        System.out.printf("Successful: %d%n", result.getRunCount() - result.getFailureCount());
	        System.out.printf("Failed: %d%n", result.getFailureCount());
	    }
	
}
