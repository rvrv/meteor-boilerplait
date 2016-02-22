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
