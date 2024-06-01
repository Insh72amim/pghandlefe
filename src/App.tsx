import { useEffect, useState } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import Dashboard from './pages/Dashboard/Dashboard';
import FormElements from './components/Form/FormElements';
import FormLayout from './components/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import { useAuth } from './pages/Authentication/AuthContext';
import Premises from './pages/Premises/Premises';
import PG from './pages/PG/PG';

const PrivateRoute: React.FC = () => {
  const auth = useAuth();

  return auth?.isAuthenticated ? <Outlet /> : <Navigate to="/auth/signin" />;
};

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route
            index
            element={
              <>
                <PageTitle title="PG Handle" />
                <Dashboard />
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <>
                <PageTitle title="PG Handle" />
                <Dashboard />
              </>
            }
          />
          <Route
            path="/premises"
            element={
              <>
                <PageTitle title="PG Handle" />
                <Premises />
              </>
            }
          />
          <Route
            path="/pg"
            element={
              <>
                <PageTitle title="PG Handle" />
                <PG />
              </>
            }
          />
          <Route
            path="/availability"
            element={
              <>
                <PageTitle title="Calendar" />
                <Calendar />
              </>
            }
          />
          <Route
            path="/guests"
            element={
              <>
                <PageTitle title="Profile" />
                <Profile />
              </>
            }
          />
          <Route
            path="/bookings"
            element={
              <>
                <PageTitle title="Form Elements" />
                <FormElements />
              </>
            }
          />
          <Route
            path="/checkins"
            element={
              <>
                <PageTitle title="Form Layout" />
                <FormLayout />
              </>
            }
          />
          <Route
            path="/checkouts"
            element={
              <>
                <PageTitle title="Tables" />
                <Tables />
              </>
            }
          />
          =
        </Route>

        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
