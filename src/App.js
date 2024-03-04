// import logo from './logo.svg';
import './App.css';
import Country from './user/components/Country';
import City from './user/components/City';
import CountryFun from './user/components/CountryFun';
import CityFun from './user/components/CityFun';
import PropsFun from './user/components/PropsFun';
import Counter from './user/components/Counter';
import CounterClass from './user/components/CounterClass';
import Medicines from './user/containers/Medicines';
import Doctors from './user/containers/Doctors';





function App() {
  return (
    <>
      {/* <Country/> */}
      {/* <City /> */}
      {/* <CountryFun/>  */}
      {/* <Medicines/> */}
      <Doctors/>
      {/* <CityFun /> 
      <PropsFun name={"meet"} age={"20"}/>   
      <PropsFun name={"krish"} age={"20"}/>  
      <Counter/>
      <CounterClass/> */}
    </>
  );
}

export default App;
