import { Col, Container, Row } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Quizes.css'

const Quizes = () => {
    const { data } = useLoaderData();
    const { questions, name } = data;
    return (
        <div>
            <Container>
                <h3 className='text-center py-3 fs-3 text-capitalize my-3'> quiz of {name}</h3>
                <Row>
                    <Col sm={10}>
                        <Row className='g-4'>
                            {
                                questions.map(qus => <Quiz key={qus.id} question={qus}></Quiz>)
                            }
                            <Toaster></Toaster>
                        </Row>
                    </Col>
                    <Col sm={2}>
                        <div className='count-div'>
                            <p> Total Qus : {questions.length}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Quizes;