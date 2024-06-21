import React from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export const NewNode_5 = ({ id, data }) => {
    const handles = [
        { type: 'source', position: Position.Left, id: `${id}-value1` },
        { type: 'target', position: Position.Right, id: `${id}-value2` }
    ];

    return (
        <BaseNode id={id} data={data} type="New_5" handles={handles}>
        </BaseNode>
    );
};
