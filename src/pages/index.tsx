import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import styles from './index.module.css';
import useJockes from './../api/fetchApi';
import { Jock } from './../api/fetchApi';

const Page: React.FC = () => {
    const { data, error, isLoading } = useJockes();
    const headers = ['Setup', 'Punchline'];

    return (
        <div className={styles.div_main}>
            {isLoading && !data ? (
                <Typography variant="h4" className={styles.main}>Loading...</Typography>
            ) : (
                <>
                    <Typography className={styles.heading}>
                        <Link href="/example2" underline="none" className={styles.example2_link}>Example 2</Link>
                        <Typography variant="h4">Joke Records</Typography>
                    </Typography>
                    <main className={styles.main}>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        {headers.map((header) => (
                                            <TableCell className={styles.table_heading}>{header}</TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {((data instanceof Array ? data : [data]) as Jock[]).map((row: Jock) => (
                                        <TableRow key={row.setup}>
                                            <TableCell>{row.setup}</TableCell>
                                            <TableCell>{row.punchline}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </main>
                </>
            )}
            {error && <div>Failed to load : {error.message}</div>}
        </div>
    );
}
export default Page;