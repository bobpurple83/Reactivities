import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import NavBar from './NavBar';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../Features/home/HomePage';

export default observer (function App() {
  const location = useLocation();
  return (
    <>
    {location.pathname === '/' ? <HomePage/> : (
      <>
        <NavBar />
     <Container style={{marginTop:'7em'}}>
      <Outlet/>
     </Container>
      </>
    )}
    </>
  );
})
