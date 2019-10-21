package labBuilding;

import java.awt.Color;
import java.awt.Graphics;

import javax.swing.JPanel;

import java.util.Random;


@SuppressWarnings("serial")
public class Building extends JPanel {
	
	@Override
	protected void paintComponent(Graphics g) {
		super.paintComponent(g);
		

        int color1,color2,color3,color4;

        for (int j = 0; j < 1000; j +=50) {
            g.fillRect(0, 0, 50, 50);
            for (int i = 0; i < 1000; i += 50) {
                g.fillRect(i, j, 50, 50);
                color1 = (int) (Math.random() * 256);
                color2 = (int) (Math.random() * 256);
                color3 = (int) (Math.random() * 256);
                color4 = (int) (Math.random() * 256);
                
                Color randomColor = new Color(color1,color2,color3,color4);
                g.setColor(randomColor);
            }
        }
		
	}

}
