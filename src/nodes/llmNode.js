import { Handle, Position } from "reactflow";

export const LLMNode = ({ id, data }) => {
  return (
    <div
      style={{
        width: 200,
        height: 120,
        border: "1px solid purple",
        borderRadius: "15px",
        backgroundColor: "#4b0082",
        color: "white",
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: `${100 / 3}%`, background: "black" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: `${200 / 3}%`, background: "black" }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
          width:'10rem'
          // borderBottom: "1px solid black",
        }}
      >
        <span style={{ textAlign: "center" }}>LLM</span>
      
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
          borderTop:'1px solid black',
          background:'#7b68ee',
          width:'10.4rem',
          height:'3.2rem',
          borderRadius:'9px'
          
        }}
      >
        <span style={{ textAlign: "center",marginTop:'13px' }}>This is a LLM.</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        style={{ background: "Black" }}
      />
    </div>
  );
};
