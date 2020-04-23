/**
 * Junkie props are props that depend heavily on each other
 * @note this is an experiment for conditional prop validation
 *  use at your own risk.
 * @param {Function} validator - can't be an arrow function, should always
 * return a boolean: true if junkie, false if clean.
 */
export default function JunkiePropsMixin(validator) {
  const isDev = (
    process.env.NODE_ENV === 'test' ||
    process.env.NODE_ENV === 'development'
  )
  const NS = '$_junkiePropsMixin'
  const BOUND_VALIDATOR = `${NS}_boundValidor`
  const HAS_WARNS = `${NS}_hasWarns`
  const EL_BINDINGS = `${NS}_elBindings`

  return {
    computed: {
      [BOUND_VALIDATOR]() {
        return validator.bind(this)
      },
      [HAS_WARNS]() {
        return isDev ? this[BOUND_VALIDATOR]() : false
      },
      [EL_BINDINGS]() {
        return isDev
          ? { 'data-junkie-props': this[HAS_WARNS] }
          : {}
      }
    }
  }
}
