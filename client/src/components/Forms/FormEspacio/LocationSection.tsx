import SelectLocation from '@comps/SelectLocation'
const GOOGLE_MAPS_API_KEY = 'AIzaSyASP-O7EJFd_vqNA27fIAZAAhHf7jAs70o'
export default function LocationSection() {
  return (
    <div className="">
      <SelectLocation
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}