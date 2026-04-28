// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import PageExample from './pages/PageExample';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page-2" element={<Page2 />} />
        <Route path="/page-example" element={<PageExample />} />
      </Routes>
      <Footer />  {/* ← Taruh di sini, sejajar dengan Navbar */}
    </Router>
  );
}

export default App;