/** Simple class for validation inputs */
export default class Validation {
  /**
   * Validate email
   * @param {string} email
   */
  static validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /**
   *  Validate required
   * @param {string} value
   */
  static isRequired(value) {
    return value.length;
  }

  /**
   *  Validate min length
   * @param {string} value
   * * @param {number=} checker
   */
  static validateMinLength(value, checker = 3) {
    return value.length >= checker;
  }

  /**
   *  Validate max length
   * @param {string} value
   * * @param {number} checker
   */
  static validateMaxLength(value, checker) {
    if (!value || !checker) {
      throw new Error('Missing required parameter');
    }
    return value.length <= checker;
  }
}
