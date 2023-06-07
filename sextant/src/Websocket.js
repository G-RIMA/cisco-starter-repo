import React, { useEffect, useState } from 'react';
import { w3cwebsocket as WebSocketClient } from 'websocket';

const PacketLatency = () => {
  const [latency, setLatency] = useState(null);
  const socketURL = 'ws://localhost:55455';

  useEffect(() => {
    const client = new WebSocketClient(socketURL);

    client.onopen = () => {
      console.log('WebSocket connection established');
    };

    client.onmessage = (message) => {
      const packetTimestamp = parseInt(message.data);
      const currentTimestamp = new Date().getTime();
      const packetLatency = currentTimestamp - packetTimestamp;
      setLatency(packetLatency);
    };

    return () => {
      client.close();
    };
  }, []);

  return (
    <div className="packet-latency">
      <h2>Packet Latency</h2>
      {latency !== null ? (
        <p>Latency: {latency}ms</p>
      ) : (
        <p>Calculating latency...</p>
      )}
    </div>
  );
};

export default PacketLatency;
