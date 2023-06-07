import React, { Component } from 'react';
import './Exhibit.css';
import IPDisplay from './Ip';
import PacketLatency from './Websocket';

class Exhibit extends Component {
    render() {
        return (
            <div className="Exhibit">
                <h2 className="ExhibitHeading">Your IP address</h2>
                <div className="ExhibitContent">
                    <IPDisplay ipAddressType="ipv4" />
                </div>
                <div className='ExhibitContent'>
                    <IPDisplay ipAddressType="ipv6" />

                </div>
                <div>
                    <PacketLatency />
                </div>
            </div>
        );
    }
}

export default Exhibit;