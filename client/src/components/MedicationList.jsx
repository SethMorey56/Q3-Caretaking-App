import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';

const MedicationList = (props) => {

    var listOfMedications = props.meds.map((meds) => <ListGroupItem key={meds.id} className="list-group-item-button">{meds.name}  <button type="button" class="btn btn-danger button-position">Delete</button></ListGroupItem>)
    
    // var listOfUses = props.meds.map((meds) => <ListGroupItem key={meds.id}>{meds.about}</ListGroupItem>)

    console.log(props)
        return (
            <div className="med-list">
                <h1 className="medication-list-h1">Medication List</h1>
                <ListGroup className="list-group-items">
                    {listOfMedications}
                </ListGroup>
            </div>
    )
}

// const mapDisatchToProps = dispatch => bindActionCreators({
//     function: button attached to function
// }, dispatch)

const mapStateToProps = state => {
    return({
        meds: state.meds
    })
}

export default connect(mapStateToProps)(MedicationList)