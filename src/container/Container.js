import React from 'react';
import Search from '../components/search/Search';
import User from '../components/user/User';
import Actions from '../components/actions/Actions';
import Repository from '../components/repository/Repository';

const Container = () => (

    <div className="App container">
            <Search />
            <User />
            <Actions />
            <Repository />
            <Repository />
        </div>
)

export default Container;