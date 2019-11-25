// Assignement 1410_Module05
// Program Pattern1
// Author Christian Makoma
// Created Nov 13, 2019


package m05;
/**
 * 
 * @author christianmakoma
 * this Class will creates Pattern1 
 *
 */
public class Pattern1 {
	private final String name;
	public Pattern1(String n)
    {
        name = n;
    }

    public String getName() {
        return name;
    }
    
    /**
     * this method recreate the new String that will mirror on the
     * x-axis
     */
    @Override
    public String toString() {
        return name + new StringBuilder(name).reverse().toString();
    }
}
