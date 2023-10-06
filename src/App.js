import Buttons from "./ui/Buttons/Buttons";
import StatusContent from "./ui/StatusContent/StatusContent";
import cn from "./App.module.scss";

function App() {
  return (
    <div className={cn.app}>
      <div className={cn.content}>
        <Buttons />
        <div className={cn.container}>
          <StatusContent />
        </div>
      </div>
    </div>
  );
}

export default App;
