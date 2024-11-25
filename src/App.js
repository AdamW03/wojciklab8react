import './App.css';
import NiePrawidlowyKomponent from "./module/NiePrawidlowyKomponent";
import PrawidlowyKomponent from "./module/PrawidlowyKomponent";
import HandleClickComponent from "./module/HandleClickComponent";
import HandleMouseOverComponent from "./module/HandleMouseOverComponent";
import ShowImageComponent from "./module/ShowImageComponent";
import LoadDataFromJsonComponent from "./module/LoadDataFromJsonComponent";
import UploadFileComponent from "./module/UploadFileComponent";
import ChangeStyleComponent from "./module/ChangeStyleComponent";

function App() {
  return (
    <div className="App">
      <h1>Zadanie nr 1</h1>
      <NiePrawidlowyKomponent />
      <PrawidlowyKomponent />

      <h1>Zadanie nr 2</h1>
      <HandleClickComponent />
      <HandleMouseOverComponent />
      <ShowImageComponent />
      <LoadDataFromJsonComponent />
      <UploadFileComponent />
      <ChangeStyleComponent />
    </div>
  );
}

export default App;
