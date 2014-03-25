public   class  Hello {
	

	private void  print__wrappee__master  () {
		System.out.print("Hello");
	}

	

	private void  print__wrappee__beautiful  () {
		print__wrappee__master();
		System.out.print("beutiful");
	}

	

	protected void print() {
		print__wrappee__beautiful();
		System.out.print(" world");
	}

	

	public static void main(String[] args){
		new Main().print();
	}


}
