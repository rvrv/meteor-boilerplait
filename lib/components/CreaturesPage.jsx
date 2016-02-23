CreaturesPage = class CreaturesPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  shouldComponentUpdate() {
    return true;
  }

  renderPeople() {
    return this.props.people.map((person) => {
      return (
        <Person key={person._id} person={person}/>
      );
    });
  }

  renderAnimals() {
    return this.props.animals.map((animal) => {
      return (
        <Animal key={animal._id} animal={animal}/>
      );
    });
  }

  render() {
      if (this.props.loading) {
        return <div>Creatures loading...</div>
      }
      return (
        <div>
          <h2>People</h2>
          <ul>
          {this.renderPeople()}
          </ul>
          <h2>Animals</h2>
          <ol>
            {this.renderAnimals()}
          </ol>
        </div>
      )
    }
}
