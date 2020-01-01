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
    return Boolean(this.vertices[node]);
  }

  // Add a new vertex to the array with no edges.
  addVertex(node) {
    if (!this.exists(node)) {
      this.vertices[node] = { edges: {} };
    }
  }

  // Locate a vertex and remove all its connections before removing the vertex.
  removeVertex(node) {
    if (this.exists(node)) {
      for (let connection in this.vertices[node].edges) {
        this.removeEdge(node, connection);
      }
      delete this.vertices[node];
    }
  }

  // Add an edge between two passed-in vertices.
  addEdge(nodeA, nodeB) {
    if (this.exists(nodeA) && this.exists(nodeB)) {
      this.vertices[nodeA].edges[nodeB] = true;
      this.vertices[nodeB].edges[nodeA] = true;
    }
  }

  // Remove an edge between two passed-in vertices.
  removeEdge(nodeA, nodeB) {
    if (this.exists(nodeA) && this.exists(nodeB)) {
      delete this.vertices[nodeA].edges[nodeB];
      delete this.vertices[nodeB].edges[nodeA];
    }
  }
}

/* Here, we will instantiate a graph, add verteces to it, remove a vertex, add an edge between verteces 
with ID of 71 and 73 before logging the value of vertex 73. We will then remove vertex 71 and output
vertex 73's value to indicate that its connection to the now non-existent index 71 has been deleted. */
let boringTunnelGraph = new Graph();
boringTunnelGraph.addVertex(71);
boringTunnelGraph.addVertex(72);
boringTunnelGraph.addVertex(73);
boringTunnelGraph.removeVertex(72);
boringTunnelGraph.addEdge(71, 73);
console.log(boringTunnelGraph.vertices[73]);
boringTunnelGraph.removeVertex(71);
console.log(boringTunnelGraph.vertices[73]);
