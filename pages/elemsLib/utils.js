//*  Props

// Children props

/*
export function getImageUrl(person, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}
*/

// Gallery

export function getImageUrl(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}

// Challenge 2 of 3:
/*
// the site imgur returns the size of the image depend on s or b
export function getImageUrl(person, size) {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}
*/

//* Chemists list
/*
export function getImageUrl(person) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}
*/
