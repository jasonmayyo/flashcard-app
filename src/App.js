import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Dashboard from './Container/Dashboard/Dashboard';
import {useNotification} from '../src/Container/Notifactions/NotifacationProvider';
import SignIn from '../src/Container/SignIn/SignIn'
import {auth} from '../src/Utils/firebase';

import {useAuthState} from 'react-firebase-hooks/auth'


function App() {

  const dispatch = useNotification();

  const handleNewNotification = ( ) => {
    dispatch({
      type: "succes",
      message: "Flashcard Added!"
    })
  }

  const handleUpdatedNotification = () => {
    dispatch({
      type: 'succes',
      message: 'Flashcard Updated!'
    })
  }

  const handleDeleteFlashcardNotification = () => {
    dispatch({
      type: 'succes',
      message: 'Flashcard Deleted!'
    })
  }

  const handleUpdateDeckNotification = () => {
    dispatch({
      type: 'succes',
      message: 'Deck Updated!'
    })
  }

  const handleDeleteDeckNotification = () => {
    dispatch({
      type: 'succes',
      message: 'Deck Deleted!'
    })
  }
 
  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <Router>
        {user ? 
        <Dashboard 
          NewNotification={handleNewNotification}
          updatedNotification={handleUpdatedNotification}
          deleteFlashcardNotification={handleDeleteFlashcardNotification}
          updatedDeckNotification={handleUpdateDeckNotification}
          deleteDeckNotification={handleDeleteDeckNotification}/>
          : <SignIn />}
      </Router>
    </div>
  );
} 

export default App;
