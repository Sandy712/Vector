import { useState } from "react";
import { Handle } from "reactflow";

const BaseNode = ({ id, data, type, handles }) => {
  const [name, setName] = useState(data?.name || id);
  const [nodeType, setNodeType] = useState(data?.nodeType || type);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setNodeType(e.target.value);
  };

  return (
    <div
      style={{
        border: "1px solid purple",
        padding: "1.6rem",
        borderRadius: "15px",
        backgroundColor: "#4b0082",
        color: "white",
        width: "200px",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        {type}
      </div>
      <div
        style={{
          border: "1px solid purple",
          backgroundColor: "#7b68ee",
           
        
          marginBottom: "1rem",
        }}
      >
        {handles &&
          handles.map((handle) => (
            <Handle
              key={handle.id}
              type={handle.type}
              position={handle.position}
              id={handle.id}
            />
          ))}
      </div>
      <div  style={{}}>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            style={{
              display: "block",
              width: "11.5rem",
              padding: "0.5rem",
              borderRadius: "5px",
              border: "1px solid #ddd",
              marginTop: "0.5rem",
              marginBottom: "1rem",
              marginRight:"1.3rem"
            }}
          />
        </label>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          Type:
          <select
            value={nodeType}
            onChange={handleTypeChange}
            style={{
              display: "block",
              width: "100%",
              padding: "0.5rem",
              borderRadius: "5px",
              border: "1px solid #ddd",
              marginTop: "0.5rem",
            }}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default BaseNode;
