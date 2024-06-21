// outputNode.js
import { Position } from 'reactflow';
import BaseNode from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const handles = [{ type: 'target', position: Position.Left, id: `${id}-value` }];

  return (
    <BaseNode id={id} data={data} type='Output' handles={handles} />
    // <div style={{width: 200, height: 80, border: '1px solid black'}}>
    //   <Handle
    //     type="target"
    //     position={Position.Left}
    //     id={`${id}-value`}
    //   />
    //   <div>
    //     <span>Output</span>
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
    //       <select value={outputType} onChange={handleTypeChange}>
    //         <option value="Text">Text</option>
    //         <option value="File">Image</option>
    //       </select>
    //     </label>
    //   </div>
    // </div>
  );
}
