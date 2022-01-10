import React from 'react'
import styled from 'styled-components'

const NavContainer = styled.div`
height: 80px;
background-color: black;
color: white;
display:flex;
justify-content: space-between;
`
const NavItemWrap = styled.div`
display: flex;
justify-items: center;
align-items: center;
`
const NavItem = styled.h1`
margin: 10px 20px;
 vertical-align: middle;
`

function Navbar() {
    return (
        <NavContainer>
            <NavItemWrap>
                <NavItem>
                    MovieDB
                </NavItem>
            </NavItemWrap>

            <NavItemWrap>
                <NavItem>
                    Popular
                </NavItem>
            </NavItemWrap>

            <NavItemWrap>
                <NavItem>
                    Trending
                </NavItem>
            </NavItemWrap>

        </NavContainer>
    )
}

export default Navbar
