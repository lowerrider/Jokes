import { fetchJoke, fetchJokesList } from "../../redux/jokes/jokes.thunk";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatus } from "../../redux/jokes/jokes.selector";
import { REQUEST_STATUS } from "../../constans";
import cn from "./Buttons.module.scss";

function Buttons() {
  const dispatch = useDispatch();

  function oneJokeClick() {
    dispatch(fetchJoke());
  }
  function tenJokeClick() {
    dispatch(fetchJokesList());
  }
  const status = useSelector(selectRequestStatus);
  const loadingStatus = REQUEST_STATUS.loading;

  return (
    <div className={cn.buttons}>
      <button disabled={status === loadingStatus} onClick={oneJokeClick} className={cn.one}>
        <p>Tell a joke</p>
      </button>
      <button disabled={status === loadingStatus} onClick={tenJokeClick} className={cn.ten}>
        <p>Tell a jokes</p>
      </button>
    </div>
  );
}

export default Buttons;
