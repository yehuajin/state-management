import React from 'react'
import { connect } from 'react-redux'

function B({count}) {
  return (
    <div>{count}</div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count.count
  }
}

export default connect(
  mapStateToProps,
)(B)
