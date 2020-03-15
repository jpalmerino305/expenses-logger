import React from 'react';
import PropTypes from 'prop-types';

class TestComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { setLoading, setMessage } = this.props;
    console.log('%c=== Mounted: components/TestComponent ===', 'color: green; font-weight: bold;');

    setLoading(true);
    setMessage('');

    setTimeout(() => {
      setLoading(false);
      setMessage('Hello from test component!');
    }, 5000);
  }

  render () {
    const { loading, message } = this.props;

    return (
      <React.Fragment>
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
          { loading ? 'Loading...' : message }
        </h1>
      </React.Fragment>
    );
  }

}

TestComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  setLoading: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired
};

export default TestComponent;