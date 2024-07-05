import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import More from "./pages/More";
import Sidebar from "./pages/Sidebar";
import Test2 from "./pages/Test2";
import Card1 from "./pages/Card1";
import BookDetail from "./pages/item/BookDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="book" element={<Card1 />}></Route>
        <Route path="book/:bookId" element={<BookDetail />} />
        <Route path="test2" element={<Test2 />} />
      </Route>
      <Route path="more" element={<More />}>
        <Route
          path="more"
          element={<div style={{ color: "#000" }}>dadas</div>}
        />
        <Route path="more/test4" element={<Test2 />} />
      </Route>
      <Route path="sidebar" element={<Sidebar />} />
      <Route path="card" element={<Card1 />} />
    </Routes>
  );
}

export default App;
