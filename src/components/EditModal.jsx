import { useState } from "react";

const EditModal = ({
  setShowEditModal,
  setEditItem,
  editItem,
  handleEditBook,
}) => {
  const [newBookName, setNewBookName] = useState("");

  // kaydet butonuna tıklanınca çalışır
  const handleSave = () => {
    const updateBook = {
      ...editItem,
      title: newBookName,
      date: new Date().toLocaleString(),
    };
    // kitabı güncelle
    setEditItem(updateBook);

    // modalı kapatı
    setShowEditModal(false);
  };
  return (
    <div className="confirm-modal">
      <div className="modal-inner">
        <h5>Kitap İsmini Düzenle</h5>

        <input
          value={editItem.title}
          type="text"
          className="form-control shadow"
          onChange={(e) =>
            setEditItem({
              ...editItem,
              title: e.target.value,
              date: new Date().toLocaleString(),
            })
          }
        />

        <div className="d-flex justify-content-between mt-4">
          <button
            className="btn btn-warning"
            onClick={() => setShowEditModal(false)}
          >
            Vazgeç
          </button>
          <button className="btn btn-success" onClick={handleEditBook}>
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
