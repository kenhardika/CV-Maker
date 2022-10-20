import { useState } from 'react';
import './App.css';
import FormSide from './FormSide';
import ViewSide from './ViewSide';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');

  function dataFromForm(dataForm){
    console.log(dataForm)
    setFirstName(dataForm.firstName);
    setLastName(dataForm.lastName);
    setAddress(dataForm.address);
  }

  return (
    <div className="App">
      <header>Automatic CV Maker</header>
      <main>
        <FormSide dataFormSide = {dataFromForm}/>
        <ViewSide firstName = {firstName} lastName = {lastName} address = {address} />
      </main>
      <footer> github <a href="https://github.com/kenhardika" target="_blank" rel="noopener noreferrer"> @kenhardika </a> </footer>
    </div>
  );
}

export default App;
