import React, { Component } from 'react';
import LogoImg from '../../assets/logo.png';

let styles = {};

/**
 * Top header element
 */
 class Header extends React.Component {
   render() {
     const { headerLogo } = this.props;
     return (
       <header style={styles.header}>
         {headerLogo}
       </header>
     );
   }
 }

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
  },
}

export default Header;
