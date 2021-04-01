import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import coinDetailPage from './pages/coinDetailPage';
import coinSummaryPage from './pages/coinSummaryPage';
import Header from "./components/Header";
import "./App.css"
import { WatchListContextProvider } from './context/watchListContext';



const App = () => {
    return (
        <div>
            <WatchListContextProvider>
            <BrowserRouter>
            <Header/>
            <Route exact path='/' component = {coinSummaryPage}/>
            </BrowserRouter>
            </WatchListContextProvider>
        </div>
    )
}

export default App
