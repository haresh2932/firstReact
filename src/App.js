// import logo from './logo.svg';
import './App.css';
import Country from './user/components/Country';
import City from './user/components/City';
import CountryFun from './user/components/CountryFun';
import CityFun from './user/components/CityFun';
import PropsFun from './user/components/PropsFun';





function App() {
  return (
    <>
      <Country />
      <City />
      <CountryFun /> 
      <CityFun /> 
      <PropsFun name={"meet"} age={"20"}/>   
      <PropsFun name={"krish"} age={"20"}/>  
    </>
  );
}

export default App;
