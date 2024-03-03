import './App.css';
import Profile from './components/Profile';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userSlice from './store/userSlice';
// 1. configureStore: 初始化 store
// 2. Provider:要包在最外層,才可以把 state 往下傳 給每個component

const store = configureStore({
  reducer:{
    // key:value
    user:userSlice
  }
})

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Profile/>
      </div>
    </Provider>
  
  );
}

export default App;
