// Assignement 1410Gps
// Program GpsPosition
// Author Christian Makoma
// Created Nov 24, 2019


package gps;

/**
 * 
 * @author ChristianMakoma
 * this class will check the accuracy of coordinate and generates all getters 
 * and String format;
 * 
 */

public class GpsPosition {
	/**
	 * GpsPosition creates an object with 3 parameters
	 * @param la double value to initialize latitude
	 * @param lo double value to initialize longitude
	 * @param el double value to initialize elevation
	 * 
	 * @throws IllegalArgumentException - checks for out of range inputs from calling methods
	 */
	private double latitude, longitude, elevation;
	
	public GpsPosition(double la,double lo,double el) {
		  if (la < -90 || la > 90 ){
	            throw new IllegalArgumentException("Invalid Latitude");
	        }
		  	else if (lo < -180 || lo > 180) {
		  		throw new IllegalArgumentException("Invalid Longitude");
		  	}
			else if (el < 0){
	            throw new IllegalArgumentException("Invalid Elevation");
	        }else {
	            this.latitude = la;
	            this.longitude = lo;
	            this.elevation = el;
	        }
	}

	public double getLatitude() {
		return latitude;
	}

	public double getLongitude() {
		return longitude;
	}

	public double getElevation() {
		return elevation;
	}
	
	@Override
	public String toString() {
		
		return String.format("%.6f, %.6f (%.1f)", latitude, longitude, elevation);
	}
}
