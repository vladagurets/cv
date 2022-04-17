'use strict';

import { RANDOMIZED_IM_GOOD_AT_TAGS } from "./constants.mjs"

const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'

init()

function initTheme () {
  const isSystemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

  const currentTheme = getTheme() || (isSystemDark ? DARK_THEME : LIGHT_THEME)
  setTheme(currentTheme)
  localStorage.setItem('theme', currentTheme)
  setSwitchValue(currentTheme === DARK_THEME)
}

function getTheme () {
  return localStorage.getItem('theme')
}

function setTheme (theme) {
  document.body.className = `-${theme}`;
}

function setSwitchValue (checked) {
  document.getElementById('theme-select').checked = checked
}

function toggleTheme () {
  const theme = getTheme() === DARK_THEME ? LIGHT_THEME : DARK_THEME
  localStorage.setItem('theme', theme)
  setTheme(theme)
  setSwitchValue(theme === DARK_THEME)
}

function renderImGoodAtList() {
  const imGoodAtList = document.getElementById('im-good-at-list')

  RANDOMIZED_IM_GOOD_AT_TAGS.forEach(el => {
    const li = document.createElement('li')
    li.innerText = el
    imGoodAtList.appendChild(li)
  })
}

function init() {
  initTheme()
  renderImGoodAtList()

  window._toggleTheme = toggleTheme
}
