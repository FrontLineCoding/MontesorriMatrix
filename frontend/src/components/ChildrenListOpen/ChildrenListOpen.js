import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import './ChildrenListOpen.css'
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/guide';


const ChildrenListOpen = ({user}) => {

    const dispatch = useDispatch();

    const [showList, setShowList] = useState(false);
    const [loadChildren, setLoadChilren] = useState(false);
    const guidesChildren = useSelector(state => state.guide.children);
    console.log('GuidesChidlren',guidesChildren);

    useEffect(() => {
        dispatch(sessionActions.getGuideChildren(user.id));
    },[loadChildren])



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
                                console.log(child);
                                return <div className="child-name-container">
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
