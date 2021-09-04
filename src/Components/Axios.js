import React from 'react'
import axios from "axios";


const MSG_API_REST_GET_ALLFOOD = "http://localhost:8080/getAllFood/";

const getAllFood = () => {
    return axios.get(MSG_API_REST_GET_ALLFOOD)
}

export{
    getAllFood
}