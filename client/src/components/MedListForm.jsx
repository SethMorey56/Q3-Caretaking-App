import React, { Component } from 'react';
import { Input, Form, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { postMeds } from '../redux/actions';

class MedListForm extends Component {

    state = {
        name: '',
        dosage: '',
        frequency: '',
        instruction: '',
        about: ''
    }

    addToMedsList = (e) => {
        e.preventDefault()
        console.log('test')
        return this.props.postMeds(this.state)
    }



    render() {
        return (
            <div className="med-list-form">
            <h1> Add a Medication </h1>
            <Form onSubmit={this.addToMedsList}>
                <Input onChange={e => this.setState({name: e.target.value})} placeholder="Name" bsSize="lg"/>
                <Input type="number" onChange={e => this.setState({dosage: e.target.value})} placeholder="Dosage (num)" bsSize="lg"/>
                <Input type="number" onChange={e => this.setState({frequency: e.target.value})}placeholder="Frequency (num)" bsSize="lg"/>
                <Input onChange={e => this.setState({instruction: e.target.value})}placeholder="Instruction" bsSize="lg"/>
                <Input onChange={e => this.setState({about: e.target.value})}placeholder="About" bsSize="lg"/>
                <Button className="med-list-form-button" type="submit"
                color="primary">Add
                </Button>
            </Form>
            </div>
        )
    }
}

export default connect(null, {postMeds})(MedListForm)