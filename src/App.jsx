// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalContext } from './context';

function App() {
  const { isLoading } = useGlobalContext();
  return (
    <main>
      <Navbar />
      {isLoading ? <div className="loading"></div> : <CartContainer />}
    </main>
  );
}

export default App;
