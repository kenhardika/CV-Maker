import { useEffect, useState } from 'react';
import './App.css';
import FormMain from './FormMain';
import ViewSide from './ViewSide';

function App() {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    address: ''
  });
  function dataForm(dataForm){
    setData(prevData => {
      return {
        ...prevData,
        firstName: dataForm.firstName,
        lastName: dataForm.lastName,
        address: dataForm.address,
      }
    });
  }
  useEffect(()=>{
    console.log(data.firstName + 'from app');
    return ()=>{
    }
  }, [data]);

  return (
    <div className="App">
      <header>Automatic CV Maker</header>
      <main>
        <form className="left-layout">
          <FormMain dataMain = {dataForm}/>

          <div className="submitButtonLayer">
            <button type="submit" id="submitBtn">
              Submit
            </button>
          </div>
        </form>
        <div className="right-layout">
          <ViewSide firstName = {data.firstName} lastName = {data.lastName} address = {data.address} />
        </div>
      </main>
      <footer> github <a href="https://github.com/kenhardika" target="_blank" rel="noopener noreferrer"> @kenhardika </a> </footer>
    </div>
  );
}

export default App;
