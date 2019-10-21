// Assignement LabIntoToGui
// Program IntrotoGUI
// Author Christian Makoma
// Created Oct 8, 2019


package labIntoToGui;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JLabel;
import javax.swing.SwingConstants;
import java.awt.Font;
import java.awt.Color;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import java.awt.Dimension;
import javax.swing.JTextArea;

public class IntrotoGUI extends JFrame {

	private JPanel contentPane;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					IntrotoGUI frame = new IntrotoGUI();
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
	public IntrotoGUI() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		contentPane.setLayout(new BorderLayout(0, 0));
		setContentPane(contentPane);
		
		JLabel lblMyFirstGui = new JLabel("My First Gui");
		lblMyFirstGui.setOpaque(true);
		lblMyFirstGui.setBackground(Color.BLUE);
		lblMyFirstGui.setForeground(Color.GREEN);
		lblMyFirstGui.setFont(new Font("Lucida Grande", Font.PLAIN, 33));
		lblMyFirstGui.setHorizontalAlignment(SwingConstants.CENTER);
		contentPane.add(lblMyFirstGui, BorderLayout.NORTH);
		
		JButton btnWest = new JButton("WEST");
		btnWest.setOpaque(true);
		btnWest.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
			}
		});
		btnWest.setBackground(Color.GRAY);
		contentPane.add(btnWest, BorderLayout.WEST);
		
		JPanel panel = new JPanel();
		panel.setBackground(Color.GRAY);
		panel.setMinimumSize(new Dimension(80, 80));
		contentPane.add(panel, BorderLayout.SOUTH);
		
		JLabel lblName = new JLabel("Name:");
		lblName.setFont(new Font("Lucida Grande", Font.PLAIN, 16));
		panel.add(lblName);
		
		JTextArea textArea = new JTextArea();
		textArea.setFont(new Font("Lucida Grande", Font.PLAIN, 16));
		textArea.setColumns(16);
		textArea.setTabSize(16);
		textArea.setMinimumSize(new Dimension(16, 16));
		panel.add(textArea);
		
		JLabel lblHi = new JLabel("HI");
		lblHi.setOpaque(true);
		lblHi.setBackground(Color.RED);
		lblHi.setHorizontalAlignment(SwingConstants.CENTER);
		lblHi.setForeground(Color.ORANGE);
		lblHi.setFont(new Font("Papyrus", Font.PLAIN, 77));
		contentPane.add(lblHi, BorderLayout.CENTER);
	}

}
