import React, { useEffect, useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function Dashboard() {
  const [data, setData] = useState('');

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('http://127.0.0.1:8000/api/display');
      setData(res.data);
    }
    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', }}>
      <div>
        <h1>
          Products available: {data}
        </h1>
      </div>
    </div>
  );
}