import { useEffect, useState } from "react";
import Main from "./components/main";
import Sidebar from "./components/sidebar";

function App() {
    const [notes, setNotes] = useState(
        localStorage.notes ? JSON.parse(localStorage.notes) : []
    );
    const [activeNote, setActiveNote] = useState(false);
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);
    const onAddNote = () => {
            const newNote = {
                // id: uuid(),
                title: "Untitled Note",
                body: "",
                lastModified: Date.now(),
            };