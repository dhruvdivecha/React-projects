import Counter from './components/Counter.jsx';
import FetchDataEffect from './components/FetchDataEffect.jsx';
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import JSXrules from './components/JSXrules.jsx';
import ProductList from './components/ProductList.jsx';
import Profile from './components/Profile.jsx';
import ShoppingList from './components/ShoppingList.jsx';
import TodoList from './components/TodoList.jsx';
import { UserProvider } from './components/UserContext.jsx'; 
import { UserProfile } from './components/UserProfile.jsx';
import { UpdateUser } from './components/UpdateUser.jsx';
import CounterReducer from './components/ReducerCounter.jsx';
import FocusInput from './components/FocusInput.jsx';
import Timer from './components/Timer.jsx';
import Accordian from './components/Accordian.jsx';
import { FormProvider } from './components/Formcont.jsx';
import Form from './components/Form.jsx';
import FormCard from './components/FormCard.jsx';


function App() {

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "2rem",
    padding: "2rem",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
    alignItems: "start"
  };
  return(
    <div style={containerStyle}>
      <Header />
      <JSXrules />
      <ProductList/>
      <Counter />
      <TodoList />
      <Profile />
      <ShoppingList />
      <FetchDataEffect />
      <UserProvider> 
        <UserProfile />
        <UpdateUser />
      </UserProvider>
      <CounterReducer />
      <FocusInput />
      <Timer />
      <Accordian />
      <FormProvider>
        <Form />
        <FormCard />
      </FormProvider>
      
      
      
      <Footer/>
      

    </div>
  );
};

export default App;