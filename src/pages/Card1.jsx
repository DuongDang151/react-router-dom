import { useState, useEffect } from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import "./Card1.css";

function Card1() {
  const [books, setBooks] = useState([]);
  const bookApi = "https://binh-online-shopping-be.vinhomes.co.uk/product";
  const navigate = useNavigate();

  useEffect(() => {
    fetch(bookApi)
      .then((response) => response.json())
      .then((bookData) => {
        setBooks(bookData.data.items);
      })
      .catch(() => alert("Có lỗi!"));
  }, []);

  return (
    <div className="grid-container">
      {books.map((book) => (
        <div
          key={book._id}
          className="card-item"
          onClick={() => navigate(`/book/${book._id}`)}
        >
          <Card
            hoverable
            bordered={false}
            cover={
              book.images.length > 0 && (
                <div className="card-image">
                  <img src={book.images[0]} alt={book.name} />
                </div>
              )
            }
          >
            <h4 className="book-name">{book.name}</h4>
            <h4 className="book-price">{book.currentPrice}đ</h4>
            <div className="book-quantity">Số lượng: {book.quantity}</div>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Card1;
