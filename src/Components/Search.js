import React from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";

const Search = ({ onSumbmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSumbmit(term);
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Form.Control
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        type="text"
        placeholder="search a video"
      />
    </Form>
  );
};

export default Search;
