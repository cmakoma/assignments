// Assignement 1410_Module05
// Program Pattern2
// Author Christian Makoma
// Created Nov 13, 2019


package m05;
/**
 * 
 * @author christianmakoma
 * this Class will creates Pattern2 
 *
 */

public class Pattern2 {
	private final String name;
	public Pattern2(String n)
    {
        name = n;
    }

    public String getName() {
        return name;
    }
    
    /**
     * no need to reverse this method, the y-axis mirroring
     * is will be done in the main method
     */
    @Override
    public String toString() {
    	return name;
    }
}
