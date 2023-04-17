import { Routes, Route,  Navigate, BrowserRouter  } from 'react-router-dom';
// import SignIn from './pages/signin';
// import SignUp from './pages/signup';
// import Forgot from './pages/forgot';
import Dashboard from './pages/dashboard';
import Login from './pages/login'
import SignUp from './pages/signup';
import ResetDashboard from './pages/pass_reset/reset_dashboard';
import VerifyEmail from './pages/pass_reset/verify_email'
import Modal from './pages/modal'
import LandingConsultant from './pages/dashboard/landingConsultant'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element ={<Navigate to = "/dashboard"/>} />
          <Route path = "/dashboard" element = {<Dashboard/>} />
          <Route path = "/login" element = {<Login/>} />
          <Route path = "/signup" element = {<SignUp/>} />
          <Route path = '/pass_reset_dashboard' element = {<ResetDashboard/>} />
          <Route path = '/verifyEmail' element = {<VerifyEmail/>} />
          <Route path = '/modal' element = {<Modal/>} />
          <Route path = '/landingconsultant' element = {<LandingConsultant/>} />
          {/* <Route path = "/forgot" element = {<Forgot/>} />
          <Route path = "/signin" element = {<SignIn/>} />
          <Route path = "/signup" element = {<SignUp />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
