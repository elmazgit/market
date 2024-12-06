"use client"

import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  useEffect(() => {
    // Fetch data from backend API
    fetch(apiUrl + "/api/greet")
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Hello from frontend - {message}</h1>
    </div>
  );
}
