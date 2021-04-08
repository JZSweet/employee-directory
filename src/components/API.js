import React, { useState, useEffect } from "react";
import { Container, Button, Row, Card, CardColumns } from "react-bootstrap";

const API = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=100&nat=us")
            .then((res) => res.json())
            .then((res) => {
                setEmployees(res.results);
            });
    }, []);


    const sortEmpolyee = () => {
        const newEmpolyees = [...employees]
        newEmpolyees.sort(function (a, b) {
            if (a.name.last < b.name.last) { return -1; }
            if (a.name.last > b.name.last) { return 1; }
            return 0;
        })
        setEmployees(newEmpolyees)
    };

    return (
        <Container>
            <Button onClick={sortEmpolyee}> Sort Employees By Last Name</Button>

            <CardColumns>
                {employees.map(({ picture, name, dob, phone, email }, i) => (
                    <Row>
                        <Card>
                            <EmployeeCard
                                picture={picture}
                                name={name}
                                dob={dob}
                                phone={phone}
                                email={email}
                                i={i} />
                        </Card>
                    </Row>
                ))}
            </CardColumns>
        </Container >
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