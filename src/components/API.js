import React, { useState, useEffect } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Card from 'react-bootstrap/Card'

const API = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=100&nat=us")
            .then((res) => res.json())
            .then((res) => {
                setEmployees(res.results);
            });
    }, []);

    return (
        <CardColumns style={{ width: '18rem' }} border="info" >
            <Card style={{ width: '18rem' }} border="info">
            {employees.map(({ picture, name, dob, phone, email }, i) => (
                <EmployeeCard 
                picture={picture}
                name={name} 
                dob={dob} 
                phone={phone} 
                email={email} 
                i={i} />
               ))} 
            </Card>
        </CardColumns>
    );
}

const EmployeeCard = ({ picture, name, dob, phone, email }) => (
    <Card style={{ width: '18rem' }} border="info">
        <Card.Body>
            <Card.Img src={picture.thumbnail} alt="employee" />
            <Card.Title> Name: {name.first} {name.last} </Card.Title>
            <Card.Text> Age: {dob.age} </Card.Text>
            <Card.Text> Phone: {phone} </Card.Text>
            <Card.Text> Email: {email} </Card.Text>
        </Card.Body>
    </Card>
);

export default API;