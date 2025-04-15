import styled from 'styled-components';

export const Profile = styled.img`
    height: ${({ $size }) => $size}px;
    width: ${({ $size }) => $size}px;
    border-radius: 50%;
    object-fit: cover;
`;