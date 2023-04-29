import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogin = (event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error);
        })
    }



    return (
        <Container className='mt-5'>
            <Form onSubmit={handleLogin}>
                <h1 className='text-center fw-bold'>Please Login !!!</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Form.Text className='text-secondary'>
                Don't Have an Account? Please <Link to='/register'>Register</Link> here !!!
            </Form.Text>
            <Form.Text className='text-success'>

            </Form.Text>
            <Form.Text className='text-success'>

            </Form.Text>


        </Container>
    );
};

export default Login;