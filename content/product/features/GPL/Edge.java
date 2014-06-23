package GPL; 

import java.util.LinkedList; 

// *************************************************************************

public   class  Edge  extends Neighbor  implements EdgeIfc {
	
    public Vertex start;

	

    public void EdgeConstructor( Vertex the_start, Vertex the_end )
    {
        start = the_start;
        end = the_end;
    }

	

    private void  adjustAdorns__wrappee__DFS  ( EdgeIfc the_edge ) 
    {
    }

	

    // Constructor Loophole removed
    // public void EdgeConstructor($TEqn.Vertex the_start,
    //                    $TEqn.Vertex the_end) {
    // Super($TEqn.Vertex, $TEqn.Vertex).EdgeConstructor(the_start,the_end);
    // }

    public void adjustAdorns( EdgeIfc the_edge ) {
        setWeight(the_edge.getWeight());
        adjustAdorns__wrappee__DFS( the_edge );
    }

	

    public void setWeight  (int weight)
    {
        this.weight = weight;
    }

	

    public int getWeight  ()
    {
        return this.weight;
    }

	

    public Vertex getOtherVertex( Vertex vertex )
    {
        if( vertex == start )
        { 
            return end;
        }
        else if(vertex == end)
        { 
            return start;
        }
        else
        { 
            return null;
        }
    }

	

    public Vertex getStart( )
    {
        return start;
    }

	

    public Vertex getEnd( )
    {
        return end;
    }

	

    private void  display__wrappee__DFS  ( ) 
    {
        System.out.println( " start=" + start.getName() + " end=" + end.getName( ) );
    }

	

    public void display() {
        System.out.print( " Weight=" + weight );
        display__wrappee__DFS();
    }

	
    private int weight;

	

    public void EdgeConstructor( Vertex the_start,  Vertex the_end,
                int the_weight ) {
        EdgeConstructor( the_start,the_end );
        weight = the_weight;
    }


}
