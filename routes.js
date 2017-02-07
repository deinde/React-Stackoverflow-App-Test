import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './src/components/app';
import SearchBar from './src/containers/searchbar';
import PostShow from './src/components/popup_show';



export default(
<Route path='/' component={App} >
 <IndexRoute component={SearchBar}/>
 <Route path='popup/:id' component={PostShow}/>
</Route>
)


