import './User.css';

// props work like a parameter
function User(props){
    const { employee, address } = props;
    const { name, balance, email } = employee;
    const { addressNo, street, city } = address;

    return (
        <div className='user'>
            <h1>{name} <i className="fa-solid fa-pencil"></i></h1>
            <h1>{balance}</h1>
            <h1>{email}</h1>
            <h1>{addressNo} {street} {city}</h1>
        </div>
    );
}

export default User;