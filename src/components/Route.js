import { useEffect, useState } from "react";

const Route = ( { path, children } ) => {
    const [currentLocation, setCurrentLocation] = useState( window.location.pathname );

    const onLocationChange = ( event ) => {
        setCurrentLocation( window.location.pathname );
    }

    useEffect( () => {
        window.addEventListener( 'popstate', onLocationChange )

        return () => {
            window.removeEventListener( 'popstate', onLocationChange );
        }
    }, [] )

    return ( currentLocation === path ) ? children : null;

};

export default Route;