Header = class Header extends React.Component {
  creaturesList() {
    FlowRouter.go('creatures');
  }

  main() {
    FlowRouter.go('main');
  }

  render() {
    return (
      <header>
        <a href="" onClick={this.main}>Main</a> | <a href="" onClick={this.creaturesList}>Creatures</a>
      </header>
    );
  }
};
