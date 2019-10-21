// Assignement 1410_Module03
// Program ExerciseGui
// Author Christian Makoma
// Created Oct 9, 2019


package module03;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JLabel;
import javax.swing.SwingConstants;
import java.awt.Font;
import java.awt.Color;
import java.awt.SystemColor;
import java.awt.GridLayout;
import java.awt.Image;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class ExerciseGui extends JFrame {

	private JPanel contentPane;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					ExerciseGui frame = new ExerciseGui();
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
	public ExerciseGui() {
		guiApplicationDesign();
		
		JPanel panel = new JPanel();
		panel.setBorder(new EmptyBorder(15, 15, 15, 15));
		contentPane.add(panel, BorderLayout.CENTER);
		
		Image img1 = new ImageIcon(this.getClass().getResource("/Republican-Logo-3.png")).getImage();
		Image img2 = new ImageIcon(this.getClass().getResource("/Democrat-Logo-2.png")).getImage();
		
		 
		JLabel lblRepublican = new JLabel("Republicans: 00");
	
		JButton button = new JButton("");
		button.addActionListener(new ActionListener() {
			Integer numR = new Integer(0);
			public void actionPerformed(ActionEvent e) {
				numR = new Integer(numR.intValue() + 1);
				if(numR < 10) {
					lblRepublican.setText("Republicans: 0"+ numR);
				}else if(numR < 100){
					lblRepublican.setText("Republicans: "+ numR);
				}
				
				
			}
		});
		panel.setLayout(new GridLayout(0, 2, 0, 0));
		button.setOpaque(true);
		button.setBackground(Color.GRAY);
		panel.add(button);
		button.setIcon(new ImageIcon(img1));
		
		
		JLabel lblDemocrats = new JLabel("Democrats: 00");
		
		JButton button_1 = new JButton("");
		button_1.addActionListener(new ActionListener() {
			Integer numD = new Integer(0);
			public void actionPerformed(ActionEvent e) {
				numD = new Integer(numD.intValue() + 1);
				if(numD < 10 ) {
					lblDemocrats.setText("Democrats: 0"+ numD);
				}else if(numD < 100){
					lblDemocrats.setText("Democrats: "+ numD);
				}
				
			}
		});
		button_1.setOpaque(true);
		button_1.setBackground(Color.GRAY);
		panel.add(button_1);
		button_1.setIcon(new ImageIcon(img2));
		
		JPanel panel_1 = new JPanel();
		contentPane.add(panel_1, BorderLayout.SOUTH);
		panel_1.setLayout(new GridLayout(0, 2, 0, 0));
		
		
		voteCounter(lblRepublican, lblDemocrats, panel_1);
		
		JLabel lblVote = new JLabel("V O T E");
		titleDesign(lblVote);
	}

	private void titleDesign(JLabel lblVote) {
		contentPane.add(lblVote, BorderLayout.NORTH);
		lblVote.setOpaque(true);
		lblVote.setBackground(Color.LIGHT_GRAY);
		lblVote.setForeground(Color.DARK_GRAY);
		lblVote.setFont(new Font("Lucida Grande", Font.BOLD, 26));
		lblVote.setHorizontalAlignment(SwingConstants.CENTER);
	}
		/**
		 * this is the main layout of the page
		 */
	private void guiApplicationDesign() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 350);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		contentPane.setLayout(new BorderLayout(8, 8));
		setContentPane(contentPane);
	}
		/**
		 * This is the voice counter design
		 * @param lblRepublican
		 * @param lblDemocrats
		 * @param panel_1
		 */
	private void voteCounter(JLabel lblRepublican, JLabel lblDemocrats, JPanel panel_1) {
		lblRepublican.setOpaque(true);
		lblRepublican.setBackground(Color.LIGHT_GRAY);
		lblRepublican.setForeground(Color.DARK_GRAY);
		lblRepublican.setFont(new Font("Courier", Font.BOLD, 18));
		lblRepublican.setHorizontalAlignment(SwingConstants.CENTER);
		panel_1.add(lblRepublican);
		
		
		lblDemocrats.setOpaque(true);
		lblDemocrats.setBackground(Color.LIGHT_GRAY);
		lblDemocrats.setForeground(Color.DARK_GRAY);
		lblDemocrats.setHorizontalAlignment(SwingConstants.CENTER);
		lblDemocrats.setFont(new Font("Courier", Font.BOLD, 18));
		panel_1.add(lblDemocrats);
	}

}
