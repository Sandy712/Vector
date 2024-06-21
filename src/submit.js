// submit.js
import React from 'react';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

export const SubmitButton = () => {
    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges,
    }), shallow);

    const handlesubmit = async () => {
        const pipeline = { nodes, edges };

        try {
            const response = await fetch('/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pipeline)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            alert(`Number of nodes: ${result.num_nodes}\nNumber of edges: ${result.num_edges}\nIs DAG: ${result.is_dag}`);
            console.log('Pipeline parsed successfully:', result);

            
        } catch (error) {
            alert('Failed to submit pipeline. Check console for details.');
            console.error('Error parsing pipeline:', error);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button type="button" onClick={handlesubmit}>Submit</button>
        </div>
    );
};
