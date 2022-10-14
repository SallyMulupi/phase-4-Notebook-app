const Sidebar = ({
        notes,
        onAddNote,
        onDeleteNote,
        activeNote,
        setActiveNote,
    }) => {
        const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);


        return (
            <div className="app-sidebar">
              <div className="app-sidebar-header">
                <h1>Notes</h1>
                <button onClick={onAddNote}>Add</button>
              </div>