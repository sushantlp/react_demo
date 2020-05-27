import InvalidError from "../invalidComponents";
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      negativeMessage: false,
      negativeText: undefined
    };
  }

  negativeFunction = (flag, text) => {
    this.setState({
      negativeMessage: flag,
      negativeText: text
    });
  };
  callLoginAction = (userEmail, userPassword) => {
    this.props.postLogin(userEmail, userPassword);
  };
  render() {
    return (
      <Container>
        {this.state.negativeMessage ? (
          <Container text style={{ marginBottom: "10px" }}>
            <Negative negativeText={this.state.negativeText} />
          </Container>
        ) : null}
        <Forget negativeFunction={this.negativeFunction} />
      </Container>
    );
  }
}
