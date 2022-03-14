import './App.css';
import React from 'react';
import AutosuggestionSelect from './components/AutosuggestionSelect/AutosuggestionSelect';

const App = () => {
  // const [ expandList, setExpandList] = useState(false);

  // const collapseDropdown = e => {
  //   if(expandList){
  //     e.stopPropagation();
  //     setExpandList(false)
  //   }
  // }

  //TODO collapse dropdown - pkt2
  return (
    <div className="app"> 
      <AutosuggestionSelect />
    </div>
  );
}

export default App;
