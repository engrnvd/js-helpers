import { decrypt, encrypt } from './encryption-helper'

export const Storage = {
  get(key, defaultValue = '', encryption = false) {
    let value = localStorage.getItem(key)
    if (!encryption) return value || defaultValue
    return decrypt(value) || defaultValue
  },
  remove(key) {
    return localStorage.removeItem(key)
  },
  set(key, value, encryption = false) {
    if (!value) return this.remove(key)
    if (encryption) value = encrypt(value)
    return localStorage.setItem(key, value)
  },
  getObject(key, encryption = false) {
    let obj = this.get(key, null, encryption)
    try {
      obj = JSON.parse(obj)
      return obj
    } catch (e) {
      return null
    }
  },
  setObject(key, value, encryption = false) {
    if (!value) return this.remove(key)
    return this.set(key, JSON.stringify(value), encryption)
  },
}
