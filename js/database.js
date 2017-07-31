function writeNewInfluencer(name, email, phone,message) {
  // A post entry.
  var influencerData = {
    name: name,
    phone:phone
    email: email,
    message: message,
  };

  // Get a key for a new Post.
  var newInfluencerKey = firebase.database().ref().child('influencers').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/influencers/' + newInfluencerKey] = influencerData;

  return firebase.database().ref().update(updates);
}

function writeNewBrand(name, email, phone,message) {
  // A post entry.
  var brandData = {
    name: name,
    phone:phone
    email: email,
    message: message,
  };

  // Get a key for a new Post.
  var newBrandKey = firebase.database().ref().child('brands').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/brands/' + newBrandKey] = brandData;

  return firebase.database().ref().update(updates);
}
