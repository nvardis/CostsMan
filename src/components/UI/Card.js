//Niv Vardi 209083278 | Orad Dostra 208939736
import "./Card.css";

const  Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
export default Card;
