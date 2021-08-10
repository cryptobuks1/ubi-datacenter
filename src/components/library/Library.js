import React, { useEffect, useState } from 'react';
import './Library.css';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Utils from '../../Utilities/Utils';
import constant from '../../Utilities/Constant';

import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import LinkIcon from '@material-ui/icons/Link';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddIcon from '@material-ui/icons/Add';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    libraryItems: {
        padding: 0,
        border: '5px'
    },
    purplePaper: {
        backgroundColor: '#220071'
    },
    padding30: {
        padding: '30px'
    }
}));

function truncate(str) {
    return str.length > 50 ? str.substring(0, 47) + "..." : str;
}

function Library() {
    const thumbnailBaseURL = 'http://ubi-as.com/cdn/attachment/ubiiis/library/';
    const classes = useStyles();
    const [libraries, setLibraries] = useState([]);
    const [defaultLibrary, setDefaultLibrary] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredLibraries, setFilteredLibraries] = useState([]);
 
    //Fetch Data
    useEffect(() => {
        const f = new URLSearchParams();
        f.append('token', localStorage.getItem('token'));
        f.append('request_by', localStorage.getItem('id'));
        f.append('action', 'library_get_list');
        axios.post(Utils._getApi(constant.videogetalllibrary), f, {
            headers: ''
        }).then(response => {
            const status = response.data.status;
            if (status == 1) {
                const data = response.data.data;

                const index = data.findIndex(obj => obj.is_used == 1);
                
                setLibraries(data);

                setFilteredLibraries(data);

                if (index != -1) {
                    setDefaultLibrary(data[index]);
                }
            }
        })
    }, []);

    //Filter Search for Libraries
    useEffect(() => {
        if (search == '') {
            setFilteredLibraries(libraries);
        } else {
            let temp = libraries.filter( lib => {
                return lib.header_txt != null ? !search || lib.header_txt.toLowerCase().includes(search.toLowerCase()) : ''
            })
            setFilteredLibraries(temp); 
        }
    }, [search]);

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.padding30} elevation={0}>
                        <SearchContainer>
                            <SearchTitle>Search a Library</SearchTitle>
                            <SubtitleLabels>Get started by typing a library name</SubtitleLabels>
                        
                            <InputContainer>
                                <SearchIcon className='input__icon'/>
                                <InputField
                                    placeholder="Search a Library"
                                    onChange={e => setSearch(e.target.value)}
                                    type="text"
                                    autocomplete="on"
                                />
                            </InputContainer>
                        </SearchContainer>
                    </Paper>
                </Grid>

                <Grid item xs={6} sm={4} md={3} xl={4}>
                    <Paper className={classes.paper, classes.libraryItems, classes.purplePaper} elevation={0}>
                        <ThumbnailContainer>
                            <Thumbnail src="https://fixingport.com/wp-content/uploads/2019/12/TikTok-Says-Im-Not-Eligible.jpg"/>
                        
                            <ThumbnailOverlay>
                                <OverlayIconContainer>
                                    <Tooltip title="Create new Library" placement="top">
                                    <AddCircleIcon onClick={e => {
                                        e.preventDefault();

                                        alert(1);
                                    }} />
                                    </Tooltip>
                                </OverlayIconContainer>
                            </ThumbnailOverlay>
                        </ThumbnailContainer>
                        
                        <LibraryDetailsContainer>
                            <TitleLabels isWhite={true}>New Library</TitleLabels>
                            <SubtitleLabels isWhite={true}>Create & design new Library</SubtitleLabels>
                        </LibraryDetailsContainer>
                    </Paper>
                </Grid>

                {
                    
                    filteredLibraries.map((library) => (
                        <Grid item xs={6} sm={4} md={3} xl={4} key={library.id}>
                            <Paper className={classes.paper, classes.libraryItems} elevation={0}>
                                <ThumbnailContainer>
                                    <Thumbnail src={library.meta_thumbnail ? `${thumbnailBaseURL}${library.meta_thumbnail}` : 'https://fixingport.com/wp-content/uploads/2019/12/TikTok-Says-Im-Not-Eligible.jpg'}/>
                                
                                    <ThumbnailOverlay>
                                        <OverlayIconContainer>
                                            <Tooltip title="Edit Library" placement="top"><EditIcon /></Tooltip>
                                            <Tooltip title="Preview Library" placement="top"><VisibilityIcon /></Tooltip>
                                            <Tooltip title="Share Library" placement="top"><LinkIcon /></Tooltip>
                                            <Tooltip title="Delete Library" placement="top"><DeleteIcon /></Tooltip>
                                        </OverlayIconContainer>
                                    </ThumbnailOverlay>
                                </ThumbnailContainer>
                                
                                <LibraryDetailsContainer>
                                    <TitleLabels>{library.header_txt}</TitleLabels>
                                    {
                                        library.meta_key ? 
                                        <SubtitleLabels>{truncate(library.meta_key)}</SubtitleLabels> : <></>
                                    }
                                </LibraryDetailsContainer>
                            </Paper>
                        </Grid>
                    ))
                    
                }
            </Grid>
        </>
    )
}

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    background-color: #e6daff;
    border-radius: 5px;
    background-image: url('/images/svg/find.svg');
    background-size: 283px;
    background-repeat: no-repeat;
    background-position: right;

    @media screen and (max-width: 768px) {
        background-image: none;
    }
`;
const SearchTitle = styled.p`
    font-size: 1.3rem;
    font-weight: 500;
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    box-shadow: 0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%);
    border-radius: 5px;
    background: white;
    height: 50px;
    width: 400px;
    padding: 0 10px;
    margin-top: 27px;
    @media screen and (max-width: 768px) {
        width: 92%;
    }
`;

const InputField = styled.input`
    border: 0;
    outline: none;
    padding: 10px 15px;
    width: 100%;
    background-color: white;
`;

const OverlayIconContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    column-gap: 23px;

    > .MuiSvgIcon-root {
        z-index: 1;
        color: white;
        transition: all 0.4s;
    }
`;

const ThumbnailOverlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    opacity: 0;
    -webkit-transition: all .6s ease-in-out;
    -o-transition: all .6s ease-in-out;
    transition: all .6s ease-in-out;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    > ${OverlayIconContainer} {
        cursor: pointer;
        z-index: 1;
    }
`;

const Thumbnail = styled.img`
    background-repeat: no-repeat;
    width: 100%;
    height: auto;
    -webkit-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

const ThumbnailContainer = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
    text-align: center;
    max-height: 200px;
    cursor: pointer;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    &:hover ${ThumbnailOverlay} {
        opacity: .8;
    }

    &:hover ${Thumbnail} {
        transform: scale(1.2) translateX(0);
    }
`;

const LibraryDetailsContainer = styled.div`
    padding: 20px 15px;
    text-align: center;
`;

const TitleLabels = styled.p`
    font-weight: 500;
    font-size: 1rem;

    ${({isWhite}) => isWhite &&`
        color: #fff
    `}
`;

const SubtitleLabels = styled.p`
    font-weight: 400;
    font-size: .8rem;

    ${({isWhite}) => isWhite &&`
        color: #fff
    `}
`;

export default Library
