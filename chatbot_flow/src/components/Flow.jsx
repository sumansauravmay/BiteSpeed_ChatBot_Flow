import React, { useState, useRef, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
} from "reactflow";
import "reactflow/dist/style.css";
import NodesPanel from "./NodesPanel";
import "./index.css";

const getId = () => `dndnode_${Date.now()}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  //   console.log("nodes", nodes)

  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  //   console.log("edges", edges);

  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  //   console.log("reactFlowInstance", reactFlowInstance)

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type}` },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance],
    console.log("nodes", nodes),
    console.log("edges", edges),
    localStorage.setItem("node", JSON.stringify(nodes.length)),
    localStorage.setItem("edge", JSON.stringify(edges.length))
  );

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <NodesPanel />
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
          >
            <Controls />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;
