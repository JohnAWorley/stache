import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { makeStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

function TemporaryDrawer() {
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
                <Link to="/home">
                    

                    <ListItem button key='home'>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="home" />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const fullList = (
        <div className={classes.fullList}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <Button onClick={toggleDrawer('left', true)}>Open Left</Button>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
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

export default connect()(TemporaryDrawer);
