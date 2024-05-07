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
import Counter from './user/containers/Counter/Counter';
// import {configStore} from './redux/store'
import CounterSlice from './user/containers/CounterSlice/Counter';
// import CounterSlice from './redux/Slice/counterSlice';
import { configStore } from './redux/store';
import { createContext, useContext } from 'react';
import Example from './user/containers/Example/Example';
import Example2 from './user/containers/Example/Example2';

export default function App() {
  const store = configStore()
  return (
    <>
      <Provider store={store}>
          {/* <Product /> */}
          {/* <Example /> */}
          <Example2/>
      </Provider>
    </>
  );
}



// export default App;
