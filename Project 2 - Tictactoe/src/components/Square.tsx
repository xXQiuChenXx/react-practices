import React from 'react'

interface Props {
    value: string;
    onClick: any;
    index: number;
}

const Square = ({ value, onClick, index }: Props) => {
    return (
        <button className="square" onClick={() => onClick(index)}>
            {value}
        </button>
    );
}

export default Square
