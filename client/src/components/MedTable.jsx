import React from 'react';
import { Table } from 'reactstrap';

const MedTable = () => {
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
                <td> Drug 1 </td>
                <td> (mg) </td>
                <td> per day </td>
                <td> how to take </td>
                <td> what is it for</td>
            </tr>
            <tr>
                <th scope="row"></th>
                <td> Drug 2 </td>
                <td> (mg) </td>
                <td> per day </td>
                <td> how to take </td>
                <td> what is it for</td>
            </tr>
            <tr>
                <th scope="row"></th>
                <td> Drug 3 </td>
                <td> (mg) </td>
                <td> per day </td>
                <td> how to take </td>
                <td> what is it for</td>
            </tr>
            </tbody>
        </Table>
      </div>
    )
}

export default MedTable