import { useState, useEffect } from "react";

function Test2() {
  const [books, setBooks] = useState([]);
  const bookApi = "https://binh-online-shopping-be.vinhomes.co.uk/product";

  useEffect(() => {
    fetch(bookApi)
      .then((response) => response.json())
      .then((bookData) => {
        setBooks(bookData.data.items);
      })
      .catch(() => alert("Có lỗi!"));
  }, []);

  return (
    <div>
      {books.map((book) => (
        <div key={book._id}>
          <h2>{book.name}</h2>
          {book.images.length > 0 && (
            <img src={book.images[0]} alt={book.name} />
          )}
        </div>
      ))}
    </div>
  );
}

export default Test2;
