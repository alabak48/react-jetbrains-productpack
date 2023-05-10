import Button from 'react-bootstrap/Button';

function Buttons(props) {
    return (
        <Button variant="warning" className="orange-btn">{props.btnText}</Button>
    );
}

export default Buttons;
