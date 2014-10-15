package util; 

import java.util.LinkedList; 

public   class  Stack {
	
	//linea arriba
	private LinkedList<Object> data = new LinkedList<Object>();

	
	private void  push__wrappee__base  (Object obj) {
		data.addFirst(obj);
	}

	
	
	public void push(Object obj) {
		push__wrappee__base(obj);
		count++;
	}

	
	private Object  pop__wrappee__base  () {
		return data.removeFirst();
	}

	
	
	public Object pop() {
		if(count > 0) {
			count--;
			return pop__wrappee__base(); // calling the overriden method
		}
		else
			return null;
	}

	
	private int count = 0;


}
