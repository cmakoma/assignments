// Assignement Module01Quiz
// Program Module01
// Author Christian Makoma
// Created Sep 11, 2019


package m01;

import java.util.ArrayList;
import java.util.Scanner;


/**
 * Module01
 * 
 * @author christianMakoma
 * 
 * this class will conCat a word with it's reverse in 
 * the beginning 
 *
 */
public class Module01 {
	
	
	public static void main(String[] args) {
		System.out.println("type your word");
		String wordin = new Scanner(System.in).nextLine();
		
		transform(wordin);

	}
	
	
	/**
	 * Transform
	 * 
	 * transform is method will conCat a word with it's reverse in 
	 * the beginning
	 * 
	 * @param word
	 */
	
	
	public static String transform (String word) {
		
		word = word.toLowerCase().replaceAll("'", "").replaceAll("-", "");
		
		
		
		if(word.charAt(0) == 'a' || word.charAt(0) == 'b') {
			word = word.substring(0,1).toUpperCase() + word.substring(1);
		}
		
		
		if(word.charAt(word.length() - 1) == 'y' || word.charAt(word.length()-1) == 'z') {
			word = word.substring(0,word.length() - 1)+ word.substring(word.length()-1,word.length()).toUpperCase();
		}
		
		
		
		StringBuilder sb = new StringBuilder();
		
		
		for(int i = word.length()-1; i >= 0; i--) {
			
			
			sb.append(word.charAt(i));
			
			System.out.print(word.charAt(i));
			
				
			}
		
		
		
		return word == "null" ? "null" : sb + "_" + word;
	}
	}

