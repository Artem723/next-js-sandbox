import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row'
import styles from './styles/task.module.css'

export default function Task(props) {
    const { onRemove, onCheck } = props;
    const {id, text, isCompleted} = props?.task;
    const checkBtnText = isCompleted ? 'uncheck' : 'check';
    return (
    <Row className={styles.task}>
            <Col className={isCompleted && styles.taskCompleted} sm="8">{text}</Col>
            <Col sm="2" className='d-grid gap-2'><Button onClick={() => onCheck(id, !isCompleted)} variant={isCompleted ? 'secondary' : 'primary'} >{checkBtnText}</Button></Col>
            <Col sm="2" className='d-grid gap-2'><Button onClick={() => onRemove(id)} variant='danger'>remove</Button></Col>
    </Row>
    )
}