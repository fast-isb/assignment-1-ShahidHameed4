
import './App.css'
import Navbar1 from './navbar/Navbar'
import { HashRouter, Routes, Route } from 'react-router-dom'
import CreateAnnouncements from './Annoucements/createAnnouncements'
import ViewAnnouncements from './Annoucements/ViewAnnouncemnts'
import CreateResident from './Residents/createResidents'

function App () {
  return (
    <HashRouter>

      <Navbar1 />
      <Routes>
        <Route path='/CreateAnnoucements' element={<CreateAnnouncements />} />
        <Route path='/ViewAnnoucements' element={<ViewAnnouncements />} />
        <Route path='/createResident' element={<CreateResident />} />
      </Routes>

    </HashRouter>
  )
}

export default App
