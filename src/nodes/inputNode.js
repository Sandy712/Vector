// inputNode.js
import { Position } from 'reactflow';
import BaseNode from './BaseNode';

export const InputNode = ({ id, data }) => {

  const handles = [{ type: 'source', position: Position.Right, id: `${id}-value` }]
  return (
    <BaseNode id={id} data={data} type='Input' handles={handles} >
    </BaseNode>
    // <div style={{ width: 200, height: 80, border: '1px solid black' }}>
    //   <div>
    //     <span>Input</span>
    //   </div>
    //   <div>
    //     <label>
    //       Name:
    //       <input
    //         type="text"
    //         value={currName}
    //         onChange={handleNameChange}
    //       />
    //     </label>
    //     <label>
    //       Type:
    //       <select value={inputType} onChange={handleTypeChange}>
    //         <option value="Text">Text</option>
    //         <option value="File">File</option>
    //       </select>
    //     </label>
    //   </div>
    //   <Handle
    //     type="source"
    //     position={Position.Right}
    //     id={`${id}-value`}
    //   />
    // </div>
  );
}
