<h1>CRUD APP</h1>
<p>Create Read Update Delete</p>
<p>Oluştur Oku Düzenle Sii</p>

<ul>
    <li>
        Projeye bootstrapi dahil et
        index.html bootstrap cdni ekle
    </li>
    <li>
        1- Yeni  eklenecek elemeanı almak için form oluşturmak:
         form içerisinden gelen verileri al ve state aktar.
         Ekle butonuna basıldığı anda forma girilen bilgilerle beraber yeni obje oluştur.
         Oluşturulan objenin değerleri: tarih, kitapIsmı, id, okunduMu
         Oluşan objeyi kitaplar isminde bir diziye aktar.
         Obje oluşturulduktan sonra inputu sıfırla.

    </li>

    <li>
        2- books state inde tutulan kitapları al ve map metodu ile listele(ekrana bas)
        > eğer state boş ise o zaman ekrana "henüz kitap eklenmedi" yaz
        > BookCard bileşenine kitap bilgilerini prop olarak gönder
        > BookCard bileşenin kitapla ilgili bütün özellikleri göster
    </li>
    <li>
        3- Kitap Silme:
        > herhangi bir butonun sil butonuna basıldığında
        > çalışan fonksiyona silinecek olanın id si gitsin
        > gelen id yi fonksiyona parametre olarak al
        > silinecek id ye eşit olmayan objeleri state e aktar
        > oluşan diziyi state aktar
    </li>

    <li>
        4- Kitabı okundu olarak işaretle
        > okundu butonuna basılınca çalışan fonksiyona kitabı gönder
        > kitabın isRead değerini tersine çevir
        > dizi içerisinde değişecek olan elemanı bul
        > o elemanı çıkar ve yerine yenisini ekle
    </li>

    <li>
        5- Düzenleme işlemini yap :
        - Düzenle butonuna tıklandığında ekrana bir model çıksın
        - Kitap ismini değiştirmek için bir input
        - input her değiştiğinde editItem değişkenini günceller ve app.jse aktarır
        - vazgeç butonu > modalı kapatır
        -kaydet butonu > app js de bulunan handleEditBook çalıştırır
        - çalışan fonksiyon diziden eski elemanı çıkarır yerine yenisini koyar
        _

    </li>

</ul>

silinecek = 4
filtrele id si 4 e eşit olmayanları al
[
{
id:1
}
{
id:2
}
{
id:3
}
{
id:4
}

]
