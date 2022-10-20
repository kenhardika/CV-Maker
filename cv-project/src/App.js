import { useState } from 'react';
import './App.css';
import FormSide from './FormSide';
import ViewSide from './ViewSide';

function App() {
  const initialForm = {
    firstName: '',
    lastName: '',
    address: ''
  }
  const [data, setData] = useState(initialForm);
  function dataFromForm(dataForm){
    setData(prevData => {
      return {
        ...prevData,
        firstName: dataForm.firstName,
        lastName: dataForm.lastName,
        address: dataForm.address,
      }
    });
  }

  return (
    <div className="App">
      <header>Automatic CV Maker</header>
      <main>
        <FormSide dataFormSide = {dataFromForm}/>
        <ViewSide firstName = {data.firstName} lastName = {data.lastName} address = {data.address} />
      </main>
      <footer> github <a href="https://github.com/kenhardika" target="_blank" rel="noopener noreferrer"> @kenhardika </a> </footer>
    </div>
  );
}

export default App;
