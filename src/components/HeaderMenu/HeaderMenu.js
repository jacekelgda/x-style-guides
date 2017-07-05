import React, { Component } from 'react';

let styles = {};

/**
 * Header menu element
 */
 class HeaderMenu extends Component {
   render() {
     return (
       <nav style={styles.header__menu}>
         <ul style={styles.header__menu__list}>
          <li style={styles.header__menu__item}>
          	<a href="index.html" style={styles.header__menu__link}>
          		<span style={styles.header__menu__link__label}>Home</span>
          	</a>
          </li>
        	<li style={styles.header__menu__item}>
        		<a href="#" style={styles.header__menu__link}>
        			<span style={styles.header__menu__link__label}>My Path</span>
        		</a>
        	</li>
        	<li style={styles.header__menu__item}>
        		<a href="profiles.html" style={styles.header__menu__link}>
        		<span style={styles.header__menu__link__label}>Profiles</span></a>
        	</li>
        	<li style={styles.header__menu__item}>
        		<a href="#" style={styles.header__menu__link}>
        		<span style={styles.header__menu__link__label}>Goals</span></a>
        	</li>
        	<li style={styles.header__menu__item}>
        		<a href="#" style={styles.header__menu__link}>
        		<span style={styles.header__menu__link__label}>Skills</span></a>
        	</li>
        </ul>
      </nav>
     );
   }
 }

styles = {
  header__menu: {
	   lineHeight: '70px',
  },
  header__menu__list: {
  	padding: '0',
  	margin: '0',
  	listStyle: 'none',
  },
  header__menu__item: {
  	display: 'inline-block',
  	marginRight: '2rem',
  },
  header__menu__link: {
  	display: 'inline-block',
  	font: '600 14px/70px \'Montserrat\', sans-serif',
  	textTransform: 'uppercase',
  	textDecoration: 'none',
  	color: '#b8b7bc',
  	borderBottom: '2px solid transparent',
  	transition: 'color .3s, border-bottom-color .3s',
  },
}

export default HeaderMenu;
