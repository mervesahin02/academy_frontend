import React from "react";
import { useNavigate } from "react-router-dom";
import "./Notes.css";

const Notes = () => {
    const navigate = useNavigate();

    const notes = [
        { title: "React Props Kullanımı", content: "Props ile componentlere veri aktarımı yapılır.", date: "15.05.2025", course: "React Eğitimi" },
        { title: "SQL Join Mantığı", content: "Inner Join ve Left Join arasındaki farklar...", date: "12.05.2025", course: "Veritabanı Yönetimi" },
        { title: "Git Commit Best Practices", content: "Anlamlı commit mesajları yazmak neden önemli?", date: "10.05.2025", course: "Versiyon Kontrol" },
    ];

    return (
        <div className="notes-container">
            <div className="notes-header">
                <h3>Notlarım</h3>
                <div className="notes-actions">
                    <button className="add-note-button">+ Yeni Not Ekle</button>
                    <button className="back-button" onClick={() => navigate("/diger-giris-secenekleri")}>
                        <i className="fa fa-arrow-left"></i> Profile Dön
                    </button>
                </div>
            </div>

            <div className="notes-list">
                {notes.map((note, idx) => (
                    <div key={idx} className="note-card">
                        <div className="note-info">
                            <h4>{note.title}</h4>
                            <p>{note.content}</p>
                            <span className="note-course">{note.course}</span>
                        </div>
                        <div className="note-footer">
                            <span className="note-date">{note.date}</span>
                            <div className="note-actions">
                                <button className="edit-button">Düzenle</button>
                                <button className="delete-button">Sil</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notes;
