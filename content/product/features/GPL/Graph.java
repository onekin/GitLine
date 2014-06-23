package GPL; 
import java.util.LinkedList; 
import java.util.Iterator; 
import java.util.Collections; 
import java.util.Comparator; 

//dja: add for performance reasons
import java.util.HashMap; 
import java.util.Map; 

import java.lang.Integer; 

// **********************************************************************

public   class  Graph {
	
    private LinkedList vertices;

	
    private LinkedList edges;

	
    public static final boolean isDirected = false;

	

    //dja: add for performance reasons
    private Map verticesMap;

	


    public Graph() {
        vertices = new LinkedList();
        edges = new LinkedList();

	  //dja: add for performance reasons
        verticesMap = new HashMap( );

    }

	

    // Fall back method that stops the execution of programs
    private void  run__wrappee__testProg  ( Vertex s ) {}

	
    // Executes Number Vertices
    private void  run__wrappee__Number  ( Vertex s )
     {
       	System.out.println("Number");
        NumberVertices( );
        run__wrappee__testProg( s );
    }

	
    // Executes Connected Components
    private void  run__wrappee__connected  ( Vertex s )
    {
	     	System.out.println("Connected");
        ConnectedComponents( );
        run__wrappee__Number( s );
    }

	

    // Executes Cycle Checking
    private void  run__wrappee__Cycle  ( Vertex s )
     {
        System.out.println( "Cycle? " + CycleCheck() );
        run__wrappee__connected( s );
    }

	

    // Executes MSTKruskal
    public void run( Vertex s )
     {
     	System.out.println("MSTKruskal");
        Graph gaux = Kruskal();
//        Graph.stopProfile();
        gaux.display();
//        Graph.resumeProfile();
        run__wrappee__Cycle( s );
    }

	

    public void sortEdges(Comparator c) {
        Collections.sort(edges, c);
    }

	

    public void sortVertices(Comparator c) {
        Collections.sort(vertices, c);
    }

	

    // Adds an edge without weights if Weighted layer is not present
    public EdgeIfc addEdge(Vertex start,  Vertex end) {
        Edge theEdge = new  Edge();
        theEdge.EdgeConstructor( start, end );
        edges.add( theEdge );
        start.addNeighbor( new  Neighbor( end, theEdge ) );
        end.addNeighbor( new  Neighbor( start, theEdge ) );

        return theEdge;
    }

	

    protected void addVertex( Vertex v ) {
        vertices.add( v );

	  //dja: add for performance reasons
	  verticesMap.put( v.name, v );

    }

	

    // Finds a vertex given its name in the vertices list
    public  Vertex findsVertex( String theName ) {
        Vertex theVertex;

        // if we are dealing with the root
        if ( theName==null )
            return null;

	  //dja: removed for performance reasons
//        for( VertexIter vxiter = getVertices(); vxiter.hasNext(); )
//        {
//            theVertex = vxiter.next();
//            if ( theName.equals( theVertex.getName() ) )
//                return theVertex;
//        }
//        return null;

	  //dja: add for performance reasons
	  return ( Vertex ) verticesMap.get( theName );

    }

	


    public VertexIter getVertices() {
        return new VertexIter() {
                private Iterator iter = vertices.iterator();
                public Vertex next() { return (Vertex)iter.next(); }
                public boolean hasNext() { return iter.hasNext(); }
            };
    }

	

    public EdgeIter getEdges() {
        return new EdgeIter() {
                private Iterator iter = edges.iterator();
                public EdgeIfc next() { return (EdgeIfc)iter.next(); }
                public boolean hasNext() { return iter.hasNext(); }
            };
    }

	

    // Finds an Edge given both of its vertices
    public  EdgeIfc findsEdge( Vertex theSource,
                    Vertex theTarget )
       {
        EdgeIfc theEdge;

	  // dja: performance improvement
      //  for( EdgeIter edgeiter = getEdges(); edgeiter.hasNext(); )
        for( EdgeIter edgeiter = theSource.getEdges(); edgeiter.hasNext(); )
         {
            theEdge = edgeiter.next();
            if ( ( theEdge.getStart().getName().equals( theSource.getName() ) &&
                  theEdge.getEnd().getName().equals( theTarget.getName() ) ) ||
                 ( theEdge.getStart().getName().equals( theTarget.getName() ) &&
                  theEdge.getEnd().getName().equals( theSource.getName() ) ) )
                return theEdge;
        }
        return null;
    }

	

    public void display() {
        System.out.println( "******************************************" );
        System.out.println( "Vertices " );
        for ( VertexIter vxiter = getVertices(); vxiter.hasNext() ; )
            vxiter.next().display();

        System.out.println( "******************************************" );
        System.out.println( "Edges " );
        for ( EdgeIter edgeiter = getEdges(); edgeiter.hasNext(); )
            edgeiter.next().display();

        System.out.println( "******************************************" );
    }

	

    public void NumberVertices( ) 
    {
        GraphSearch( new NumberWorkSpace( ) );
    }

	

    public void ConnectedComponents( ) 
    {
        GraphSearch( new RegionWorkSpace( ) );
    }

	
              
