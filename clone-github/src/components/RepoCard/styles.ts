import styled, {css} from 'styled-components';
import {RiBookmarkLine, RiStarLine} from 'react-icons/ri';
import {AiOutlineFork} from 'react-icons/ai';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    border: 1px solid var(--border);
    border-radius: 6px;
  
`;


export const Topside = styled.div``;


const IconCss = css`
    width: 16px;
    height: 16px;
    fill: var(--icon);
    flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookmarkLine)``;


export const Botside  = styled.div``;

export const StarIcon = styled(RiStarLine)``;

export const ForkIcon = styled(AiOutlineFork)``;
