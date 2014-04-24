package util;

import java.util.LinkedList;
//Base feature
public class Stack {
	private LinkedList<Object> data = 
			new LinkedList<Object>();

	public void push(Object obj) {
		data.addFirst(obj);
	}
	public Object pop() {
		return data.removeFirst();
	}
	//PRUEBA;  
}