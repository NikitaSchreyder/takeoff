import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom'

import Auth from '../screens/auth/Auth';
import Contacts from '../screens/contacts/Contacts';
import AddContact from '../screens/addContact/AddContact';
import EditContact from '../screens/editContact/EditContact';
import NotFound from '../screens/notFound/NotFound';

function App() {
  if(!localStorage.getItem('token')) {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Auth />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Contacts />}/>
          <Route path='/add-contact' element={<AddContact />}/>
          <Route path='/edit-contact/:id' element={<EditContact />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


  // useEffect(() => {
  //   localStorage.setItem('token', 'token')
  // }, [])