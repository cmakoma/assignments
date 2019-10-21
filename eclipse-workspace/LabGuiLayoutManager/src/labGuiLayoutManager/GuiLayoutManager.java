// Assignement LabGuiLayoutManager
// Program GuiLayoutManager
// Author Christian Makoma
// Created Oct 8, 2019


package labGuiLayoutManager;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JLabel;
import java.awt.Font;
import javax.swing.SwingConstants;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import net.miginfocom.swing.MigLayout;
import javax.swing.GroupLayout;
import javax.swing.GroupLayout.Alignment;
import javax.swing.LayoutStyle.ComponentPlacement;
import java.awt.Color;
import java.awt.GridLayout;
import javax.swing.border.BevelBorder;
import java.awt.Component;

public class GuiLayoutManager extends JFrame {

	private JPanel contentPane;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					GuiLayoutManager frame = new GuiLayoutManager();
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
	public GuiLayoutManager() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		contentPane.setLayout(new BorderLayout(0, 0));
		setContentPane(contentPane);
		
		JLabel lblDemoLayout = new JLabel("Demo Layout");
		lblDemoLayout.setHorizontalAlignment(SwingConstants.CENTER);
		lblDemoLayout.setFont(new Font("Lucida Grande", Font.PLAIN, 25));
		contentPane.add(lblDemoLayout, BorderLayout.NORTH);
		
		JPanel panel = new JPanel();
		contentPane.add(panel, BorderLayout.WEST);
		
		JLabel label_1 = new JLabel("2");
		JButton label = new JButton("1");
		JLabel label_3 = new JLabel("3");
		JLabel label_2 = new JLabel("4");
		
		JButton button = new JButton("<==");
		button.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				if(label_1.getBackground().equals(Color.BLUE)) {
					label_1.setBackground(Color.YELLOW);
					label.setBackground(Color.BLUE);
				}else if(label.getBackground().equals(Color.BLUE)) {
					label.setBackground(Color.YELLOW);
					label_2.setBackground(Color.BLUE);
				}else if(label_2.getBackground().equals(Color.BLUE)) {
					label_2.setBackground(Color.YELLOW);
					label_3.setBackground(Color.BLUE);
				}else if (label_3.getBackground().equals(Color.BLUE)) {
					label_3.setBackground(Color.YELLOW);
					label_1.setBackground(Color.BLUE);
				}
			}
		});
		
		JButton button_1 = new JButton("==>");
		button_1.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				if(label_1.getBackground().equals(Color.BLUE)) {
					label_1.setBackground(Color.YELLOW);
					label_3.setBackground(Color.BLUE);
				}else if(label_3.getBackground().equals(Color.BLUE)) {
					label_3.setBackground(Color.YELLOW);
					label_2.setBackground(Color.BLUE);
				}else if(label_2.getBackground().equals(Color.BLUE)) {
					label_2.setBackground(Color.YELLOW);
					label.setBackground(Color.BLUE);
				}else if (label.getBackground().equals(Color.BLUE)) {
					label.setBackground(Color.YELLOW);
					label_1.setBackground(Color.BLUE);
				}
			}
		});
		GroupLayout gl_panel = new GroupLayout(panel);
		gl_panel.setHorizontalGroup(
			gl_panel.createParallelGroup(Alignment.LEADING)
				.addGroup(gl_panel.createSequentialGroup()
					.addContainerGap()
					.addGroup(gl_panel.createParallelGroup(Alignment.LEADING)
						.addComponent(button)
						.addComponent(button_1))
					.addContainerGap(GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
		);
		gl_panel.setVerticalGroup(
			gl_panel.createParallelGroup(Alignment.LEADING)
				.addGroup(gl_panel.createSequentialGroup()
					.addGap(70)
					.addComponent(button)
					.addPreferredGap(ComponentPlacement.RELATED)
					.addComponent(button_1)
					.addContainerGap(103, Short.MAX_VALUE))
		);
		panel.setLayout(gl_panel);
		
		JPanel panel_1 = new JPanel();
		panel_1.setBorder(new EmptyBorder(10, 10, 10, 10));
		contentPane.add(panel_1, BorderLayout.CENTER);
		panel_1.setLayout(new GridLayout(0, 4, 15, 0));
		
		
		label.setBorder(new EmptyBorder(10, 10, 10, 20));
		label.setAlignmentX(Component.CENTER_ALIGNMENT);
		label.setBackground(Color.YELLOW);
		label.setOpaque(true);
		label.setFont(new Font("Lucida Grande", Font.PLAIN, 60));
		label.setHorizontalAlignment(SwingConstants.CENTER);
		panel_1.add(label);
		
		
		label_1.setBorder(new EmptyBorder(10, 10, 10, 10));
		label_1.setOpaque(true);
		label_1.setHorizontalAlignment(SwingConstants.CENTER);
		label_1.setFont(new Font("Lucida Grande", Font.PLAIN, 60));
		label_1.setBackground(Color.BLUE);
		panel_1.add(label_1);
		
		
		label_3.setBorder(new EmptyBorder(10, 10, 10, 10));
		label_3.setOpaque(true);
		label_3.setHorizontalAlignment(SwingConstants.CENTER);
		label_3.setFont(new Font("Lucida Grande", Font.PLAIN, 60));
		label_3.setBackground(Color.YELLOW);
		panel_1.add(label_3);
		
		
		label_2.setBorder(new EmptyBorder(10, 10, 10, 10));
		label_2.setOpaque(true);
		label_2.setHorizontalAlignment(SwingConstants.CENTER);
		label_2.setFont(new Font("Lucida Grande", Font.PLAIN, 60));
		label_2.setBackground(Color.YELLOW);
		panel_1.add(label_2);
	}
}
