import styled from 'styled-components';

/**
 * Library.js styled components
 */

export const SearchContainer = styled.div`
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
export const SearchTitle = styled.p`
    font-size: 1.3rem;
    font-weight: 500;
`;

export const InputContainer = styled.div`
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

export const InputField = styled.input`
    border: 0;
    outline: none;
    padding: 10px 15px;
    width: 100%;
    background-color: white;
`;

export const OverlayIconContainer = styled.div`
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
        cursor: pointer;
    }
`;

export const ThumbnailOverlay = styled.div`
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

export const Thumbnail = styled.img`
    background-repeat: no-repeat;
    width: 100%;
    height: auto;
    -webkit-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

export const ThumbnailContainer = styled.div`
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

export const LibraryDetailsContainer = styled.div`
    padding: 20px 15px;
    text-align: center;
`;

export const TitleLabels = styled.p`
    font-weight: 500;
    font-size: 1rem;

    ${({isWhite}) => isWhite &&`
        color: #fff
    `}
`;

export const SubtitleLabels = styled.p`
    font-weight: 400;
    font-size: .8rem;

    ${({isWhite}) => isWhite &&`
        color: #fff
    `}
`;

/**
 * LibraryView.js styled components
 */

export const FirstHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #2196f3;
    padding: 18px 15px;
`;

export const SecondHeader = styled.div`
    display: flex;
    align-items: center;
    background-color: #eb8f31;
    padding: 20px 15px;
    column-gap: 30px;

    ${({bgColor}) => bgColor && `
        background-color: ${bgColor}
    `}
`;

export const DynamicLabel = styled.p`
    color: white;
    ${({color}) => color && `
        color: ${color};
    `}
    ${({weight, size}) => `
        font-weight: ${weight};
        font-size: ${size};
    `}
`;

export const CoverImage = styled.div`
    ${({bgImage}) => bgImage && `
        background-image: url(${bgImage});
    `}
    background-size: 100%;
    background-repeat: no-repeat;
    object-fit: contain;
    height: 300px;
`;