import React, { useEffect, useState } from 'react';
import './Library.css';
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
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Tooltip from '@material-ui/core/Tooltip';
import LibraryView from './LibraryView';
import { 
    SearchContainer, SearchTitle, InputContainer,
    InputField, OverlayIconContainer, ThumbnailOverlay,
    Thumbnail, ThumbnailContainer, LibraryDetailsContainer,
    TitleLabels, SubtitleLabels
} from './styles';

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
    const [libraryOpen, setLibraryOpen] = useState(false);
    const [selectedLibrary, setSelectedLibrary] = useState({});
 
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

    const handleOpenDialog = (open, library) => {
        setLibraryOpen(open);
        setSelectedLibrary(library)
    }

    const handleCloseDialog = () => {
        setLibraryOpen(false);
    }

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
                                            <Tooltip title="Preview Library" placement="top"><VisibilityIcon onClick={() => handleOpenDialog(true, library)}/></Tooltip>
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

            <LibraryView openTrigger={libraryOpen} closeTrigger={handleCloseDialog} library={selectedLibrary}/>
        </>
    )
}

export default Library
