import "./Button.scss";

function Button(props) {
  const { children, variant, className, size, active, disabled, onClick } =
    props;
  const classes = `
    ${className ? className : ''}
    ${variant ? `btn-${variant}` : ''}
    ${size ? `btn-${size}` : ''}
    ${active ? active : ''} ${
    disabled ? disabled : ''}
  `;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
