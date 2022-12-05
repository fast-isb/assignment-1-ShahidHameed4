import Navbar1 from './navbar/Navbar'
import {  Routes, Route } from 'react-router-dom'
import CreateAnnouncements from './Annoucements/createAnnouncements'
import ViewAnnouncements from './Annoucements/ViewAnnouncemnts'
import CreateResident from './Residents/createResidents'
import ContentCard from './Property/ContentCard'


function App () {
  return (
    
<div data-testid = "testHeader">
      <Navbar1 />
      <Routes>
        <Route path='CreateAnnoucements' element={<CreateAnnouncements />} />
        <Route path='ViewAnnoucements' element={<ViewAnnouncements />} />
        <Route path='createResident' element={<CreateResident />} />
        <Route path='CreateProperty' element={<ContentCard />} />
      </Routes>

      </div>
  )
}

export default App;
