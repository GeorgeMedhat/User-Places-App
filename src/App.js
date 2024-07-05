import React from "react"
import { BrowserRouter as Router , Route, Routes , Navigate} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace"
import MainNavigation from "./shared/Components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
const App = ()=>{

    return (<Router>
        <MainNavigation/>
        <main>
        <Routes>
            <Route path="/" Component={Users} exact/> 
            <Route path="/:userId/places" Component={UserPlaces}/>
            <Route path="/places/new"  Component={NewPlace} exact/>
            <Route path="/places/:placeId"  Component={UpdatePlace} exact/>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </main>
        
    </Router>)
}

export default App;