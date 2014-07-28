package util;

public class Stack {
	private int count = 0;
	public void push(Object obj) {
		original(obj);
		count++;
	}
	public Object pop() {
		if(count > 0) {
			count--;
			return original();
		}
		else{ 
			System.out.println("Estack is empty");
			return null;
		}
	}
	
}
