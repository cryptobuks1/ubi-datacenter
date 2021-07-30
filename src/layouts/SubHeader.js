import React from 'react';
import styled from 'styled-components';
import './SubHeader.css';

function SubHeader() {
    return (
        <SubHeaderContainer>

        </SubHeaderContainer>
    )
}

const SubHeaderContainer = styled.div`
    background-image: url('/bg/bg-10.jpg');
    background-position: center center;
    background-size: cover;
    position: relative;
    height: 350px;
    object-fit: contain;
    color: white;
`;

export default SubHeader
