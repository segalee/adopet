
import { utilService } from "./utils.service.js";
import { v4 as uuid } from 'uuid'
import { httpService } from "./http.service.js";
const axios = require("axios");




// const STORAGE_KEY = "dogDB";

export const dogService = {
  query,
  getById,
  saveDog,
  removeDog,
  // updateDogTitle,
  // getNewDog,
  // addNewTask,

};


// ****DOG - CRUD ***

async function query(filterByTxt = null) {
  const dogs = await httpService.get('dog/', filterByTxt);

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


async function removeDog(dogId) {
  try {
    return httpService.delete(`dog/${dogId}`);
  } catch (err) {
    console.log(err, 'err')
    throw new Error(err)
  }
}

// async function updateDogTitle(dog) {
//   await saveDog(dog)

// }



function _getDogs() {
  return [
    {

      "name": "Donatello",
      "description": "very friendly towards people, might be a bit aggresive to other dogs",
      "breed": "pitbull",
      "gender": "male",
      "dob": "Feb 01-19",
      "size": "large",
      "weight": 40,
      imgURLs: ["https://res.cloudinary.com/dwde5tdk3/image/upload/v1647103799/pitt_argzav.jpg"]
    },
    {

      "name": "Wonda",
      "description": "very friendly, likes to cuddle. Enjoys long distance trips",
      "breed": "great dane",
      "gender": "female",
      "dob": "Feb 09-16",
      "size": "large",
      "weight": 57,
      imgURLs: ["https://res.cloudinary.com/dwde5tdk3/image/upload/v1647103804/wonda_liwds5.jpg"]
    },

    {
      name: "Macy",
      description: "Lovely and energetic dog. Trained for needs",
      breed: "dalmatian",
      gender: "female",
      dob: "Jan 11-15",
      size: "medium",
      weight: 21,
      imgURLs: ["https://res.cloudinary.com/dwde5tdk3/image/upload/v1647103801/macy_rnka0e.jpg"]
    },
    {

      "name": "Mia",
      "description": "very friendly, likes to cuddle. Enjoys long distance trips",
      "breed": "great dane",
      "gender": "female",
      "dob": "Feb 09-16",
      "size": "large",
      "weight": 57,
      imgURLs: ["https://res.cloudinary.com/dwde5tdk3/image/upload/v1647341930/mia_oj9p3p.jpg"]
    },
    {

      "name": "Ricardo",
      "description": "very friendly, likes to cuddle. Enjoys long distance trips",
      "breed": "great dane",
      "gender": "male",
      "dob": "Feb 09-16",
      "size": "large",
      "weight": 57,
      imgURLs: ["https://res.cloudinary.com/dwde5tdk3/image/upload/v1647341947/ricardo_qbqrxr.jpg"]
    },
    {

      "name": "Vince",
      "description": "very friendly, likes to cuddle. Enjoys long distance trips",
      "breed": "great dane",
      "gender": "male",
      "dob": "Feb 09-16",
      "size": "large",
      "weight": 57,
      imgURLs: ["https://res.cloudinary.com/dwde5tdk3/image/upload/v1647341928/vince_dqnwmf.jpg"]
    },
    {

      "name": "Casey",
      "description": "very friendly, likes to cuddle. Enjoys long distance trips",
      "breed": "great dane",
      "gender": "female",
      "dob": "Feb 09-16",
      "size": "large",
      "weight": 57,
      imgURLs: ["https://res.cloudinary.com/dwde5tdk3/image/upload/v1647341934/casey_bai6hd.jpg"]
    },



  ]

}


