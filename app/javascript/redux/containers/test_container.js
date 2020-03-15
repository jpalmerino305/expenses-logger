import * as testActions from '../actions/test_actions';

import { connect } from 'react-redux';
import TestComponent from '../../components/TestComponent';

const mapStateToProps = (state) => ({
  loading: state.test.loading,
  message: state.test.message,
});

const mapDispatchToProps = (dispatch) => ({
  setLoading: (loading) => dispatch(testActions.setLoading(loading)),
  setMessage: (message) => dispatch(testActions.setMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);