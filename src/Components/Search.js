import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useState } from "react";

const Search = ({ onSumbmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSumbmit(term);
  };

  return (
    <Col>
      <Form onSubmit={onFormSubmit}>
        <Form.Control
          className="mr-4"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          type="text"
          placeholder="Enter a search and hit enter"
        />
      </Form>
    </Col>
  );
};

export default Search;
