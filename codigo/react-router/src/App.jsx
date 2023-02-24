import 'bootstrap/dist/css/bootstrap.min.css';
import MainRoutes from './routes/MainRoutes';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <>
    <div className="text-center text-bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <Navbar />
        </header>
        <main className="px-3">
          <MainRoutes />
        </main>
        <footer>
          <h1>footer</h1>
        </footer>
      </div>
    </div>
    
    </>
  )
}

export default App