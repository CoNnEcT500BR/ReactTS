import React from 'react';

type TRandomProps = {
    min: number;
    max: number;
}

export default function Random({max, min}: TRandomProps) {

    const Random = Math.floor(Math.random() * (max - min) + min)

    return (
        <div>
            <h2>Aleatório</h2>
            <p>Seu número aleatório é <strong>{Random}</strong></p>
        </div>
    )
}