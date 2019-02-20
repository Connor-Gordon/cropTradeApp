import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { withAuth, api } from '../lib/auth'
import { getPost } from '../actions/listActions'
import { getProfile } from '../actions/chatActions'
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 36.16,
      lng: -115.13
    },
    zoom: 12
  };

 componentDidMount() {
    getPost(this.props.id)
    getProfile(api.getProfile().username)
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '25vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDvTFEzcEYcsObupcNe-qVcuX9oNuICqoI'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={36.16}
            lng={115.13}
            // text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default withAuth(SimpleMap)