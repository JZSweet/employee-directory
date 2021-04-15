import React, { useState, useEffect } from "react";
import { Container, InputGroup, FormControl, Button, Card, CardColumns } from "react-bootstrap";

let hardEmpy = [];

const API = () => {
    const [title, setTitle] = useState([])
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=100&nat=us")
            .then((res) => res.json())
            .then((res) => {
                setEmployees(res.results);
                hardEmpy = res.results
            });
    }, []);

    const fliterEmpolyee = (title) => {
        let newEmpolyees = [...hardEmpy]
        newEmpolyees = newEmpolyees.filter(
            function (currentEmpy) {
                return currentEmpy.name.first.toLowerCase().includes(title.toLowerCase())
            }
        );
        setEmployees(newEmpolyees);
        console.log("click", title)
    };

    const sortEmpolyee = () => {
        const newEmpolyees = [...employees]
        newEmpolyees.sort(function (a, b) {
            if (a.name.last < b.name.last) { return -1; }
            if (a.name.last > b.name.last) { return 1; }
            return 0;
        });
        setEmployees(newEmpolyees);
    };

    return (
        <Container>
            <InputGroup className="mb-3">
                <FormControl placeholder="firstname" aria-label="firstname" aria-describedby="basic-addon2"
                    onChange={event => {
                        setTitle(event.target.value)
                        fliterEmpolyee(event.target.value)
                    }} />
                <InputGroup.Append>
                    <Button onClick={fliterEmpolyee} variant="outline-secondary">Filter Employees By First Name</Button>
                </InputGroup.Append>
            </InputGroup>
            <Button onClick={sortEmpolyee}> Sort Employees By Last Name</Button>
            <CardColumns>
                {employees.map(({ picture, name, dob, phone, email }, i) => (
                    <EmployeeCard
                        picture={picture}
                        name={name}
                        dob={dob}
                        phone={phone}
                        email={email}
                        i={i} />
                ))}
            </CardColumns>
        </Container >
    );
}

const EmployeeCard = ({ picture, name, dob, phone, email }) => (
    <Card style={{ width: "18rem" }} border="info">
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