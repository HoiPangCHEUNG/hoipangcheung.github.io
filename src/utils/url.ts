export const handleOpenNewTabClick = (link: string) => {
  if (!link) return
  window.open(link)
}

export const handleGotoClick = (goto: string) => {
  const el = document.getElementById(goto)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
