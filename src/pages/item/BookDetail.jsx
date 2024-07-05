import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BookDetail.css";
import { Button } from "antd";

function BookDetail() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const bookApi = `https://binh-online-shopping-be.vinhomes.co.uk/product/${bookId}`;

  useEffect(() => {
    fetch(bookApi)
      .then((response) => response.json())
      .then((bookData) => {
        setBook(bookData.data);
      })
      .catch(() => alert("Có lỗi!"));
  }, [bookApi]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-detail-container">
      <div className="book-detail">
        <div className="book-image">
          <img src={book.images[0]} alt={book.name} />
        </div>
        <div className="book-info">
          <h1 className="book-name">{book.name}</h1>
          <div className="book-information">
            Nhà xuất bản: {book.productDetail.publisher}
          </div>
          <div className="book-information">
            Tác giả: {book.productDetail.author}
          </div>
          <div className="book-information">Loại sách: {book.category}</div>
          <h2 className="book-price">{book.currentPrice}đ</h2>
          <div className="book-actions">
            <Button type="danger" className="add-to-cart-btn">
              Thêm vào giỏ hàng
            </Button>
            <Button type="danger" className="buy-now-btn">
              Mua Ngay
            </Button>
          </div>
          <p className="book-quantity">Còn lại: {book.quantity} quyển</p>
          <p className="book-description">{book.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
