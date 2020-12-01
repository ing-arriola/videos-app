import React from "react";
import { Container, Row, Form } from "react-bootstrap";
import { useState } from "react";

const Search = ({ onSumbmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSumbmit(term);
  };

  return (
    <Container className="py-4">
      <Form onSubmit={onFormSubmit}>
        <Form.Label>Search</Form.Label>
        <Form.Control
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          type="text"
          placeholder="search a video"
        />
      </Form>
    </Container>
  );
};

export default Search;
