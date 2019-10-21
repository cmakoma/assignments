// Assignement LabBalloon
// Program BalloonApp
// Author Christian Makoma
// Created Oct 9, 2019


package labBalloon;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JLabel;
import java.awt.Font;
import javax.swing.SwingConstants;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JTextArea;
import java.awt.GridLayout;
import java.awt.Image;
import java.awt.event.ActionListener;
import java.util.Random;
import java.awt.event.ActionEvent;
import javax.swing.JTextPane;
import java.awt.Dimension;

public class BalloonApp extends JFrame {

	private JPanel contentPane;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					BalloonApp frame = new BalloonApp();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public BalloonApp() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		contentPane.setLayout(new BorderLayout(0, 0));
		setContentPane(contentPane);
		
		JLabel lblLabBalloon = new JLabel("Lab Balloon");
		lblLabBalloon.setHorizontalAlignment(SwingConstants.CENTER);
		lblLabBalloon.setFont(new Font("Lucida Grande", Font.PLAIN, 25));
		contentPane.add(lblLabBalloon, BorderLayout.NORTH);
		
		JPanel panel = new JPanel();
		panel.setBorder(new EmptyBorder(20, 20, 20, 20));
		panel.setBackground(Color.WHITE);
		contentPane.add(panel, BorderLayout.CENTER);
		panel.setLayout(new GridLayout(0, 2, 0, 0));
		
		JLabel label = new JLabel("");
		label.setBorder(null);
		label.setHorizontalAlignment(SwingConstants.CENTER);
		panel.add(label);
		
		JLabel label_1 = new JLabel("");
		label_1.setBorder(null);
		label_1.setHorizontalAlignment(SwingConstants.CENTER);
		panel.add(label_1);
		
		JLabel lblNewLabel = new JLabel("");
		lblNewLabel.setMaximumSize(new Dimension(0, 20));
		lblNewLabel.setHorizontalTextPosition(SwingConstants.CENTER);
		lblNewLabel.setHorizontalAlignment(SwingConstants.CENTER);
		lblNewLabel.setBackground(Color.WHITE);
		panel.add(lblNewLabel);
		
		JLabel lblNewLabel_1 = new JLabel("");
		lblNewLabel_1.setBackground(Color.WHITE);
		lblNewLabel_1.setHorizontalAlignment(SwingConstants.CENTER);
		panel.add(lblNewLabel_1);
		
		JPanel panel_1 = new JPanel();
		contentPane.add(panel_1, BorderLayout.SOUTH);
		
		JLabel label_2 = new JLabel("");
		label_2.setOpaque(true);
		label_2.setHorizontalAlignment(SwingConstants.CENTER);
		
		
		Random rand = new Random();
		Image img1 = new ImageIcon(this.getClass().getResource("/balloon20.jpg")).getImage();
		Image img2 = new ImageIcon(this.getClass().getResource("/balloon40.jpg")).getImage();
		Image img3 = new ImageIcon(this.getClass().getResource("/balloon60.jpg")).getImage();
		Image img4 = new ImageIcon(this.getClass().getResource("/balloon80.jpg")).getImage();
		Image img5 = new ImageIcon(this.getClass().getResource("/balloon100 (1).jpg")).getImage();
		
		
		JButton btnGet = new JButton("Get Random Balloon");
		btnGet.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				
				
				int n1 = rand.nextInt(999)%5+1;
				int n2 = rand.nextInt(999)%5+1;
				
				boolean bool1 = rand.nextBoolean();
				boolean bool2 = rand.nextBoolean();
				
				Size size1;
				Size size2;
				
				if(n1 == 1) {
					size1 = Size.XS;
					label.setIcon(new ImageIcon(img1));
					if(bool1) {
						lblNewLabel.setText("XS helium");
						} else{
						lblNewLabel.setText("XS air");}
					
				}else if(n1 == 2) {
					size1 = Size.S;
					label.setIcon(new ImageIcon(img2));
					if(bool1) {
						lblNewLabel.setText("S helium");
						} else{
						lblNewLabel.setText("S air");}
					
				}else if(n1 == 3) {
					size1 = Size.M;
					label.setIcon(new ImageIcon(img3));
					if(bool1) {
						lblNewLabel.setText("M helium");
						} else{
						lblNewLabel.setText("M air");}
				}else if(n1 == 4) {
					size1 = Size.L;
					label.setIcon(new ImageIcon(img4));
					if(bool1) {
						lblNewLabel.setText("L helium");
						} else{
						lblNewLabel.setText("L air");}
				}else  {
					size1 = Size.XL;
					label.setIcon(new ImageIcon(img5));
					if(bool1) {
						lblNewLabel.setText("XL helium");
						} else{
						lblNewLabel.setText("XL air");}
				}
				
				
				if(n2 == 1) {
					size2 = Size.XS;
					label_1.setIcon(new ImageIcon(img1));
					if(bool2) {
						lblNewLabel_1.setText("XS helium");
						} else{
						lblNewLabel_1.setText("XS air");}
				}else if(n2 == 2) {
					size2 = Size.S;
					label_1.setIcon(new ImageIcon(img2));
					if(bool2) {
						lblNewLabel_1.setText("S helium");
						} else{
						lblNewLabel_1.setText("S air");}
				}else if(n2 == 3) {
					size2 = Size.M;
					label_1.setIcon(new ImageIcon(img3));
					if(bool2) {
						lblNewLabel_1.setText("M helium");
						} else{
						lblNewLabel_1.setText("M air");}
				}else if(n2 == 4) {
					size2 = Size.L;
					label_1.setIcon(new ImageIcon(img4));
					if(bool2) {
						lblNewLabel_1.setText("L helium");
						} else{
						lblNewLabel_1.setText("L air");}
				}else  {
					size2 = Size.XL;
					label_1.setIcon(new ImageIcon(img5));
					if(bool2) {
						lblNewLabel_1.setText("XL helium");
						} else{
						lblNewLabel_1.setText("XL air");}
				}
				
				
				
				Balloon b1 = new Balloon(size1, bool1);
				Balloon b2 = new Balloon(size2, bool2);
				
				if(b1.equals(b2)) {
					label_2.setText("Balloons are equal");
					label_2.setBackground(Color.GREEN);
				}else {
					label_2.setText("Balloons are not equal");
					label_2.setBackground(Color.RED);

				}
		
			}
		});
		panel_1.add(btnGet);
		panel_1.add(label_2);
		
		
	}

}
