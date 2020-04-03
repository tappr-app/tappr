import styled from 'styled-components'

// FORM STYLING

export const FormDiv = styled.div`
    // Outer most box
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 5px solid #F6C101;
    margin: 0 auto;
    width: 35%;
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
                    margin-left: 18%;
                }
            }
            button.form-action{
                background-color: #F6C101;
                border: 2px solid #000000;
            }
        }
    }
`;

export const OuterFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid #F6C101;
  margin: 0 auto;
  width: 45%;
  // height: 50vh;
  margin-bottom: 5%;
  background-color: #C96E12;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  color: #FFF897;
`;

export const FormTitle = styled.h1`
  background-color: #FAE96F;
  color: black;
  width: 100%;
  text-align: center;
  margin: 0 0 5% 0;
  padding: 4% 0;
`;

export const FormLabel = styled.label`
  align-self: flex-start;
`;

export const FormInput = styled.input`
  margin: 5% 0 0 0;
  align-self: flex-start;
  width: 50%;
`;

export const FormTextBox = styled.input`
  margin: 5% 5% 0 5%;
  width: 100%;
`;

export const FormButtonMainDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  align-content: center;
  width: 100%;
  margin: 5%;
`;

export const FormButtonDiv = styled.div`
  width: 35%;
`;

export const FormButton = styled.button`
  background-color: #F6C101;
  border: 2px solid #000000;
  border-radius: 5px;
  width: 100%;
  &:hover {
    background-color: black;
    color: #F6C101;
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.div`
  font-size: 14px;
  color: #800000;
`;

// NAVBAR / LINKS STYLING

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
    align-self: center;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 3%;
    font-size: 15px;
    text-decoration: none;
    text-align: center;
    color: #C96E12;
    &:hover {
      color: #F6C101;
    }
`;

export const ViewAllLink = styled.a`
    align-self: center;
    width: 100%;
    margin: 0 35% 3% 35%;
    font-size: 15px;
    text-decoration: none;
    text-align: center;
    color: #C96E12;
    &:hover {
      color: #F6C101;
    }
`;

export const DrinkscoverBeer = styled.div`
    width: 30%;
    margin: 1%;
    font-size: 20px;
    color: black;
    .actions-dashboard{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-content: center;
        .spinner-border{
            margin: 0 auto;
        }
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

// DASHBOARD STYLING

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
    width: 40%;
    font-size: 12px;
    border: 1px solid #F6C101;
    background: #C96E12;
    margin: 2% 30%;
    border-radius: 5px;
    &:hover {
      background-color: black;
      color: #F6C101;
      cursor: pointer;
    }
`;

export const ViewAllMainDiv = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const ViewAllDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

// ADD A BEER FORM STYLING

export const SearchDiv = styled.div`
    width: 100%;
`;

export const SearchResult = styled.button`
    width: 100%;
    font-size: 12px;
    border: none;
    background: white;
    color: #C96E12;
    border-radius: 5px;
    &:hover {
      background: black;
      cursor: pointer;
    }
`;

// SEARCH COMPONENT STYLING

export const InputDiv = styled.div`
    padding: 1%;
    margin: 1%;
    display: flex;
    justify-content: center;
`;

export const SearchInput = styled.input`
    width: 25%;
    height: 5vh:
    font-size: 16px;
    border-radius: 5px;
`;

export const SearchButton = styled.button`
    height: 5vh;
    font-size: 16px;
    background: #C96E12;
    border-radius: 5px;
`;

export const FillItUpLink = styled.a`
    align-self: center;
    width: 50%;
    color: #C96E12;
    margin: 0 auto;
    margin-bottom: 3%;
    font-size: 24px;
    text-decoration: none;
    text-align: center;
    &:hover {
      color: #F6C101;
    }
`;

//BEER DETAILS STYLING

export const BeerDetailsTitle = styled.h2`
    margin: 2% 0 2% 2%;
    font-size: 2.5rem;
`;

export const BeerDetailsDiv = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    margin: 0 auto;
    width: 50%;
    padding: 1%;
`;
export const BeerDetailsImage = styled.img`
    margin: 0 auto;
    max-width: 100%;
    object-fit: cover;
`;

export const BeerInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    h3, p{
        margin: 2%;
    }
`;

export const PairingCommentDiv = styled.div`
    display:flex;
    flex-direction: column;
    margin: 2% 0;
`;

export const CrudDiv= styled.div`
    display: flex;
    form{
        width: 45%;
        input{
            margin-right: 3%;
        }
    }
`;


export const AddDiv =styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 3%;
    form{
        input{
            margin: 0 3% 0 3%;
        }
    }
`;