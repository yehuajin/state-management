import React from 'react'
import { connect } from 'react-redux'
import { setTime } from '../store/action/time'
import moment from 'moment'

function C({time, dispatch}) {
  return (
    <div>
      <button onClick={() => {
        const date = moment(new Date()).format('YY-MM-DD HH:mm:ss')
        dispatch(setTime(date))
        }}>更新时间</button>
      <div>时间：{moment(new Date()).format('YY-MM-DD HH:mm:ss')}</div>
   </div>
  );
}

const mapStateToProps = (state) => {
  return {
    time: state.time.time
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(C)
