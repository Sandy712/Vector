
import { useState, useRef, useEffect } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textAreaRef = useRef(null);
  const [variables, setVariable] = useState([]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto'; // Reset height to auto to shrink if necessary
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  useEffect(() => {
    const variablePattern = /{{\s*(\w+)\s*}}/g;
    let match;
    const vars = [];

    while ((match = variablePattern.exec(currText)) !== null) {
      if (!vars.includes(match[1])) {
        vars.push(match[1]);
      }
    }
    setVariable(vars);
  }, [currText]);

  return (
    <div style={{ width: 200, border: '1px solid black', padding: '10px' }}>
      <div>
        <span>Text</span>
      </div>
      <div>
        <label>
          Text:
          <textarea
            ref={textAreaRef}
            value={currText}
            onChange={handleTextChange}
            style={{ width: '100%', boxSizing: 'border-box', overflow: 'hidden', resize: 'none' }}
          />
        </label>
      </div>
      {variables.map((variable, index) => (
        <Handle
          key={`${id}-var-${variable}`}
          type="target"
          position={Position.Left}
          id={`${id}-var-${variable}`}
          style={{ top: 20 + index * 20 }}
        />
      ))}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
};
