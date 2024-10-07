

function Button({
  children,
  type = 'button',
  bgColor = 'bg-blue-500',
  textColor = 'text-white',
  className = '',
  ...props
}) {
  return (
    <button
      type={type} className={`${className} ${bgColor} ${textColor} px-4 py-2 rounded`} {...props}
    >
      {children}
    </button>
  )
}

export default Button