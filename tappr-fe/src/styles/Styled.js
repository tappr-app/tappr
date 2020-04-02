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

export const FeaturedBeerLinks = styled.a`
    width: 18%;
    margin: 1%;
    font-size: 20px;
    color: black;
    text-decoration: none;
    &:hover {
      color: #F6C101;
    }
`;

export const BeerLinks = styled.a`
    width: 30%;
    margin: 1%;
    font-size: 20px;
    color: black;
    text-decoration: none;
    &:hover {
      color: #F6C101;
    }
`;

export const MyBrewsLinks = styled.a`
    width: 98%;
    margin: 1%;
    font-size: 20px;
    color: black;
    text-decoration: none;
    &:hover {
      color: #F6C101;
    }
`;

export const DashboardFlexFeaturedDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    border: 1px solid black;
    margin: 1%;
    padding: 1%;
`;

export const DashboardFlexDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1%;
`;

export const DashboardFeaturedDiv = styled.div`
    width: 100%;
    margin: 1%;
    overflow: auto;
`;

export const DiscoverBrewsFlexDiv = styled.div`
    width: 31%;
    margin: 1%;
    overflow: auto;
`;

export const BeerListDashboardDiv = styled.div`
    width: 64%;
    margin: 1%;
`;

export const MyBrewsDashboardDiv = styled.div`
    width: 31%;
    margin: 1%;
`;

export const BeerImage = styled.img`
    width: 85px;
    height: 250px;
    margin-left: 35%;
    margin-right: auto;
`;

export const DiscoverBeerImage = styled.img`
    width: 85px;
    height: 250px;
    margin-left: 25%;
    margin-right: auto;
`;

export const ImageDiv = styled.div`
  padding-left: 10%;
  padding-right: 10%;
`;

export const SectionTitle = styled.h2`
    font-size: 36px;
    text-align: center
`;

export const BeerName = styled.h5`
    font-size: 16px;
    text-align: center;
`;

export const BeerText = styled.p`
    font-size: 12px;
    text-align: center
`;

export const LoadingText = styled.p`
    font-size: 24px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`;

export const FavoriteButton = styled.button`
    width: 30%;
    font-size: 16px;
    border: 1px solid #F6C101;
    background: #C96E12;
    margin-left: 35%;
    border-radius: 10px;
    &:hover {
      color: black;
      background: #F6C101;
      cursor: pointer;
    }
`;