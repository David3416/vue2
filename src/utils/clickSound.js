import buttonSfx from '../assets/sound/click.mp3'

const clickAudio = new Audio(buttonSfx)

export function playClickSound() {
  clickAudio.currentTime = 0
  clickAudio.play()
}
