import '../App.css';
import NavBar from './Navbar/NavBar';
import Announcements  from './Annoucement/ViewAnnouncemnts';
import ManageProperty from './ManageProperty';
import ComplaintStatus from './Complaints/ViewComplaints';
import CustomerService from './CustomerService';
import Profile from './Profile/profileDisplay';
import CreateComplaints from './Complaints/CreateComplaints' 
import CancelComplaints from './Complaints/CancelComplaints'
import HomePage from './HomePage';
import {   Routes, Route} from 'react-router-dom'
import UpdateProfile from './Profile/updateProfile';

function App() {
  return (
    <div >
      <>
      <NavBar/>
      <Routes>
      <Route path='HomePage' element ={<HomePage/>} />
        <Route path='announcements' element ={<Announcements/>} />
        <Route path='ManageProperty' element ={<ManageProperty/>} />
        <Route path='CustomerService' element ={<CustomerService/>} />
        <Route path='ComplaintStatus' element ={<ComplaintStatus/>} />
        <Route path='CreateComplaints' element ={<CreateComplaints/>} />
        <Route path='CancelComplaints' element ={<CancelComplaints/>} />
        <Route path='profile' element ={<Profile/>} />
        <Route path='edit' element ={<UpdateProfile/>} />
        <Route path='*' element={<h1>Error</h1>} />
      </Routes >
     </>
    </div>
  );
}

export default App;
