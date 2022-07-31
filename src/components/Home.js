import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
 

class Home extends React.Component {

    state = {
        patientData: []
    }

    componentWillMount() {
        // retrieve the patients from the backend
        axios.get('http://localhost:8080/clinicalservices/api/patients').then(res => {
            const patientData = res.data;   // will get the data that comes back from the backend as a constant
            this.setState({ patientData }); // set the state to the patientData constant    
        })
    }

    render() {
        return (<div>
            <h2>Patients:</h2>
            <table align='center'>
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.patientData.map(patient => <RowCreator item = {patient}/>)}
                </tbody>
            </table>
            <br/>
            <Link to={'/addPatient'}>Register a new Patient</Link>
        </div>)
    }
}

class RowCreator extends React.Component {
    render() {
        var patient = this.props.item;
        return (<tr>
            <td>{patient.id}</td>
            <td>{patient.firstName}</td>
            <td>{patient.lastName}</td>
            <td>{patient.age}</td>
            <td><Link to={'patientDetails/'+patient.id}>Add Data</Link></td>
            <td><Link to={'analyze/'+patient.id}>Analyze Data</Link></td>
        </tr>
        )
    }
}

export default Home;