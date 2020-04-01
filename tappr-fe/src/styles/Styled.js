import styled from 'styled-components'

export const FormDiv = styled.div`
    // Outer most box
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 5px solid #F6C101;
    margin: 0 auto;
    width: 25%;
    // height: 50vh;
    margin-bottom: 5%;
    background-color: #C96E12;
    .form-title{
        background-color: #FAE96F;
        width: 100%;
        text-align: center;
        margin: 0 0 5% 0;
        padding: 4% 0;
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        color: #FFF897;
        label{
            align-self: flex-start;
        }
        input{
            margin: 5% 0;
            align-self: flex-start;
            width: 50%;
        }
        .user-bio{
            margin: 5% 5%;
            width: 100%;
        }
        // outer button box
        .form-btn-main{
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            align-content: center;
            width: 100%;
            margin: 5%;
            .form-submit{
                width: 35%;
                .main{
                    width: 100%;
                }
            }
            .route-form{
                display: flex;
                flex-direction: column;
                width: 35%;
                label{
                    margin-bottom: 5%;
                    text-align: left;
                }
            }
            button.form-action{
                background-color: #F6C101;
                border: 2px solid #000000;
            }
        }
    }
`;

export const Navbar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    border-bottom: 2px solid #F6C101;
    padding: 1%;
    margin: 1%;
`;

export const NavLinks = styled.a`
    font-size: 20px;
    color: black;
    text-decoration: none;
    &:hover {
      color: #F6C101;
    }
`;