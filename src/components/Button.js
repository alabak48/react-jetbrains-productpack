import React from 'react';
import Button from 'react-bootstrap/Button';

function Buttons(props) {
    const handleClick = () => {
        window.location.href = props.url;
    };

    return (
        <Button variant="warning" className="orange-btn" onClick={handleClick}>
            {props.btnText}
        </Button>
    );
}

export default Buttons;
