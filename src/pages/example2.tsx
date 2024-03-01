"use client"

import React, { useEffect, useState, useRef } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from "./index.module.css";
import { getData } from '@/api/getData';
import { Typography } from '@mui/material';

interface Joke {
  setup: string;
  punchline: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<Joke[]>([]);
  const isMounted = useRef(true);

  const fetchData = async () => {
    try {
      const response = await getData();
      setData(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      fetchData();
      isMounted.current = false;
    }
  }, []);

  return (
    <main className={styles.main}>
      {data.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          <Typography className={styles.heading}>
            <Typography variant="h4">Joke Records Example 2</Typography>
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Setup</TableCell>
                  <TableCell>Punchline</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.length > 0 &&
                  data.map((row) => (
                    <TableRow key={row.setup}>
                      <TableCell>{row.setup}</TableCell>
                      <TableCell>{row.punchline}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </main>
  );
};

export default App;
