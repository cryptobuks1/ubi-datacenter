import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Utils from '../../Utilities/Utils';
import constant from '../../Utilities/Constant';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import { 
    FirstHeader, SecondHeader, CoverImage,
    DynamicLabel
} from './styles';
import './Library.css';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function LibraryView({openTrigger, closeTrigger, library}) {
    const mobileBreakpoint = useMediaQuery('(max-width:768px)');
    const thumbnailBaseURL = 'http://ubi-as.com/cdn/attachment/ubiiis/library/';

    const [libraryItems, setLibraryItems] = useState([]);

    useEffect(() => {
        const f = new URLSearchParams();
        f.append('token', 'vbatoken'); 
        f.append('request_by', '55'); 
        f.append('action', 'get_all_page');
        f.append('user_id', '55');
        f.append('library_id', library.id);
        axios.post(Utils._getApi(constant.videosgetassetspublic), f, {
            headers: constant.header
        }).then(response => {
            const status = response.data.status
            if (status == 1) {
                const data = response.data.data;
                setLibraryItems(data);
            } 
        })
    }, []); 
    
    return (
        <>
            <Dialog 
                fullScreen open={openTrigger} 
                TransitionComponent={Transition}
            >

                <FirstHeader>
                    <p className='text-white font-300 header__first_text cursor-pointer'
                        onClick={closeTrigger}
                    >
                        Back to admin
                    </p>
                    <p className='text-white font-300 header__first_text'>Your members don't see this bar</p>
                </FirstHeader>
                <SecondHeader bgColor={library.header_bg}>
                        <img src="http://ubi-as.com/ulogo.jpg" className='company-logo'/>

                        <DynamicLabel color={library.header_txt_color} weight={500} size={'1.2rem'}>{library.header_txt}</DynamicLabel>
                        {
                            mobileBreakpoint ?
                            <MenuIcon className='margin-l-auto text-white'/> :
                            <div className="header__second_container">
                                <DynamicLabel color={library.header_txt_color} weight={300} size={'.8rem'}>Share Link</DynamicLabel>
                                <DynamicLabel color={library.header_txt_color} weight={300} size={'.8rem'}>Company Profile Video Clips</DynamicLabel>
                            </div>
                        }
                        
                </SecondHeader>

                <CoverImage bgImage={
                    library.cover_image ? `${thumbnailBaseURL}${library.cover_image}` : 'http://ubi-as.com/default-cover-image.jpg'
                }/>

                {
                    libraryItems?.map((item) => (
                        <p key={item.id}>{item.title}</p>
                    ))
                }

            </Dialog>
        </>
    )
}

export default LibraryView
