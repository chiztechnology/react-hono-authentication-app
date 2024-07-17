import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Header from './components/layout/header'
import { Provider } from 'react-redux'
import store from './context/store'
import ProfilePage from './page/profile/profile'
import SignInPage from './page/signin/signin'

function App() {
  const access_token = localStorage.getItem('access_token');
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={access_token ?
            <div className='app-container'>
              <Header />
              <ProfilePage />
            </div>
            : <SignInPage />}
          />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/profile'
            element={
              <div className='app-container'>
                <Header />
                <ProfilePage />
              </div>} />
        </Routes>

      </Router>
    </Provider>
  )
}

export default App
