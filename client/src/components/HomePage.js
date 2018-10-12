import React from 'react';
import { Form, FormGroup, Input, Label, Card, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <Card className="homepage-card" body inverse color="info">
            <h1 className="login-h1">Login</h1>
            <Form>
                <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="email" />
                </FormGroup>
                <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password" />
                </FormGroup>
                <Button className="login-button" color="warning" size="lg" block><Link to={'/medicine'}>Enter</Link></Button>
            </Form>
            </Card>
        </div>
    )
}


        // <CardTitle>Special Title Treatment</CardTitle>
        // <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        // <Button color="secondary">Button</Button>
    

export default HomePage