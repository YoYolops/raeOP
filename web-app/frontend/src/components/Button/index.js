import React from 'react'
import './Button.css';

const Button = (props) => {

    const styles = ['primary', 'outline']

    return(
        <button className={styles.includes(props.variant) ? 'btn ' + props.variant : 'btn primary'}>
            {console.log(props.variant)}
            {props.children}
        </button>
    )
}

export default Button;