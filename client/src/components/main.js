const Main = ({ activeNote, onUpdateNote }) => {
    const onEditField = (field, value) => {
      onUpdateNote({
        ...activeNote,
        [field]: value,
        lastModified: Date.now(),
      });
    };
    if (!activeNote) return <div className="no-active-note">No Active Note</div>;