import React from 'react'

type Props = {
    hoverColor: string
}

const BackArrow = ({ hoverColor }: Props) => {
    return (
        <svg width="60" height="8" viewBox="0 0 60 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.64645 3.64645C0.451187 3.84171 0.451187 4.1583 0.64645 4.35356L3.82843 7.53554C4.02369 7.7308 4.34028 7.7308 4.53554 7.53554C4.7308 7.34028 4.7308 7.02369 4.53554 6.82843L1.70711 4.00001L4.53554 1.17158C4.7308 0.976316 4.7308 0.659733 4.53554 0.464471C4.34027 0.269209 4.02369 0.269209 3.82843 0.464471L0.64645 3.64645ZM60 3.5L1 3.50001L1 4.50001L60 4.5L60 3.5Z" fill={hoverColor} />
        </svg>

    )
}

export default BackArrow