import { Routes , Route } from "react-router-dom";
import Author from './Author';
import Book from './Book';
import Borrowing from './Borrowing';
import Category from './Category';
import Publisher from './Publisher';
import Welcome from './Welcome';

function BodyArea() {
  return (
    <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/author" element={<Author />} />
        <Route path="/book" element={<Book />} />
        <Route path="/category" element={<Category />} />
        <Route path="/publisher" element={<Publisher />} />
        <Route path="/borrowing" element={<Borrowing />} />
    </Routes>
  )
}
export default BodyArea