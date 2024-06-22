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
    <div style={{
      width: 200,
      border: '1px solid purple',
      borderRadius: '15px',
      backgroundColor: '#4b0082',
      color: 'white',
      padding: '1rem',
      boxSizing: 'border-box'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '1rem',
        fontWeight: 'bold'
      }}>
        <span style={{ textAlign: 'center' }}>Text</span>
      </div>
      <div style={{
        marginBottom: '1rem',
        borderTop: '1px solid black',
        background: '#7b68ee',
        padding: '0.5rem',
        borderRadius: '10px',
      }}>
        <label>
          Text:
          <textarea
            ref={textAreaRef}
            value={currText}
            onChange={handleTextChange}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              overflow: 'hidden',
              resize: 'none',
              background: 'transparent',
              color: 'white',
              border: 'none',
              outline: 'none',
              textDecoration: 'underline',
              textDecorationColor: 'green'
            }}
          />
        </label>
      </div>
      {variables.map((variable, index) => (
        <Handle
          key={`${id}-var-${variable}`}
          type="target"
          position={Position.Left}
          id={`${id}-var-${variable}`}
          style={{ top: 80 + index * 20, background: 'black' }}
        />
      ))}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{ background: 'black' }}
      />
    </div>
  );
};
