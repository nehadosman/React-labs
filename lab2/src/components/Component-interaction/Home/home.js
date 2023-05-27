import React , { Component } from 'react'
import Registeration from '../Registration/registration'
import Students from '../Student/student';
export default class Home extends Component {

    students = [
        {id:1, name: "Nehad", age: 24, phone: 1234, email: "nehad@gmail.com" },
        {id:2 ,name: "shady", age: 27, phone: 1234, email: "shady@gmail.com" },

    ];
    constructor(props) {
        super(props);
        this.state = {
            students: this.students,
        };
    }
    handleData = (data) => {
        this.students.push(data);
        console.log(data);
        this.setState({ students: this.students });
    };
    render() {
        return (
            <div className='home'><Registeration onSubmit={this.handleData}></Registeration>
            <Students allStudents={this.state.students}></Students>
            </div>
        )
    }

}