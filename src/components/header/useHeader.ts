import { useState, useEffect } from 'react'

export function useHeader() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [location, setLocation] = useState('')

  function handleLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    })
  }

  useEffect(() => {
    handleLocation()
  }, [])

  useEffect(() => {
    if (latitude && longitude) {
      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt-br`

      fetch(geoApiUrl)
        .then((response) => response.json())
        .then(({ city, principalSubdivisionCode }) => {
          setLocation(`${city} - ${principalSubdivisionCode?.split('-')[1]}`)
        })
    }
  }, [latitude, longitude])

  return {
    location,
  }
}
