// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='custom' label='custom_1'/>
                <DraggableNode type='custom' label='custom_2'/>
                <DraggableNode type='custom' label='custom_3'/>
                <DraggableNode type='custom' label='custom_4'/>
                <DraggableNode type='custom' label='custom_5'/>
            </div>
        </div>
    );
};
