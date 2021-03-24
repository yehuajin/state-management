import React from 'react'
import { addCount, reduceCount } from '../store/action/count'
import { connect } from 'react-redux'

function A({ dispatch, count }) {
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => {
        dispatch(addCount())
      }}>加</button>
      <button onClick={() => {
        dispatch(reduceCount())
      }}>减</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  }
}
// 将页面需要的state数据和dispatch作为组件props传入
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(A)

