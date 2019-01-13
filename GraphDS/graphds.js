/* In this file we'll look at how a simple graph data structure can be assembled in JavaScript. 
First, it's important to understand that a graph is a structure comprised of vertices (nodes) where
data is stored, and edges (connections) that connect the nodes. A graph's malleable structure makes it
very useful in certain scenarios, such as plotting the path for a user on Google Maps, or representing
the relationships between various users on a website like Facebook. In this example imagine The Boring
Company has built many single-bore tunnels that connect to one another. The nodes will be stations,
and edges will be their routes. This will theoretically allow for us to determine pathing. With the
addition of edges, we could employ an algorithm such as Dijkstra's to determine the shortest path
between two nodes. */
class Graph {
    constructor() {
        this.vertices = []; // This will house the various vertices containing data.
    }

    // Check if the graph contains the passed-in vertex.
    exists(node) {
        return !!this.vertices[node];
    }
}

// Instantiate a graph.
let boringTunnelGraph = new Graph();