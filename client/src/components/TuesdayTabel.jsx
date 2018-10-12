import React from 'react';
import { Table } from 'reactstrap';

const TuesdayTable = (meds) => {

    return (
        <div className="med-table">
            <Table>
            <thead>
            <tr>
                <th></th>
                <th>Medicine</th>
                <th>Dosage</th>
                <th>Frequency</th>
                <th>Instruction</th>
                <th>About</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row"></th>
                <td> Drug 3 </td>
                <td> 25 (mg) </td>
                <td> 3 per day </td>
                <td> lots of alcohol </td>
                <td> carpel tunnel </td>
            </tr>
            <tr>
                <th scope="row"></th>
                <td> Drug 2 </td>
                <td> 10 (mg) </td>
                <td> 1 per day </td>
                <td> after breakfast </td>
                <td> what is it for</td>
            </tr>
            <tr>
                <th scope="row"></th>
                <td> Drug 1 </td>
                <td> 5 (mg) </td>
                <td> 5 per day </td>
                <td> lots of fluids </td>
                <td> sore throat </td>
            </tr>
            </tbody>
        </Table>
      </div>
    )
}

export default TuesdayTable