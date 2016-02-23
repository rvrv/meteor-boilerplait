const creaturesComponent = (subs) => {
  return (
    <MeteorData
        subscribe = { () => {
            return [
              Meteor.subscribe('getPeople'),
              Meteor.subscribe('getAnimals'),
            ]
          }
        }
        fetch = { () => {
            return {people: People.find().fetch(), animals: Animals.find().fetch()}
          }
        }
        render = { ({loading, people, animals}) => {
            return <CreaturesPage loading={loading} people={people} animals={animals} />
          }
        }
      />
  )
}

FlowRouter.notFound = {
    action: function() {
        ReactLayout.render(NotFoundPage);
    }
};

FlowRouter.route('/', {
  name: 'main',
  action() {
    ReactLayout.render(MainLayout, {content: <MainPage/>});
  }
});

FlowRouter.route('/creatures', {
  name: 'creatures',
  action() {
    return ReactLayout.render(MainLayout, {content: creaturesComponent()});
  }
});
