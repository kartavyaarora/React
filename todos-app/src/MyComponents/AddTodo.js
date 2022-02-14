import React, { useState } from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description canot be blank!");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
      alert("Todo has been added!")
    }
  };
  return (
    <div className="container">
      <h3 className="py-3">Add Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="todoTitle" className="form-label">
            Todo's Title
          </label>
          <input
            type="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="todoTitle"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="todoDesc" className="form-label">
            Description
          </label>
          <input
            type="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="todoDesc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          ADD
        </button>
      </form>
    </div>
  );
};
