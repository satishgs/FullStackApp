import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './store';
import Login from './Login';
import { Container, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

function App() {
  const authenticated = useSelector((state) => state.auth.authenticated);

  return (
      <Provider store={store}>
        {authenticated ? (
            <Container>
              <Typography variant="h4">Dashboard</Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Replace this with fetched data */}
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Alice</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Bob</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Container>
        ) : (
            <Login />
        )}
      </Provider>
  );
}

export default App;
