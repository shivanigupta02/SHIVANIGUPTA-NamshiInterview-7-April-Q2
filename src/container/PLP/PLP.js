import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'

function Plp() {
    const dispatch = useDispatch();

    useEffect(function(){
        dispatch({ type: 'FETCH_PRODUCTS' });
    },[])

  return (
    <div className="row">
      
    </div>
  );
}

export default Plp;
