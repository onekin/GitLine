package util;

import java.util.LinkedList;
//nueva linea local
public class Stack {
	//linea arriba
	private LinkedList<Object> data = new LinkedList<Object>();
	public void push(Object obj) {
		data.addFirst(obj);
	}
	public Object pop() {
		return data.removeFirst();
	}

	//nueva linea1
	//nueva linea2
	//linea desde github
	//nueva linea github
}
 
