import React from 'react'

function Card(props) {
    return (
        <div style={{
            ...styles.card,
            width: `${props.resize_width}vw`
        }}>
            <img style={styles.image} src={props.card_number} alt="heyhey"/>
        </div>
    )
}

const styles = {
    card: {
        height: 'auto',
        boxSizing: 'border-box',
    },
    image: {
        width: '100%',
        height: 'auto',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
}

export default React.memo(Card);
