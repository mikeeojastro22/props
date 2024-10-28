import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import User from './components/User/User';
import bankUsers from './assets/bankUsers.json';

function App() {

  const bankEmployee = {
    name: "Patrick Star",
    balance: 1000000,
    email: "patrick@email.com"
  }

  const address = {
    addressNo: 3509,
    street: "Star Street",
    city: "Bikini Bottom"
  }

  return (
    <div className="App">
      <SearchBar></SearchBar>
      {/* Whatever attribute we place in the component, it will be referred to as props */}
      {/* syntax is variableNameToBeAccessedInTheComponent={variable to be passed} */}
      {/* <User employee={bankEmployee} address={address} /> */}
      <User employee={bankEmployee} address={address}></User>
      {
        // bankUsers - array
        // map - traverses through our array
        // user - representation of each element in our bankUsers array
        bankUsers.map((user) => {
          return <div key={user.id}> {user.name} {user.balance} </div>
        })
      }
    </div>
  );
}

export default App;
