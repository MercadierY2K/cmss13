/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

/**
 * Returns a function, that, as long as it continues to be invoked, will
 * not be triggered. The function will be called after it stops being
 * called for N milliseconds. If `immediate` is passed, trigger the
 * function on the leading edge, instead of the trailing.
 */
export const debounce = (fn, time, immediate = false) => {
  let timeout;
  return (...args) => {
    const later = () => {
      timeout = null;
      if (!immediate) {
        fn(...args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, time);
    if (callNow) {
      fn(...args);
    }
  };
};

/**
 * Suspends an asynchronous function for N milliseconds.
 *
 * @param {number} time
 */
export const sleep = (time) =>
  new Promise((resolve) => setTimeout(resolve, time));
