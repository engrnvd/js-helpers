import { _textWidth } from './string-helper'

export function _getInputTextSize(el: HTMLInputElement) {
  let styles = getComputedStyle(el)
  return _textWidth(el.value.toString(), `${styles.fontWeight} ${styles.fontSize} ${styles.fontFamily}`)
}
