//*  Props

// Children props

export function getImageUrl(person, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

// Challenge 1 of 3:

/*
export function getImageUrl(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}
*/

// Challenge 2 of 3:

/*
// the site imgur returns the size of the image depend on s or b
export function getImageUrl(person, size) {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}
*/
