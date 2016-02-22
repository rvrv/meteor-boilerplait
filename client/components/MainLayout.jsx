MainLayout = class MainLayout extends React.Component {

  propTypes: {
    content: React.PropTypes.object.isRequired,
  }

  render() {
    return (
      <div>
        <Header/>
        <main>
          {this.props.content}
        </main>
        <Footer/>
      </div>
    )
  }
};
