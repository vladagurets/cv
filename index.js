function initCornerRoundDivs () {
  const sections = document.querySelectorAll('section')
  const divAligns = ['top-left', 'top-right', 'bottom-left', 'bottom-right']
  sections.forEach(section => {
    for (const align of divAligns) {
      section.appendChild(createCornerDiv(align))
    }
  })
}

function createCornerDiv (align) {
  const el = document.createElement('div')
  el.classList.add('corner-div')
  el.classList.add(align)
  return el
}

function onSwitchChange () {
  document.body.classList.toggle('-dark');
}

initCornerRoundDivs()
