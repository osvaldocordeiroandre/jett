import React, { useEffect } from 'react'

function Title(props) {

  const {title} = props;

  useEffect(() => {

    document.title = title;

  }, [title]);

  return (
    <></>
  )
};

export default Title
