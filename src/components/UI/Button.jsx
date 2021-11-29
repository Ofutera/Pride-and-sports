import "./button.scss";

const Button = (props) => {
  return <a className='button' href={props.href}>{props.children}</a>;
};

export default Button;
