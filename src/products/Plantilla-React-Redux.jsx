import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';


class {{[nombreclase]}} extends Component {
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
    nombre_accion : bindActionCreators(acciones, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)({{[nombreclase]}});
