import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { sendEmailVerification } from 'firebase/auth';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [error , setError] = useState();
    const [success, setSucces] = useState();

    const handleRegister =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        setError('');
        setSucces('')
        if( !/(?=.*[a-z])/.test(password)){
           setError('at least one lowercase')
            return;
         }

        createUser(email,password)
        .then(result =>{
            const createdUser = result.user;

            if(createdUser){
                setSucces("Register Successfully done !!")
            }
            // handleEmailVerification(user)
            form.reset('');
          
        })
        .catch(error =>{
            setError(error.message)
        })
    }
    
// const handleEmailVerification =(user)=>{
//     sendEmailVerification(user)
//     .then(result =>{
//         alert('Check your email')
//     })
  

    return (
        <div>
            <Container className='mt-5'>

                <Form onSubmit={handleRegister}>
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
                </Form.Text> <br />
                <Form.Text className='text-danger fw-bold'>
                    {error}
                </Form.Text> <br />
                <Form.Text className='text-success fw-bold'>
                    {success}
                </Form.Text>


            </Container>
        </div>
    );
};

export default Register;