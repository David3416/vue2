export function smoothScroll(targetEl, duration = 1000) {
  const headerEl = document.querySelector('.menu')
  const target = document.querySelector(targetEl)

  if (!target) return

  const headerElHeight = headerEl ? headerEl.clientHeight : 0

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerElHeight

  const startPosition = window.pageYOffset
  let startTime = null

  const ease = (t, b, c, d) => {
    t /= d / 2

    if (t < 1) {
      return (c / 2) * t * t + b
    }

    t--

    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  const animation = (currentTime) => {
    if (startTime === null) {
      startTime = currentTime
    }

    const timeElapsed = currentTime - startTime

    const run = ease(timeElapsed, startPosition, targetPosition - startPosition, duration)

    window.scrollTo(0, run)

    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
}
