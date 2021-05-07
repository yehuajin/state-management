import React, { useMemo, useContext, useEffect, useState } from 'react';
import context from '../context';

function Connect(mapStateToProps) {
  return function (WrappedComponent) {
    function ConnectFunction() {
      const { state } = useContext(context);
      const [actualChildProps, setActualChildProps] = useState(null);
      useEffect(() => {
        const props = mapStateToProps(state);
        if (!actualChildProps) {
          setActualChildProps(props);
        } else {
          let changeFlag = false;
          const keys = Object.keys(props);
          keys.forEach((key) => {
            if (props[key] !== actualChildProps[key]) {
              changeFlag = true;
            }
          });
          if (changeFlag) {
            setActualChildProps(props);
          }
        }
      }, [state, mapStateToProps]);
      const renderedWrappedComponent = useMemo(
        () => <WrappedComponent {...actualChildProps} />,
        [WrappedComponent, actualChildProps]
      );
      return renderedWrappedComponent;
    }
    return ConnectFunction;
  };
}

export default Connect;
