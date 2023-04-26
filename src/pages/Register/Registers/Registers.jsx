import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Container className='mt-5'>

                <Form>
                    <h1 className='text-center fw-bold'>Register Your Account</h1>

                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="name" name='name' placeholder="Enter your name" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="photo" name='photo' placeholder="Enter photo url" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept TErm & Condition" />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Form.Text className='text-secondary'>
                    Already Have an Account? Please <Link to='/login'>Login</Link> here !!!
                </Form.Text>
                <Form.Text className='text-success'>

                </Form.Text>
                <Form.Text className='text-success'>

                </Form.Text>


            </Container>
        </div>
    );
};

export default Register;