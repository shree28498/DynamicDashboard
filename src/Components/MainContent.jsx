import React,{useContext} from 'react'
import { UserContext } from '../App'
import Home from './Home';
import Payment from './Payment';
import Progress from './Progress';
import Activity from './Activity';
import Setting from './Setting';

const MainContent = () => {

    let comp = useContext(UserContext);

    let content;

    if (comp === "home") {
      content = <Home />
    } else if (comp === "payment") {
      content = <Payment />
    } else if (comp === "progress") {
      content = <Progress />
    } else if (comp === "activity") {
      content = <Activity />
    } else if (comp === "setting") {
      content = <Setting />
    }

    return (
        <>{content}</>
    );
}

export default MainContent
