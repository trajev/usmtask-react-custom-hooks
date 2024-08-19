import React, {useState, useEffect, useCallback} from 'react'


const useFetch = ( url ) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    const fetchData = useCallback( ()=>{
        fetch(url)
        .then( res=> res.json() )
        .then( data => { setData( data ); setLoading(false) } )
        .catch( err => { setError( err ); setLoading(false) } )
        
    } , [url])


    useEffect( ()=>{
        fetchData();
    }, [ url, data, loading, error, fetchData, setData] )

    // console.log( data )

  return [ data, loading, error] ;
}

export default useFetch