import { dogService } from '../services/dog.service.js';
import { utilService } from '../services/utils.service.js';


// **DOG ACTIONS**

export function loadDogs(currFilterBy, skip = 0) {

  return async (dispatch) => {
    try {
      const dogs = await dogService.query(currFilterBy, skip);
      dispatch({
        type: "SET_DOGS",
        dogs: dogs
      });
    } catch (err) {
      console.log('Cannot load dogs:', err);
      _setUserMsg(dispatch, 'Failed to load dogs, please check your internet connection')
    }
  }
}

export function loadDog(dogId, currFilterBy = null) {

  return async (dispatch) => {
    try {
      const dog = await dogService.getById(dogId, currFilterBy);
      dispatch({
        type: "SET_DOG",
        dog: dog
      });
    } catch (err) {
      console.log('Cannot load dog:', err);
      _setUserMsg(dispatch, 'Failed to load dog, please check your internet connection')
    }
  }
}

export function addDog(user) {
  const newDog = dogService.getNewDog(user)

  return async (dispatch) => {
    try {
      const savedDog = await dogService.saveDog(newDog)
      dispatch({
        type: "ADD_DOG",
        dog: {
          _id: savedDog._id,
          title: savedDog.title
        },
      })
    } catch (err) {
      console.log('Cannot add dog:', err);
      _setUserMsg(dispatch, 'Failed to add dog, please check your internet connection')
    }
  }
}



export function removeDog(dogId) {
  return async (dispatch) => {
    try {
      dispatch({
        type: "REMOVE_DOG",
        dogId: dogId
      })
      await dogService.removeDog(dogId);
    } catch (err) {
      console.log('Cannot remove dog:', err);
      _setUserMsg(dispatch, 'Failed to remove dog, please check your internet connection')
    }
  }
}

export function updateFilter(currFilterBy) {

  return (dispatch) => {

    dispatch({
      type: "SET_FILTER",
      currFilterBy: {
        ...currFilterBy
      }
    })

  }
}

export function updateSearch(search) {
  return (dispatch) => {
    dispatch({
      type: "SET_SEARCH",
      search: {
        search
      }
    })

  }
}
export function updateDogsSearch(search) {
  return (dispatch) => {
    dispatch({
      type: "SET_DOGS_SEARCH",
      dogsSearch: {
        search
      }
    })

  }
}

export function setDogNav(isDogNavOpen) {
  return (dispatch) => {
    dispatch({
      type: "SET_DOG_NAV",
      isDogNavOpen: isDogNavOpen
    })
  }
}

export function saveDog(dogToSave) {
  return async (dispatch) => {
    _setBackupDog(dispatch)
    try {
      dispatch({
        type: "SET_DOG",
        dog: dogToSave,
      });
      await dogService.saveDog(dogToSave)
    } catch (err) {
      _setUserMsg(dispatch, 'Failed to save dog, please check your internet connection')
      console.log('Err in saving dog:', err);
    }
  }
}


// **DOG BACK UP **

function _setBackupDog(dispatch) {
  dispatch({
    type: "SET_BACKUP_DOG"
  })
}


function _setUserMsg(dispatch, txt) {
  dispatch({ type: 'SET_MSG', msg: { txt } })


}

// **MODALS ACTIONS**

export function setActiveModal(activeModal) {

  return (dispatch) => {
    dispatch({
      type: "SET_ACTIVE_MODAL",
      activeModal: activeModal
    });
  };
}

export function setTaskModal(isTaskDetailsOpen) {
  return (dispatch) => {
    dispatch({
      type: "SET_TASK_MODAL",
      isTaskDetailsOpen: isTaskDetailsOpen
    })
  }
}