import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import './ChildrenListOpen.css'
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/guide';
import { getChild } from "../../store/child";
import { getChildActivities } from "../../store/child_activities";
import { getActivities } from "../../store/activities";


const ChildrenListOpen = ({user}) => {

    const dispatch = useDispatch();

    const [showList, setShowList] = useState(false);
    const [loadChildren, setLoadChilren] = useState(false);
    const guidesChildren = useSelector(state => state.guide.children);

    useEffect(() => {
        dispatch(getActivities());
    })
    useEffect(() => {
        dispatch(sessionActions.getGuideChildren(user.id));
    },[loadChildren])


    const updateCurrentChild = (childId) => {
        dispatch(getChild(childId));
        dispatch(getChildActivities(childId));
    }

    return (
    <>
        <div className='children-list-open-container'>
            <div className='list-children-container' >
                { showList ?
                <div className="arrow" onClick={(() => {setShowList(!showList); setLoadChilren(true)})}>
                    7
                </div>
                    :

                <div className="always-arrow-container">
                    <div className="showing-children-main">
                        <div className="showing-children-list">
                            {guidesChildren?.map(child => {
                                return <div className="child-name-container"  onClick={() => {updateCurrentChild(child.id); setShowList(!showList)}}>
                                        {child.firstName} {child.lastName}
                                        </div>
                            })}
                        </div>
                    </div>
                    <div className="arrow"
                        onClick={(() => {
                            setShowList(!showList); setLoadChilren(true)})}>
                        7
                    </div>
                  </div> }
            </div>
        </div>

    </>)

}

export default ChildrenListOpen;
