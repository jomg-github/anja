import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    traininfo: {
        width: '750px',
        margin: 'auto'
    },
    vdeio: {
        width: '375px',
        height: '300px',
    },
    maxvdeio: {
        position: 'absolute',
        left: '23.5%',
        width: '750px',
        height: '600px',
    },
    table: {
        width: '100%'
    },
    tablecon: {
        width: '750px',
        margin: 'auto'
    },
    tableheadback: {
        backgroundColor: 'gray',
    },
    tableheadfont: {
        color: 'white',
        fontSize: '1.2rem'
    },
    workbtn: {
        width: '10rem',
        fontSize: '2rem',
    }

});


const Cctv = () => {
    const classes = useStyles();
    const [cctvsize ,setCctvsize] = useState(0)

    const gocctv = (value) =>{
        setCctvsize(value)
    }

    const closecctv = () => {
        setCctvsize(0)
    }

    return (
        <div>
            <h1 className="text-center pt-5" >서울행 급행열차</h1>
            {cctvsize===1 && <img className={classes.maxvdeio} onClick={closecctv} src={'http://localhost:8000/stream2/'} alt="cctv1"></img> }
            <div className={classes.traininfo}>
                <div className="d-flex justify-content-between">
                    <img className={classes.vdeio} onClick={()=>gocctv(1)} src={'http://localhost:8000/stream2/'} alt="cctv1"></img>
                    <img className={classes.vdeio} src={'http://localhost:8000/stream2/'} alt="cctv2"></img>
                </div>
                <div className="d-flex justify-content-between">
                    <img className={classes.vdeio} src={'http://localhost:8000/stream2/'} alt="cctv3"></img>
                    <img className={classes.vdeio} src={'http://localhost:8000/stream2/'} alt="cctv4"></img>
                </div>
            </div>
        </div>
    );
}

export default Cctv;