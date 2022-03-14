// import {userService} from '../services/user.service.js'

const initialState = {
  dogs: [],
  dog: null,
  isDogNavOpen: false,
  currFilterBy: {
    breed: [],
    sex: [],
    size: [],
  },
  search: "",
  dogsSearch: ""
};

export function dogReducer(state = initialState, action) {
  let newState = state;

  switch (action.type) {
    case "SET_DOGS":
      return {
        ...state, dogs: [...action.dogs]
      };
    case "UPDATE_DOGS":
      return {
        ...state, dogs: state.dogs.map((dog) => {
          return (dog._id === action.dog._id) ? action.dog : dog
        })
      }
    case "SET_SEARCH":
      return {
        ...state, search: action.search
      }
    case "SET_DOGS_SEARCH":
      return {
        ...state, dogsSearch: action.dogsSearch
      }
    case "SET_FILTER":
      return {
        ...state, currFilterBy: { ...state.currFilterBy, ...action.currFilterBy }
      };
    case "SET_DOG":
      return {
        ...state, dog: {
          ...action.dog
        }
      };
    case "SET_BACKUP_DOG":
      const backupDog = state.dog
      return {
        ...state, backupDog
      }
    case "RESTORE_DOG":
      const dogBackup = state.backupDog
      return {
        ...state, dog: dogBackup
      };
    case "ADD_DOG":
      return {
        ...state, dogs: [...state.dogs, action.dog]
      }
    case "REMOVE_DOG":
      return {
        ...state, dogs: state.dogs.filter(dog => dog._id !== action.dogId)
      }
    case "SET_ACTIVE_MODAL":
      return {
        ...state, activeModal: action.activeModal
      }
    case "SET_DOG_NAV":
      return {
        ...state, isDogNavOpen: action.isDogNavOpen
      }
    case "SET_TASK_MODAL":
      return {
        ...state, isTaskDetailsOpen: action.isTaskDetailsOpen
      }
    //     case 'SET_FILTER':
    //         return { ...state, filterBy: action.filterBy }
    default:
      newState = state
  }
  // // groups[action.group].tasks:[...tasks]
  return newState;
}

// update task (groupIdtaskId){
//     finds group

//     dispatch(EDITGROUP)

// }