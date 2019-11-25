// Assignement 1410_A04_Inheritance
// Program InheritanceApp
// Author Christian Makoma
// Created Nov 25, 2019

public class InheritanceApp {

	public static void main(String[] args) {
		Rectangle myRectangle = new Rectangle(5,4);
		Square mySquare = new Square(4);
		IsoscelesRightTriangle myIsoscelesRightTriangle = new IsoscelesRightTriangle(5);
		Circle myCircle = new Circle(4);
		
		
		System.out.println(myRectangle.toString());
		System.out.println("Length: " + myRectangle.getLength());
		System.out.println("Width: " + myRectangle.getWidth());
		System.out.println();
		
		System.out.println(mySquare.toString());
		System.out.println("Side: " + mySquare.getSide());
		System.out.println();
		
		System.out.println(myIsoscelesRightTriangle.toString());
		System.out.println("leg: " + myIsoscelesRightTriangle.getLeg());
		System.out.println("Hypotenuse: " + myIsoscelesRightTriangle.hypotenuse(7.1));
		System.out.println();
		
		System.out.println(myCircle.toString());
		System.out.println("Diameter: " + myCircle.diameter(4));
		System.out.printf("Area: %.1f\n", myCircle.circumference());
		System.out.println("Radius: " + myCircle.getRadius());
		System.out.println();
		
		Rectangle rectangle2 = mySquare;
		
		System.out.println("rectangle2:");
		System.out.println("-----------");
		System.out.println(rectangle2);
		System.out.println("Length: " + rectangle2.getLength());
		System.out.println("Width: " + rectangle2.getWidth());
		System.out.println();
		
		System.out.println("Rectangle Array:");
		System.out.println("----------------");
		Rectangle[] rectangles = {rectangle2, mySquare, myRectangle};
		for (Rectangle r: rectangles) {
			System.out.println(r.toString());
			System.out.println("Length: " + r.getLength());
			System.out.println("Width: " + r.getWidth());
			System.out.println();
		}
	}

}
