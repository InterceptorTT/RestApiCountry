import React from 'react'

function useFetch(baseUrl) {
    function get(url){
        return fetch(baseUrl+url).then((res) => res.json())
    }

    return {get}
}

export default useFetch