from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict, Any
import networkx as nx

app = FastAPI()

class Node(BaseModel):
    id: str
    data: Dict[str, Any]
    type: str
    position: Dict[str, float]

class Edge(BaseModel):
    id: str
    source: str
    target: str
    type: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    # Create a directed graph using networkx
    G = nx.DiGraph()

    # Add nodes
    for node in pipeline.nodes:
        G.add_node(node.id)

    # Add edges
    for edge in pipeline.edges:
        G.add_edge(edge.source, edge.target)

    # Check if the graph is a DAG
    is_dag = nx.is_directed_acyclic_graph(G)

    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}
