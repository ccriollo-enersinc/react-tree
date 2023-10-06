import React, { useRef } from "react";
import Tree from "react-d3-tree";

const data = {
  name: "Root", // Nodo raíz
  children: [
    {
      name: "Child 1",
      customValue: "Valor personalizado 1",
    },
    {
      name: "Child 2",
      customValue: "Valor personalizado 2",
    },
    {
      name: "Child 1",
      customValue: "Valor personalizado 3",
    },
    {
      name: "Child 2",
      customValue: "Valor personalizado 4",
    },
    {
      name: "Child 1",
      customValue: "Valor personalizado 5",
    },
    {
      name: "Child 2",
      customValue: "Valor personalizado 6",
    },
  ],
};

const SimpleTreeWithCustomValues = () => {
  const nodeRef = useRef(null);

  const renderCustomNode = ({ nodeDatum }) => {
    // Actualiza la referencia al objeto nodeDatum
    nodeRef.current = nodeDatum;

    return (
      <g>
        <circle r={10} fill="lightblue" />
        <text y={-25} textAnchor="middle" style={{ fontSize: "12px" }}>
          {nodeRef.current.name}
        </text>
        <text y={0} textAnchor="middle" style={{ fontSize: "12px" }}>
          {nodeRef.current.customValue}
        </text>
      </g>
    );
  };

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Tree
        data={data}
        orientation="vertical"
        renderCustomNode={renderCustomNode}
        translate={{ x: 250, y: 50 }}
      />
    </div>
  );
};

export default SimpleTreeWithCustomValues;
