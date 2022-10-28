
import './App.css';
import { Layout } from "./navbar/Layout.js";
import Navbar1 from './navbar/Navbar';
import {  BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateAnnouncements from './Annoucements/createAnnouncements'
import ViewAnnouncements from './Annoucements/ViewAnnouncemnts'

function App() {
  return (
    <BrowserRouter>

    
      <Navbar1 />
    <Routes>
    <Route path='/CreateAnnoucements' element={<CreateAnnouncements />} />
    <Route path='/ViewAnnoucements' element={<ViewAnnouncements />} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
