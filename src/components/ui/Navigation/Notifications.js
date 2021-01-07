import React from 'react';
import NotificationsIcon from "../../Icons/NotificationsIcon";
import DropDownMenu from "./DropDownMenu";

const Notifications = () => {
    return (
        <React.Fragment>
            <button
                className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                aria-label="Notifications"
                aria-haspopup="true"
            >
                <NotificationsIcon/>
            </button>
            {/*<DropDownMenu options={companyAccounts}/>*/}
        </React.Fragment>
    );
};

export default Notifications;