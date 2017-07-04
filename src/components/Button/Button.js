import React, { Component } from 'react';
import PropTypes from 'prop-types';

let styles = {};
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
 class Button extends React.Component {
   render() {
     return (
       <header style={styles.header}>
         <a href="#" className="header__logo">
           <img src="images/logo.png" alt="Unleash" className="header__logo__img" />
           <span className="header__logo__text">Unleash</span>
         </a>
       </header>
     );
   }
 }

Button.defaultProps = {
  foo: 42,
};

Button.propTypes = {
  /** Description of prop "foo". */
  foo: PropTypes.number,
  /** Description of prop "baz". */
  baz: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
};

styles = {
  header: {
  	display: 'flex',
  	justifyContent: 'space-between',
  	alignItems: 'center',
  	borderBottom: '1px solid #e8e8e8',
  	padding: '0 18px',
  	height: '70px',
  	position: 'relative',
  	zIndex: '1000',
  	top: '0',
  	width: 'calc(100% - 36px)',
  	backgroundColor: '#fff',
  }
}

export default Button;
