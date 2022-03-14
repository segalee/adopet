
import { utilService } from "./utils.service.js";
import { v4 as uuid } from 'uuid'
import { httpService } from "./http.service.js";
const axios = require("axios");




// const STORAGE_KEY = "dogDB";

export const dogService = {
  query,
  getById,
  saveDog,
  // removeDogFromWishlist,
  // updateDogTitle,
  // getNewDog,
  // addNewTask,

};


// ****DOG - CRUD ***

async function query() {
  const dogs = await httpService.get('dog/');
  console.log('dogs:', dogs);

  return dogs
}




async function getById(dogId) {
  const dog = await httpService.get(`dog/${dogId}`)
  return dog
}

async function saveDog(dogToSave) {
  if (dogToSave._id) {
    const savedDog = await httpService.put(`dog/${dogToSave._id}`, dogToSave);
    return savedDog
  } else {
    const addedDog = await httpService.post('dog/', dogToSave);

    return addedDog
  }
}

// async function updateDogTitle(dog) {
//   await saveDog(dog)

// }



function _getDogs() {
  return [
    {
      "_id": uuid(),
      "name": "Donatello",
      "description": "very friendly towards people, might be a bit aggresive to other dogs",
      "breed": "pitbull",
      "sex": "male",
      "dob": "Feb 01-19",
      "size": "large",
      "weight": 40
    },
    {
      "_id": uuid(),
      "name": "Wonda",
      "description": "very friendly, likes to cuddle. Enjoys long distance trips",
      "breed": "great dane",
      "sex": "female",
      "dob": "Feb 09-16",
      "size": "large",
      "weight": 57
    },


  ]

}

