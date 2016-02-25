const personPubFields = {
  name: 1
};

const getPeoplePub = function(filter) {
  //Meteor._sleepForMs(1000);
  let query = {};

  switch (filter) {
    case 'SHOW_POLITICIANS':
      query.group = 'politician';
      break;
    case 'SHOW_SPORTSMAN':
      query.group = 'sportsman';
      break;
    default:
      break;
  }

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
