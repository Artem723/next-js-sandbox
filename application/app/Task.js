import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row'

export default function Task(props) {
    const {task} = props;
    return (
    <Row>
            <Col sm="8">{task.text}</Col>
            <Col sm="auto"><Button>Control</Button></Col>
    </Row>
    )
}