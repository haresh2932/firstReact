// import logo from './logo.svg';
// import './App.css';
import Country from './user/components/Country';
import City from './user/components/City';
import CountryFun from './user/components/CountryFun';
import CityFun from './user/components/CityFun';
import PropsFun from './user/components/PropsFun';
// import Counter from './user/components/Counter';
import CounterClass from './user/components/CounterClass';
import Medicines from './user/containers/Medicines/Medicines';
import Doctors from './user/containers/Doctors/Doctors';
import Timer from './user/containers/timer/Timer';
import TimerFun from './user/containers/timer/TimerFun';
import Product from './user/containers/Products/Product';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import { configStore } from './redux/store';
import Counter from './user/containers/Counter/Counter';





function App() {
  const store=configStore()
  return (
    <>
      <Provider store={store}>
        {/* <Country/> */}
        {/* <City /> */}
        {/* <CountryFun/>  */}
        {/* <Medicines/> */}
        {/* <Doctors/> */}
        {/* <Timer/> */}
        {/* <TimerFun/>    */}
        {/* <Product /> */}
        <Counter />
      </Provider>
    </>
  );
}

export default App;
