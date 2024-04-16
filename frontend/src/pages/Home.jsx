import React, { useState, useEffect } from "react";
import Note from "../components/Note";
import api from "../api";
import "../styles/Home.css";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  // const getNotes = async () => {
  //   try {
  //     const res = await api.get("api/notes/");
  //     setNotes(res.data);
  //     console.log(notes);
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((error) => alert(error));
  };

  const deleteNote = (id) => {
    api
      .delete(`api/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("note deleted");
        else alert("Failed to delete");
        getNotes();
      })
      .catch((error) => alert(error));
  };

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("api/notes/", { title, content })
      .then((res) => {
        if (res.status === 201) {
          alert("note created");
        } else {
          alert("some thing went wrong");
        }
        getNotes();
      })
      .catch((error) => alert(error));
  };

  return (
    <div>
      <div>
        <h2>Notes</h2>
        {notes.map((note) => (
          <Note note={note} onDelete={deleteNote} key={note.id} />
        ))}
      </div>
      <div>
        <h3>create note</h3>
        <form onSubmit={createNote}>
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <br />
          <label htmlFor="content">Contnent:</label>
          <br />
          <textarea
            type="text"
            id="content"
            name="content"
            required
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          <br />
          <input type="submit" value={"submit"} />
        </form>
      </div>
    </div>
  );
}

export default Home;
