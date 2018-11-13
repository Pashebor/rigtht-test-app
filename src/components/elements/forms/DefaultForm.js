import React from 'react';

const DefaultForm = ({ children }) => {
  return (
    <form className={'form-default'}>
      { children }
    </form>
  );
};

export default DefaultForm;