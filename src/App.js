import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import { UserProvider } from "./hoc/Context";

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <div className="App">
          <Layout/>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
