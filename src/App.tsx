import Alert from "./components/ui/Alert";
import { alertsData } from "./data/alerts_data";

function App() {
  return (
    <>
      {alertsData.map((alertData) => (
        <Alert
          key={alertData.title}
          title={alertData.title}
          description={alertData.description}
          Icon={alertData.Icon}
          color={alertData.color}
        />
      ))}
    </>
  );
}

export default App;
