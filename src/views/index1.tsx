import AppBar from '@mui/material/AppBar/AppBar';
import Button from '@mui/material/Button/Button';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import Typography from '@mui/material/Typography/Typography';
import Menu from "@mui/icons-material/Menu";
import React,{ useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import './index1.css';
import Menulist from '../parts/MenuList';


function Frame() {
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch('http://localhost:8000').then(data => {
            console.log(data);
            setData(data)
        })
    },[])
    return (
        <React.Fragment>
            <>
                <div>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" color="inherit" aria-label="menu" >
                                <Menu style={{ color: '#FF0000', fontSize: 30 }} />
                            </IconButton>
                            
                            
                            <Typography variant="h6" >
                                記事作成
                            </Typography>
                            <Button color="inherit" className="ButtonStyle"  >Login</Button>
                        </Toolbar>
                    </AppBar>




                </div>
                <div>
                    <Menulist />

                </div>

            </>


        </React.Fragment>


    );

}

export default Frame;
