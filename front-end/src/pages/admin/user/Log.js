import React from 'react';
import {  fade,makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import VideocamIcon from '@material-ui/icons/Videocam';



const columns = [
    { id: 'data', label: '날짜/시간', minWidth: 170 },
    { id: 'category', label: '경보유형', minWidth: 100 },
    {
      id: 'subnumber',
      label: '열차번호(칸)',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'cctv',
      label: '영상보기',
      minWidth: 170,
      align: 'right',
        
    },
   
  ];

  function createData(data, category, subnumber, cctv) {
    return { data, category, subnumber, cctv};
  }
  const rows = [
    createData('India', 'IN', 1324171354, <VideocamIcon/>),
    createData('China', 'CN', 1403500365, <VideocamIcon/>),
    createData('Italy', 'IT', 60483973, <VideocamIcon/>),
    createData('United States', 'US', 327167434, <VideocamIcon/>),
    createData('Canada', 'CA', 37602103, <VideocamIcon/>),
    createData('Australia', 'AU', 25475400, <VideocamIcon/>),
    createData('Germany', 'DE', 83019200, <VideocamIcon/>),
    createData('Ireland', 'IE', 4857000, <VideocamIcon/>),
    createData('Mexico', 'MX', 126577691, <VideocamIcon/>),
    createData('Japan', 'JP', 126317000, <VideocamIcon/>),
    createData('France', 'FR', 67022000, <VideocamIcon/>),
    createData('United Kingdom', 'GB', 6702220, <VideocamIcon/>),
    createData('Russia', 'RU', 146793744, <VideocamIcon/>),
    createData('Nigeria', 'NG', 200962417,<VideocamIcon/>),
    createData('Brazil', 'BR', 210147125, <VideocamIcon/>),
  ];

const useStyles = makeStyles((theme) =>({
    container: {
        maxHeight: 440,
        width: '90%',
        marginLeft: 40,
        marginTop: 20
    },
    root: {
        '& > *': {
          marginTop: theme.spacing(6),
        },
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        margin: theme.spacing(1),
        marginRight: 40,
        backgroundColor: '#4caf50 !important',
        color:"white"
      
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(5),
          width: 'auto',
        },
        paddingTop: 70,
 
     },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '40%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '23ch',
        },
        border: '1px solid',
        borderRadius: '13px',
        height:28
    },
    margin: {
        margin: theme.spacing(1),
      },
 }));
    

const Log = () =>{
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

    return(
            <div>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <div className="d-flex justify-content-end">
                    <Button
                        variant="contained"
                        // color="primary"
                        className={classes.button}
                        endIcon={<SaveAltIcon/>}
                    >
                        Excel
                    </Button>
                  
                </div>

                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                        return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                <TableCell key={column.id} align={column.align}>
                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                </TableCell>
                                );
                            })}
                            </TableRow>
                        );
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    className="mr-4"
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </div>
        );
    }

export default Log;