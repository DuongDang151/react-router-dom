import { useState, useEffect } from "react";

function Test1() {
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
            <p key={book._id}>{book.name}</p>
        ))}
    </div>
  );
}

export default Test1;
