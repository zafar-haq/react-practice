import { Form, Button, Container, Row, Col } from "react-bootstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function LoginForm() {
    const [email, setEmail] = useState('')
    const router = useNavigate()
    return (

        <div>
            <Container className="mt-5">
                <Row className="d-flex justify-content-center">
                    <Col md={5} >
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(event) => {
                                    setEmail(event.target.value)
                                }}/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={() => {
                                console.log(email)
                                router('/InstructorDashboard')
                            }}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginForm