Person = class Person extends React.Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <li>
        {this.props.person.name}
      </li>
    )
  }

}
