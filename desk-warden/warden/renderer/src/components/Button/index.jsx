import { useMemo } from 'react'

import './index.scss'

const Button = (props = {}) => {
  const {
    children = null,
    rounded = false,
    className = '',
    type = '',
    ...otherProps
  } = props

  const buttonClasses = useMemo(() => {
    const classes = []

    switch (`${type || ''}`.trim().toLowerCase()) {
      case 'primary':
        classes.push('primary')
        break
      case 'secondary':
        classes.push('secondary')
        break
      case 'success':
        classes.push('success')
        break
      case 'danger':
        classes.push('danger')
        break
      case 'warning':
        classes.push('warning')
        break
      case 'info':
        classes.push('info')
        break
      default:
        classes.push('transparent')
        break
    }

    if (rounded) classes.push('rounded')

    return `${classes.join(' ')} `
  }, [type, rounded])

  return useMemo(
    () =>
      children ? (
        <section id="Button">
          <button
            className={`${buttonClasses}${className}`.trim()}
            {...otherProps}
          >
            {children}
          </button>
        </section>
      ) : (
        <></>
      ),
    [children, className, buttonClasses, otherProps],
  )
}

export default Button
