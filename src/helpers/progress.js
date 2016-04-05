import React from 'react';

export default ({ number })  => {

  const style = {
    width: '85%'
  }

  return (
    <div className="progress">
      <div className="determinate" style={style}>
      </div>
    </div>
  );
}
