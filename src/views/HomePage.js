import React, { Fragment } from 'react';
import AddButton from '../components/AddButton';
import CardList from '../components/CardList';
import Welcome from '../components/Welcome';

const HomePage = ({data}) => (
    <Fragment>
        <Welcome
            username="World"
        />
        <CardList
            data={data} 
        />
        <AddButton/>
    </Fragment>
)

export default HomePage;