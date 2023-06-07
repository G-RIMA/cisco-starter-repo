import React, { useEffect, useState } from 'react';

const IPDisplay = ({ ipAddressType }) => {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await fetch('https://api64.ipify.org?format=json');
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    fetchIpAddress();
  }, []);

  return (
    <div>
      <h2>Your {ipAddressType === 'ipv6' ? 'IPv6' : 'IPv4'} Address:</h2>
      <p>{ipAddress}</p>
    </div>
  );
};

export default IPDisplay;
