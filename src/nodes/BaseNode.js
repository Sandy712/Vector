import { useState } from 'react'
import { Handle } from 'reactflow';
import './BaseNode.css';

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
        <>
            <div className='base-node' style={{ width: 200, height: 100, border: '1px solid black' }}>
                {handles && handles.map(handle => (
                    <Handle
                        key={handle.id}
                        type={handle.type}
                        position={handle.position}
                        id={handle.id}
                        className='base-node-handle'
                    />
                ))}
            </div>
            <div className='base-node-title'>{type}</div>
            <div className='base-node-content'>
                <label className='base-node-label'>
                    Name:
                    <input
                        type='text'
                        value={name}
                        onChange={handleNameChange}
                        className='base-node-input'
                    />
                </label>
                <label className='base-node-label'>
                    Type:
                    <select value={nodeType} onChange={handleTypeChange} className='base-node-select'>
                        <option value='Text'>Text</option>
                        <option value='Text'>File</option>
                    </select>
                </label>
            </div>
        </>
    )
}

export default BaseNode;