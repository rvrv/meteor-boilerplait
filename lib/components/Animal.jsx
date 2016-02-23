Animal = class Animal extends React.Component {

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
        {this.props.animal.name}
      </li>
    )
  }

}
