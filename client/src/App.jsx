import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import GettingStarted from './pages/GettingStarted';
import TopReturn from './components/TopReturn';

export default function App() {
  return (
    <BrowserRouter>
      {/* Header */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/getting-started' element={<GettingStarted />} />
        </Route>
      </Routes>
      <TopReturn />
    </BrowserRouter>
  );
}
