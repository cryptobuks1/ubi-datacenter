import React from 'react'
import styled from 'styled-components'
import EmailIcon from '@material-ui/icons/Email';
import EventNoteIcon from '@material-ui/icons/EventNote';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function SidebarContent() {
    return (
        <SidebairContainer>
            <BasicInfoContainer>

                <UserImage 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt=""
                />

                <ColumnLabelContainer>
                    <TitleLetter hasCursor={true}>Miko Dinopol</TitleLetter>
                    <SubLabelLetter>Software Developer</SubLabelLetter>
                    <IconedSubLabelLetter>
                        <EmailIcon />
                        amm@ulticonbuildersinc.com
                    </IconedSubLabelLetter>
                    <SignoutButton>Sign Out</SignoutButton>

                </ColumnLabelContainer>

            </BasicInfoContainer>

            <Divider/>

            <ActionItems iconColor={'orange'}>
                <EventNoteIcon/>
                <ColumnLabelContainer>
                    <TitleLetter fontSize={`.9rem`} hasCursor={true} hasHover={true}>Calendar</TitleLetter>
                    <SubLabelLetter>View events</SubLabelLetter>
                </ColumnLabelContainer>
            </ActionItems>
            <ActionItems iconColor={'#27da27'}>
                <BusinessCenterIcon/>
                <ColumnLabelContainer>
                    <TitleLetter fontSize={`.9rem`} hasCursor={true} hasHover={true}>JO Supplier</TitleLetter>
                    <SubLabelLetter>Add a JO supplier</SubLabelLetter>
                </ColumnLabelContainer>
            </ActionItems>
            <ActionItems iconColor={'#6993FF'}>
                <LocalShippingIcon/>
                <ColumnLabelContainer>
                    <TitleLetter fontSize={`.9rem`} hasCursor={true} hasHover={true}>Aggregates Supplier</TitleLetter>
                    <SubLabelLetter>Add an aggregates supplier</SubLabelLetter>
                </ColumnLabelContainer>
            </ActionItems>

            <ActionItems iconColor={'#ea4444'}>
                <LocationOnIcon/>
                <ColumnLabelContainer>
                    <TitleLetter fontSize={`.9rem`} hasCursor={true} hasHover={true}>Project</TitleLetter>
                    <SubLabelLetter>Add a project</SubLabelLetter>
                </ColumnLabelContainer>
            </ActionItems>
        </SidebairContainer>
    )
}

const SidebairContainer = styled.div`
    background: white;
    border: 0;
    height: 100vh;
    width: 350px;
    padding: 30px 25px;
    overflow: hidden;
`;

const TitleLetter = styled.span`
    font-weight: 500;
    color: var(--fade-secondary-color);
    transition: 0.1s;

    ${({hasCursor}) => hasCursor && 
    `
        cursor: pointer;
    `}
    ${({fontSize = '1.2rem'}) => 
    `
        font-size: ${fontSize};
    `}
    ${({hasHover}) => hasHover && 
    `
        &:hover {
            color: #6993FF !important;
        }
    `}
`;

const BasicInfoContainer = styled.div`
    display: flex;
    column-gap: 21px;
`;

const UserImage = styled.img`
    border-radius: 7px;
    height: 125px;
    width: 125px;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: contain;
`;

const ColumnLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const SubLabelLetter = styled.span`
    font-weight: 500;
    font-size: .9rem;
    color: #ada8a8;
    word-break: break-all;
`;

const IconedSubLabelLetter = styled.span`
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: .9rem;
    color: #ada8a8;
    column-gap: 7px;

    > .MuiSvgIcon-root {
        color: #6993FF;
    }
`;

const SignoutButton = styled.button`
    padding: 5px 0;
    width: 100px;
    color: #6993FF;
    background-color: #E1E9FF;
    border-color: transparent;
    transition: 0.3s;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;

    &:hover {
        color: #fff;
        background-color: #6993FF
    }
`;

const Divider = styled.div`
    border-bottom: 2px dashed #c9c9ca;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const ActionItems = styled.div`
    display: flex;
    align-items: center;
    column-gap: 15px;
    margin-bottom: 30px;
    cursor: pointer;

    > .MuiSvgIcon-root {
        background: #ececec;
        padding: 10px;
        border-radius: 5px;
        width: 24px;
        height: 24px;
        
        ${({iconColor}) => 
        `
            color: ${iconColor};
        `}
    }
`;

export default SidebarContent
