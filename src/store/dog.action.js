import { dogService } from '../services/dog.service.js';
import { utilService } from '../services/utils.service.js';


// **DOG ACTIONS**

export function loadDogs() {
  return async (dispatch) => {
    try {
      const dogs = await dogService.query();
      console.log('dogs:', dogs);

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

export function updateDogTitle(dogToSave) {
  const miniDog = { title: dogToSave.title, _id: dogToSave._id }

  return async (dispatch) => {
    try {
      _setBackupDog(dispatch)
      dispatch({
        type: "SET_DOG",
        dog: dogToSave,
      })
      dispatch({
        type: "UPDATE_DOGS",
        dog: miniDog,
      })
      await dogService.updateDogTitle(dogToSave)
    } catch (err) {
      _restoreDog(dispatch)
      _setUserMsg(dispatch, 'Failed to update title, please check your internet connection')
      console.log('Cannot update dog title:', err);
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
      _restoreDog(dispatch)
      _setUserMsg(dispatch, 'Failed to save dog, please check your internet connection')
      console.log('Err in saving dog:', err);
    }
  }
}



// **GROUP ACTIONS**

export function saveGroup(groupToSave, dogToSave) {

  const groupIdx = dogToSave.groups.findIndex(
    (group) => groupToSave.id === group.id
  )
  dogToSave.groups[groupIdx] = groupToSave

  return saveDog(dogToSave)

}

export function addGroup(dogToSave, user) {
  const newGroup = dogService.getNewGroup(user)
  dogToSave.groups.unshift(newGroup);

  return saveDog(dogToSave)
  // return async (dispatch) => {
  //   _setBackupDog(dispatch)
  //   try {
  //     dispatch({
  //       type: "SET_DOG",
  //       dog: dogToSave,
  //     });
  //     await dogService.saveDog(dogToSave)
  //   } catch (err) {
  //     _restoreDog(dispatch)
  //     _setUserMsg(dispatch, 'Failed to save dog, please check your internet connection')
  //     console.log('Err in saving dog:', err);
  //   }
  // }
}

export function deleteGroup(groupId, dogToSave) {
  const filteredGroups = dogToSave.groups.filter((group) => {
    return group.id !== groupId;
  });
  dogToSave.groups = filteredGroups

  return saveDog(dogToSave)
}


// **TASK ACTIONS**

export function deleteTask(taskId, groupId, dogToSave) {
  const groupIdx = dogToSave.groups.findIndex((group) => groupId === group.id);
  const filteredTasks = dogToSave.groups[groupIdx].tasks.filter((task) => {
    return task.id !== taskId;
  })
  dogToSave.groups[groupIdx].tasks = filteredTasks;

  return saveDog(dogToSave)

}


export function addTask(taskTitle, groupId, dogToSave, user, activity) {

  activity.id = utilService.makeId()
  activity.byMember = user
  const newTask = dogService.addNewTask(taskTitle, activity)

  const groupIdx = dogToSave.groups.findIndex((group) => groupId === group.id);
  dogToSave.groups[groupIdx].tasks.push(newTask);
  return saveDog(dogToSave)

}

export function saveTask(taskToSave, groupId, dogToSave, user, activity, comment) {



  if (activity) {
    activity.id = utilService.makeId()
    activity.byMember = user
    taskToSave.activities = [activity, ...taskToSave.activities.slice(0, 5)]
  }
  if (comment) {
    comment.id = utilService.makeId()
    comment.byMember = user
    taskToSave.comments = [comment, ...taskToSave.comments.slice(0, 5)]
  }

  const groupIdx = dogToSave.groups.findIndex((group) => groupId === group.id);
  const updatedtasks = dogToSave.groups[groupIdx].tasks.map((task) => {
    return task.id === taskToSave.id ? taskToSave : task
  });
  dogToSave.groups[groupIdx].tasks = updatedtasks
  return saveDog(dogToSave)


}


// **DOG BACK UP **

function _setBackupDog(dispatch) {
  dispatch({
    type: "SET_BACKUP_DOG"
  })
}

function _restoreDog(dispatch) {
  dispatch({
    type: "RESTORE_DOG"
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