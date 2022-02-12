import React from 'react'
import { useIntl } from 'react-intl'
import { LocalizedLink } from 'gatsby-plugin-usei18n'

import HeaderToggle from './header-toggle'

import {
  mainMenuWrapper,
  mainMenuList,
  mainMenuListItem,
  mainMenuLink
} from './main-menu.module.styl'

const ListLink = props => (
  <li className={mainMenuListItem}>
    <LocalizedLink className={mainMenuLink} to={props.to}>
      {props.children}
    </LocalizedLink>
  </li>
)

const MainMenu = ({ pageContext }) => {
  const intl = useIntl()
  return (
    <div className={mainMenuWrapper}>
      <ul className={mainMenuList}>
        <ListLink to="/logos">{intl.formatMessage({ id: 'menu.logo' })}</ListLink>
        <ListLink to="/packs">{intl.formatMessage({ id: 'menu.pack' })}</ListLink>
        <ListLink to="/news">{intl.formatMessage({ id: 'menu.news' })}</ListLink>
        <ListLink to="/about">{intl.formatMessage({ id: 'menu.about' })}</ListLink>
      </ul>
      <HeaderToggle pageContext={pageContext} />
    </div>
  )
}

export default MainMenu
