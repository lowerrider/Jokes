import { useSelector } from "react-redux";
import { selectJokseList } from "../../redux/jokes/jokes.selector";
import Joke from "../Joke/Joke";

function Content() {
  const jokes = useSelector(selectJokseList);
  const renderContent = jokes?.map((el) => <Joke key={el.id} setup={el.setup} punchline={el.punchline} />);

  return <>{renderContent}</>;
}

export default Content;