    public boolean CycleCheck() {
        CycleWorkSpace c = new CycleWorkSpace( isDirected );
        GraphSearch( c );
        return c.AnyCycles;
    }

	

    public  Graph Kruskal() {

        // 1. A <- Empty set
        LinkedList A = new LinkedList();

        // 2. for each vertex v E V[G]
        // 3.    do Make-Set(v)

        for ( VertexIter vxiter = getVertices(); vxiter.hasNext(); )
        {
            Vertex v = vxiter.next();
            v.representative = v; // I am in my set
            v.members = new LinkedList(); // I have no members in my set
        }

        // 4. sort the edges of E by nondecreasing weight w
        // Creates the edges objects
        //int j;
        LinkedList Vneighbors = new LinkedList();
        //Vertex u;

        // Sort the Edges in non decreasing order
        sortEdges(
            new Comparator() {
                public int compare( Object o1, Object o2 )
                 {
                Edge e1 = ( Edge )o1;
                Edge e2 = ( Edge )o2;
                if ( e1.getWeight() < e2.getWeight() )
                    return -1;
                if ( e1.getWeight() == e2.getWeight() )
                    return 0;
                return 1;
                }
        } );

        // 5. for each edge in the nondecresing order
        Vertex vaux, urep, vrep;

        for( EdgeIter edgeiter = getEdges(); edgeiter.hasNext(); )
        {
            // 6. if Find-Set(u)!=Find-Set(v)
            EdgeIfc e1 = edgeiter.next();
            Vertex u = e1.getStart();
            Vertex v = e1.getEnd();

            if ( ! ( v.representative.getName() ).equals( u.representative.getName() ) )
              {
                // 7. A <- A U {(u,v)}
                A.add( e1 );

                // 8. Union(u,v)
                urep = u.representative;
                vrep = v.representative;

                if ( ( urep.members ).size() > ( vrep.members ).size() )
                    { // we add elements of v to u
                    for( int j=0; j< ( vrep.members ).size(); j++ )
                          {
                        vaux = ( Vertex ) ( vrep.members ).get( j );
                        vaux.representative = urep;
                        ( urep.members ).add( vaux );
                    }
                    v.representative = urep;
                    vrep.representative = urep;
                    ( urep.members ).add( v );
                    if ( !v.equals( vrep ) )
                        ( urep.members ).add( vrep );
                    ( vrep.members ).clear();
                }
                else
                     { // we add elements of u to v
                    for( int j=0; j< ( urep.members ).size(); j++ )
                           {
                        vaux = ( Vertex ) ( urep.members ).get( j );
                        vaux.representative = vrep;
                        ( vrep.members ).add( vaux );
                    }
                    u.representative = vrep;
                    urep.representative = vrep;
                    ( vrep.members ).add( u );
                    if ( !u.equals( urep ) )
                        ( vrep.members ).add( urep );
                    ( urep.members ).clear();

                } // else

            } // of if

        } // of for numedges

        // 9. return A
        // Creates the new Graph that contains the SSSP
        String theName;
        Graph newGraph = new  Graph();

        // Creates and adds the vertices with the same name
        for ( VertexIter vxiter = getVertices(); vxiter.hasNext(); )
      {
            theName = vxiter.next().getName();
            newGraph.addVertex( new  Vertex().assignName( theName ) );
        }

        // Creates the edges from the NewGraph
        Vertex theStart, theEnd;
        Vertex theNewStart, theNewEnd;
        EdgeIfc   theEdge;

        // For each edge in A we find its two vertices
        // make an edge for the new graph from with the correspoding
        // new two vertices
        for( int i=0; i<A.size(); i++ )
       {
            // theEdge with its two vertices
            theEdge = ( Edge )A.get( i );
            theStart = theEdge.getStart();
            theEnd = theEdge.getEnd();

            // Find the references in the new Graph
            theNewStart = newGraph.findsVertex( theStart.getName() );
            theNewEnd = newGraph.findsVertex( theEnd.getName() );

            // Creates the new edge with new start and end vertices
            // in the newGraph
            // and ajusts the adorns based on the old edge
            // Adds the new edge to the newGraph
            // dja - the fix below fixes a bug where the proper adjust adorns gets called
//            EdgeIfc theNewEdge = newGraph.addEdge( theNewStart, theNewEnd );
//            theNewEdge.adjustAdorns( theEdge );
            Edge theNewEdge = ( Edge ) newGraph.addEdge( theNewStart, theNewEnd );
            theNewEdge.adjustAdorns( ( Edge )  theEdge );
        }
        return newGraph;

    }

	
    public void GraphSearch( WorkSpace w ) 
    {
        // Step 1: initialize visited member of all nodes
        VertexIter vxiter = getVertices( );
        if ( vxiter.hasNext( ) == false )
        {
            return; // if there are no vertices return
        }

        // Initializing the vertices
        while( vxiter.hasNext( ) ) 
        {
            Vertex v = vxiter.next( );
            v.init_vertex( w );
        }

        // Step 2: traverse neighbors of each node
        for( vxiter = getVertices( ); vxiter.hasNext( ); ) 
        {
            Vertex v = vxiter.next( );
            if ( !v.visited ) 
            {
                w.nextRegionAction( v );
                v.nodeSearch( w );
            }
        } 
    }


}
