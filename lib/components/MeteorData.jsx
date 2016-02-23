MeteorData = class MeteorData extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.c = Tracker.autorun(() => {
      const subs = this.props.subscribe()
      const state = this.props.fetch()
      state.loading = subs.some((sub)=>{ return !sub.ready() === true })
      this.setState(state);
    })
  }

  componentWillUnmount() {
    this.c.stop();
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return this.state ? this.props.render(this.state) : false
  }

};
