import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

function App() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null); // State to store user data

  const apiCall = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/users/${userId}`);
      const userData = await response.json();
      console.log(userData);
      setUser(userData); // Set user data in state
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  useEffect(() => {
    apiCall(); // Call apiCall function on the first render (initial load)
  }, [userId]); // Call apiCall whenever userId changes

  const handleButtonClick = () => {
    setUserId(prevUserId => prevUserId + 1); // Increment userId for demonstration
  };

  return (
    <>
      {user ? (
        <div className='container '>
          <Card>
            <Card.Header>Random User On Refresh</Card.Header>
            <Card.Body>
              <img style={{ height: '100px', borderRadius: '50%' }} src="https://robohash.org/Sheldon.png?set=set4" alt="" />
              <Card.Title>{user.firstName}</Card.Title>
              <div>
                <h2>User Details</h2>
                <div>
                  <p>First Name: {user.firstName} {user.maidenName} {user.lastName} </p>
                  <p>Age: {user.age}</p>
                  <p>address: {user.address.address}</p>

                  {/* Display other user details as needed */}
                </div>
              </div>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary" onClick={handleButtonClick}>Refresh</Button>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default App;
