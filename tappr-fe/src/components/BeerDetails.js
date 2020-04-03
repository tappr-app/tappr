import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
  addPairing,
  addBeerComment, 
  getProfile, 
  updateBeerComment,
  deleteBeerComment, 
  updateFoodPairing,
  deleteFoodPairing
 } from '../actions/index';
import UserNavbar from './UserNavbar';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { BeerLinks } from '../styles/Styled';
import { Button } from 'react-bootstrap';


const BeerDetails = (props) => {
  const params = useParams();
  const activeId = window.localStorage.getItem('user_id')

  // state for updating the pairings list anyone can do this
  const [updatingPairings, setUpdatingPairings] = useState(false)
  const [updatePairings, setUpdatePairings] = useState({
    id: NaN,
    food_name: '',
  })
  // State for adding a pairing
  const [editingPairing, setEditingPairing] = useState(false);
  const [newPairing, setNewPairing] = useState({
    food_name: ''
  });
  // State for adding a comment
  const [editingComment, setEditingComment] = useState(false);
  const [newComment, setNewComment] = useState({
    comment: '',
    beer_id: params.id,
    user_id: activeId
  })
  // State for adding a comment, ternary below has it so only the user who left the comment can edit
  const [updatingComment, setUpdatingComment] = useState(false)
  const [updateComment, setUpdateComment] = useState({
    id: NaN,
    comment: '',
    beer_id: params.id,
    user_id: activeId
  })
  // Local beer state
  const [thisBeer, setThisBeer] = useState()
  const [beerReady, setBeerReady] = useState(false)

  useEffect(()=>{
    axiosWithAuth().get(`/beers/${params.id}`)
      .then(res=>{
        setThisBeer(res.data);
        setBeerReady(true);
      })
      .catch(err=> console.log(err));
  }, []);
  
  // put props actions in dependency?
  // onClick handler for Update Button
  const updateBeer = (id) => {
    props.history.push(``)
  };

  // ===== Pairing CRUD functions ===== //
  const handleEditPairing = e =>{
    e.preventDefault();
    setEditingPairing(true)
  }
  const handleChangesPairing = e =>{
    setNewPairing({
        ...newPairing,
        [e.target.name]: e.target.value
    })
};

const handleAddPairing = e =>{
  props.addPairing(thisBeer.beer.id, newPairing);
  setNewPairing({
    food_name: ''
  });
  setEditingPairing(false)
}

const handleUpdatingPairings = e =>{
  e.preventDefault();
  setUpdatingPairings(true);
}

const handleUpdatePairingsChanges = e =>{
  setUpdatePairings({
    ...updatePairings,
    [e.target.name]: e.target.value
  })
}

const handleUpdatePairingSubmit = (beerId, pairing) =>{
  props.updateFoodPairing(beerId, pairing);
  setUpdatingPairings(false);
  axiosWithAuth().get(`/beers/${params.id}`)
  .then(res=>{
    setThisBeer(res.data);
    setBeerReady(true);
  })
  .catch(err=> console.log(err));
}

const handleDeleteFoodPairing = (beerId, pairing) =>{
  props.deleteFoodPairing(beerId, pairing);
  setUpdatingPairings(false)
  axiosWithAuth().get(`/beers/${params.id}`)
  .then(res=>{
    setThisBeer(res.data);
    setBeerReady(true);
  })
  .catch(err=> console.log(err));
}
// ===== Comment CRUD functions ===== //
const handleEditComment = e =>{
  e.preventDefault();
  setEditingComment(true)
}
const handleChangesComments = e =>{
  setNewComment({
      ...newComment,
      [e.target.name]: e.target.value
  })
};
const handleAddComment = e =>{
  e.preventDefault();
  props.addBeerComment(newComment);
  setNewComment({
    comment: '',
    beer_id: params.id,
    user_id: activeId    
  })
  setEditingComment(false)
}
const handleUpdatingComment = e =>{
  e.preventDefault();
  setUpdatingComment(true);
}
const handleUpdateCommentChanges = e =>{
  setUpdateComment({
    ...updateComment,
    [e.target.name]: e.target.value
  })
}

const handleUpdateComment = (beerId, comment) =>{
  props.updateBeerComment(beerId, comment);
  setUpdatingComment(false)
  axiosWithAuth().get(`/beers/${params.id}`)
  .then(res=>{
    setThisBeer(res.data);
    setBeerReady(true);
  })
  .catch(err=> console.log(err));
}

const handleDeleteComment = (beerId, comment) =>{
  props.deleteBeerComment(beerId, comment);
  setUpdatingComment(false)
  axiosWithAuth().get(`/beers/${params.id}`)
  .then(res=>{
    setThisBeer(res.data);
    setBeerReady(true);
  })
  .catch(err=> console.log(err));
}

  return (
    <div>
      <UserNavbar />
      <h2>BeerDetails</h2>
      {beerReady ? 
        <div>
          <img src={thisBeer.beer.image_url} alt='beer-picture' />
          <h3>{thisBeer.beer.name}</h3>
          <p>{thisBeer.beer.tagline}</p>
          <p>{thisBeer.beer.description}</p>
          <p>ABV: {thisBeer.beer.abv}</p>
          <BeerLinks href={`/update-a-beer/${params.id}`}>Update This Beer</BeerLinks>
          {thisBeer.food === [] ? <p>Pairings: None yet! Add some below.</p>
          :<div>
          <p>Pairings:</p>
          <ul>{thisBeer.food.map(element => {
            return (
              <div key={element.id}>
               {updatingPairings ? 
               <div>
                <li key={element.id}>{element.food_name}</li>
                <form onSubmit={e=>{
                  e.preventDefault();
                  handleUpdatePairingSubmit(params.id, {...updatePairings, id: element.id});
                }}>
                  <input name='food_name' onChange={handleUpdatePairingsChanges} />
                  <Button variant="warning" type='submit'>update</Button>
                </form>
                <Button variant="danger" onClick={e =>{
                  e.preventDefault();
                  handleDeleteFoodPairing(params.id, {...updatePairings, id: element.id})
                }}>X</Button> 
                </div>
                : 
                <div>
                  <li key={element.id}>{element.food_name}</li>
                </div>
               }
              </div>
            )
          })}</ul>
          {updatingPairings ? <Button variant="danger" onClick={()=> setUpdatingPairings(false)}>Cancel</Button> : <Button variant="info" onClick={handleUpdatingPairings}>Edit Pairings</Button> }
          </div>
          }
          {thisBeer.comments === [] ? <p>Comments: No Comments. Add some below!</p>
          :
          <div>Comments:{thisBeer.comments.map(element => {
            return (
            <div key={element.user_id}>
              <p key={element.id}>{element.comment}</p>
              {parseInt(activeId) === element.user_id ?
              <div>
              {updatingComment ? (
              <form onSubmit={e =>{
              e.preventDefault();
              handleUpdateComment(params.id, {...updateComment, id: element.id})
              }}>
                <input name='comment'  onChange={handleUpdateCommentChanges}/>
                <Button variant="warning" type='submit'>update</Button>
                <Button variant="danger" onClick={()=> setUpdatingComment(false)}>cancel</Button>
              </form>) 
              : <Button variant="info" onClick={handleUpdatingComment}>edit</Button>
              }
              <Button variant="danger" onClick={e => {
                e.preventDefault();
                handleDeleteComment(params.id, {...updateComment, id: element.id})
              }}>delete</Button>
              </div> : <div></div>}

            </div>
            )
          })}</div>}  
          {editingPairing ? 
          (<form onSubmit={handleAddPairing}>
            <label>Food name:</label>
            <input name='food_name' onChange={handleChangesPairing}/>
            <Button variant="warning" type='submit'>Post</Button>
            <span onClick={()=> setEditingPairing(false)}>Cancel</span>
          </form>)
          : (<Button variant="info" onClick={handleEditPairing}>Add Pairing</Button>)
          }
          {editingComment ? 
          (<form onSubmit={handleAddComment}>
            <label>Leave Comment:</label>
            <input name='comment' onChange={handleChangesComments}/>
            <Button variant="warning" type='submit'>Post</Button>
            <span onClick={()=> setEditingComment(false)}>Cancel</span>
          </form>)
          : (<Button variant="info" onClick={handleEditComment}>Add Comment</Button>)
          }                      
        </div>  
      : <div>Loading brewski</div>
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isPosting: state.isPosting,
    active_user: state.active_user,
    isDeleting: state.isDeleting,
    isPutting: state.isPutting
  };
};

export default connect(mapStateToProps, { addPairing, addBeerComment, getProfile, updateBeerComment, deleteBeerComment, updateFoodPairing, deleteFoodPairing })(BeerDetails);