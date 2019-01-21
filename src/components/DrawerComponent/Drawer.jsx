import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './drawer.css'

import LogOutButton from '../LogOutButton/LogOutButton';


import { makeStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import WavesIcon from '@material-ui/icons/Waves';

const useStyles = makeStyles({
    list: {
        width: 250,
        backgroundColor: '#abd7cb',
        
    },
    fullList: {
        width: 'auto',
        
    },

});

function FinalDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,

    });

    const toggleDrawer = (side, open) => () => {
        setState({ ...state, [side]: open });
    };

    const sideList = (
        <div className={classes.list}>
            <List>
                <Link to="/search">
                    <ListItem button key='Search'>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Search" />
                    </ListItem>
                </Link>
                <Link to="/seenArt">
                    <ListItem button key='Seen Art'>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Seen Art" />
                    </ListItem>
                </Link>
            </List>

            <Divider />

            <List>
                <Link to="/home">
                    <ListItem button key='Home'>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </Link>
                <Link to="/info">
                    <ListItem button key='Info'>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Info" />
                    </ListItem>
                </Link>
                <Link to="/about">
                    <ListItem button key='About'>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>
                </Link>
                <LogOutButton />
            </List>
        </div>
    );



    return (
        <div className= "totalDiv">
            <Button className = "button" onClick={toggleDrawer('left', true)}><WavesIcon className="icon" /></Button>
            <Drawer className={classes.paper} open={state.left} onClose={toggleDrawer('left', false)}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={toggleDrawer('left', false)}
                    onKeyDown={toggleDrawer('left', false)}
                >
                    {sideList}
                </div>
            </Drawer>

        </div>
    );
}

export default connect()(FinalDrawer);