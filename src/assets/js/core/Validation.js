/** Simple class for validation inputs */
export default class Validation {
  /**
   * Validate email
   * @param {string} email
   * @returns {boolean}
   */
  static validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /**
   *  Validate required
   * @param {string} value
   * @returns {boolean}
   */
  static isRequired(value) {
    return value.length;
  }

  /**
   *  Validate value min length
   * @param {string} value
   * * @param {number=} checker
   * @returns {boolean}
   */
  static validateMinLength(value, checker = 3) {
    return value.length >= checker;
  }

  /**
   *  Validate value max length
   * @param {string} value
   * * @param {number} checker
   * @returns {boolean}
   */
  static validateMaxLength(value, checker) {
    if (!checker) {
      throw new Error('Missing required parameter');
    }
    return value.length <= checker;
  }

  /**
   *  Validate input checkbox
   * @param {string} object
   * @returns {boolean}
   */
  static validateCheckbox(checkbox) {
    return checkbox.checked;
  }
}
