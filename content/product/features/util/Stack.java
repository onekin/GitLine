package util; 

import java.util.LinkedList; 
//nueva linea local
public   class  Stack {
	
	//linea arriba
	private LinkedList<Object> data  = new LinkedList<Object>();

	
	private void  push__wrappee__base  (Object obj) {
		data.addFirst(obj);
	}

	
	public void push  (Object obj) {
		data.addFirst(obj);
	}

	
	private Object  pop__wrappee__base  () {
		return data.removeFirst();
	}

	
	public Object pop  () {
		return data.removeFirst();
	}

	
	private int count = 0;


}
