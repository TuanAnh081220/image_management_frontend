import React, {useState} from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/styles";
import red from "@material-ui/core/colors/red";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {useHistory} from "react-router-dom";

import './Album.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: window.innerWidth * 0.15,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const Album = ({
                   index,
                   id,
                   title,
                   createdAt,
                   totalImages,
                   thumbnailUrl,
                   onClickRenameAction,
                   onClickDeleteAction
               }) => {

    const history = useHistory();

    const classes = useStyles();

    const [actionAnchorEl, setActionAnchorEl] = useState(null);

    const handleCloseActionMenu = () => {
        setActionAnchorEl(null)
    };

    const handleClickActionMenu = (event) => {
        setActionAnchorEl(event.currentTarget);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="numbers" className={'albumThumbnail'}>
                        {totalImages}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon onClick={handleClickActionMenu}/>
                    </IconButton>
                }
                title={title}
                subheader={createdAt}
            />
            <CardMedia
                className={'media'}
                image={thumbnailUrl}
                title="Album thumbnail"
                onClick={() => history.push(`/albums/${id}`)}
            />
            <Menu
                id="account"
                anchorEl={actionAnchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(actionAnchorEl)}
                onClose={handleCloseActionMenu}
            >
                <MenuItem onClick={() => onClickRenameAction(index)}>Rename</MenuItem>
                <MenuItem onClick={() => onClickDeleteAction(index)}>Delete</MenuItem>
            </Menu>
        </Card>
    )
}

export default Album;