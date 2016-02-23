const personPubFields = {
  name: 1
};

const getPeoplePub = function() {
  //Meteor._sleepForMs(1000);
  let query = {};
  Counts.publish(this, 'PeopleCount', People.find(query));
  return People.find(query, {fields: personPubFields});
};

Meteor.publish('getPeople', getPeoplePub);

const animalPubFields = {
  name: 1
};

const getAnimalsPub = function() {
  //Meteor._sleepForMs(1000);
  let query = {};
  Counts.publish(this, 'AnimalsCount', Animals.find(query));
  return Animals.find(query, {fields: animalPubFields});
};

Meteor.publish('getAnimals', getAnimalsPub);
