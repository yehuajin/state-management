import React from 'react';
import Connect from '../connect';

function D({ info }) {
  console.log('render D', info);
  return <div>{info?.count}</div>;
}
const mapStateToProps = (state) => {
  return {
    info: state.info,
  };
};
export default Connect(mapStateToProps)(D);
