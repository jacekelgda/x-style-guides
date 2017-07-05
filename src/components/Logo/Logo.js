import React, { Component } from 'react';
import LogoImg from '../../assets/logo.png';

let styles = {};

/**
 * Unleash logo component
 */
 class Logo extends React.Component {
   render() {
     return (
       <div>
         <a href="#" style={styles.header__logo}>
           <img src={LogoImg} alt="Unleash" style={styles.header__logo__img} />
           <span style={styles.header__logo__text}>Unleash</span>
         </a>
       </div>
     );
   }
 }

styles = {
  header__logo: {
  	display: 'flex',
  	textDecoration: 'none',
  },
  header__logo__img: {
  	display: 'inline-block',
  	width: '36px',
  	height: '46px',
  },
  header__logo__text: {
		display: 'inline-block',
		marginLeft: '13px',
		font: "800 22px/46px 'Montserrat', sans-serif",
		textTransform: 'uppercase',
		color: '#0c0c0c',
	}
}

export default Logo;
