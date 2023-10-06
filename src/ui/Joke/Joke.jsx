import cn from "./Joke.module.scss";

function Joke(props) {
  return (
    <div className={cn.joke}>
      <p className={cn.text}>{props.setup}</p>
      <p className={cn.text}>{props.punchline}</p>
    </div>
  );
}

export default Joke;
