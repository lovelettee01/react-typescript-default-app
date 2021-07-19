import React from 'react';
import BottomAppBar from '~/components/BottomAppBar';
import  SignUp  from '@pages/SignUp';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <Container maxWidth="lg">
      <SignUp />
      <BottomAppBar />
    </Container>
  )
}
export default App;
