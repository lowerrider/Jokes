import { useSelector } from "react-redux";
import { selectRequestStatus } from "../../redux/jokes/jokes.selector";
import Content from "../Content/Content";
import loadingImage from "../../image/Rocket.gif";
import errorImage from "../../image/Error.gif";
import { REQUEST_STATUS } from "../../constans";

function StatusContent() {
  const status = useSelector(selectRequestStatus);

  if (status === REQUEST_STATUS.loading) {
    return (
      <div>
        <img src={loadingImage} alt="loading" />
        <h3>loading...</h3>
      </div>
    );
  }
  if (status === REQUEST_STATUS.error) {
    return (
      <div>
        <img src={errorImage} alt="error" />
        <h3>Error, try later</h3>
      </div>
    );
  }

  return <Content />;
}

export default StatusContent;
