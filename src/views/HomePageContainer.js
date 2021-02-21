import React, {Component, Fragment, useEffect, useState} from 'react';
import Loading from '../components/Loading';
import url from '../config';
import useFetch from '../hooks/useFetch';
import HomePage from './HomePage';
import ServerError from './ServerError';


const HomePageContainer = () => {

    const { data, loading, error } = useFetch(`${url}/data.json`);

    if(loading)
        return <Loading/>
    if(error)
        return <ServerError/>
    return <HomePage data={data} />

}

export default HomePageContainer;