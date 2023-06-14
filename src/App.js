import { useState } from "react";
import BookCard from "./components/BookCard";
import { toast } from "react-toastify";
import EditModal from "./components/EditModal";

function App() {
  const [bookName, setBookName] = useState("");
  const [books, setBooks] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editItem, setEditItem] = useState(null);

  console.log(showEditModal, editItem);

  // ekle butonuna tıklandığı anda çalışır
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bookName) {
      toast.warn("Lütfen Kitap İsmi Giriniz");

      // fonksiyonu durdurma
      return;
    }

    // kitap için gerekli bilgilere sahip obje oluşturma
    const newBook = {
      id: new Date().getTime(),
      title: bookName,
      date: new Date().toLocaleString(),
      isRead: false,
    };

    // oluşturulan kitap objesini kitaplar dizine aktar
    // spread operator önceden eklentileri muhafaza eder
    setBooks([...books, newBook]);

    // eleman eklenince inputu sıfırla
    setBookName("");

    // bildirim ver
    toast.success("Kitap Eklendi");
  };

  // modalı aç kapa
  const handleModal = (id) => {
    // id yi state aktarma
    setDeleteId(id);
    // modalı açma
    setShowConfirm(true);
  };

  // sil butonuna bastığında çalışır
  const handleDelete = (deletingId) => {
    const filtred = books.filter((item) => item.id !== deletingId);
    // oluşan diziyi state aktar
    setBooks(filtred);

    // bildirim ver
    toast.error("Kitap Silindi");
  };

  // okundu butonuna bastığında çalışır
  // 1- okundu değerini tersine çevir
  // 2- books dizisinin bir kopyasını oluştur
  // 3- düzenlenecek olan kitabın dizideki sırasını bul > findIndex
  // 4- eski kitabı kopya diziden çıkar yerine güncellenmiş versiyonu koy > splice
  // 5- güncel olan kopya diziyi state aktar

  const handleRead = (book) => {
    const updateBook = { ...book, isRead: !books.isRead };

    const cloneBooks = [...books];

    const index = cloneBooks.findIndex((item) => item.id === book.id);

    cloneBooks.splice(index, 1, updateBook);

    setBooks(cloneBooks);
  };
  console.log(books);

  // kitabı günceller
  const handleEditBook = () => {
    // değişecek elemanın dizideki sırasını bulur
    const index = books.findIndex((book) => book.id === editItem.id);
    // kitaplar dizisinin kopyasını oluşturma
    const cloneBooks = [...books];

    // eski kitabı diziden çıkar yerine yenisini koy
    cloneBooks.splice(index, 1, editItem);
    // state yi güncelle > kopya diziyi stateye aktar
    setBooks(cloneBooks);

    // modalı kapat
    setShowEditModal(false);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-dark text-light px-5 py-2 fs-5 text-center">
        {" "}
        Kitap Kurdu{" "}
      </div>
      {/* Container */}
      <div className="container border">
        {/* Form */}
        <form onSubmit={handleSubmit} className="d-flex gap-3 mt-4">
          <input
            onChange={(e) => setBookName(e.target.value)}
            value={bookName}
            className="form-control shadow"
            type="text"
          />
          <button className="btn btn-warning">Ekle</button>
        </form>

        <div className="d-flex flex-column gap-3 py-5">
          {/* eğer state içerisi boş ise ekrana bunu yaz */}

          {books.length === 0 && <h4>Henüz herhangi bir kitap eklenmedi</h4>}

          {/* eğer state içerisinde eleman varsa onları listele */}

          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              handleModal={handleModal}
              handleRead={handleRead}
              setShowEditModal={setShowEditModal}
              setEditItem={setEditItem}
            />
          ))}
        </div>
      </div>
      {/* modalı tanımlama */}
      {showConfirm && (
        <div className="confirm-modal">
          <div className="modal-iner shadow">
            <h5>Silmek istiyor musunuz ?</h5>
            <button
              className="btn btn-warning"
              onClick={() => setShowConfirm(false)}
            >
              Vazgeç
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                handleDelete(deleteId);
                setShowConfirm(false);
              }}
            >
              Onayla
            </button>
          </div>
        </div>
      )}

      {/* düzenleme modalı */}
      {showEditModal && (
        <EditModal
          setShowEditModal={setShowEditModal}
          setEditItem={setEditItem}
          editItem={editItem}
          handleEditBook={handleEditBook}
        />
      )}
    </div>
  );
}

export default App;
