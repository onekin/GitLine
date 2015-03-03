package util;

public class Main{
	
	public static void main(String[] args){
		Stack st=new Stack();
		
		for (int i=0;i<100; i++){
			st.push(i);
		}
		
		for(int j=0; j<100; j++){
			System.out.println(st.pop().toString());
		}
			
		
	}
	
}