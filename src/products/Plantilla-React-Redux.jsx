import React, { Components, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import * as productActions from '../actions/productActions';
import * as cartActions from '../actions/cartActions';
import ProductDetail from './ProductDetail';

class {{[nombreclase]}} extends Components {
  constructor (props) {
    super (props);
  }

  render () {

  }
}

{{[nombreclase]}}.propTypes = {

}

function mapStateToProps (state) {
  return {

  };
}

function mapDispatchToProps (dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)({{[nombreclase]}});
