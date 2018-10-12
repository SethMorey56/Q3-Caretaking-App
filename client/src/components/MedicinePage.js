import React from 'react';
import TopNav from './TopNav'
import DailyTabs from './DailyTabs';
import MedicationList from './MedicationList';
import MedListForm from './MedListForm';

const MedicinePage = () => {
    return (
        <div>
            <TopNav/>
            <DailyTabs/>
            <MedicationList/>
            <MedListForm/>
        </div>
    )
}

export default MedicinePage