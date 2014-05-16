package util; 

import java.util.LinkedList; 

public   class  Stack {
	
	private LinkedList<Object> data = 
			new LinkedList<Object>();

	

	private void  push__wrappee__master  (Object obj) {
		data.addFirst(obj);
	}

	

	public void push(Object obj) {
		push__wrappee__master(obj);
		count++;
	}

	
	private Object  pop__wrappee__master  () {
		return data.removeFirst();
	}

	
	public Object pop() {
		if(count > 0) {
			count--;
			return pop__wrappee__master(); 

		}
		else{
			System.out.println("Stack is empty");
			return null;

		}
	}

	
	private int count = 0;


}
