
export const Button = ({ variant = 'filled', size='medium', children, ...props }) => {
    
    //Define button styles
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded focus:outline-none transition-colors duration-200';
    const sizeStyles = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    };

    const variantStyles = {
        filled: 'px-4 py-2 rounded-md border border-secondary bg-secondary text-white text-bold hover:-translate-y-1 hover:shadow-md transition duration-200',
        outline: 'px-6 py-2 bg-transparent border border-primary text-white rounded-lg transform hover:-translate-y-1 transition duration-200'
    };


  return (
    <>
    <button className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]}`}
      {...props}>
        {children}
    </button>
    </>
  )
}
