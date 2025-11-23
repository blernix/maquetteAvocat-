export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePhone(phone: string): boolean {
  // Accepte les formats français : 01 XX XX XX XX, 01.XX.XX.XX.XX, 01XXXXXXXX, +33XXXXXXXXX
  const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
  return phoneRegex.test(phone)
}

export function validateRequired(value: string): boolean {
  return value.trim().length > 0
}

export function validateMinLength(value: string, minLength: number): boolean {
  return value.trim().length >= minLength
}
