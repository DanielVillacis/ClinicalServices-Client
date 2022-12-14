import axios from 'axios';
import React from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';

toast.configure();
 
class AddPatient extends React.Component {

    handleSubmit(event) {
        // prevents the page from submitting the form automatically, which would refresh the page before the popup is displayed
        event.preventDefault(); 
        const data = {
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.age
        } 
        axios.post('http://localhost:8080/clinicalservices/api/patients', data)
        .then(res => {
            toast("patient added successfully!", {autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER});
        })
    }

    render() {
        return (<div>
            <h2>Add a new Patient</h2>
            <form>
                First name: <input type="text" name="firstName" onChange={(event=>this.firstName=event.target.value)}/>
                Last name: <input type="text" name="lastName" onChange={(event=>this.lastName=event.target.value)}/>
                Age: <input type="text" name="age" onChange={(event=>this.age=event.target.value)}/>
                <button onClick={this.handleSubmit.bind(this)}>Confirm</button><br/>
            </form><br/>
            <Link to={'/'}>Homepage</Link>
        </div>)
    }
}

export default AddPatient;