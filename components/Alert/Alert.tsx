/*
|--------------------------------------------------------------------------
| Alert components.
|--------------------------------------------------------------------------
|
| A collection of different alerts that can be used to notify the user about
| important events & state changes.
|
*/

import PropTypes from "prop-types";
import { ReactElement } from "react";
import { motion } from "framer-motion"; 
export function Alert({ type, children, position }: any): ReactElement {
    // Determine the classes of the alert depending ong the type given as a prop.
    const alertType = (): string => {
        switch (type) {
            case "error":
                return "app-alert-error";
            case "warning":
                return "app-alert-warning";
            case "success":
                return "app-alert-success";
            case "primary":
                return "app-alert-primary";
            case "primary2":
                return "app-alert-primary2";
            default:
                return "app-alert-error";
        }
    };
    const alertPosition = (): string => {
        switch (position) {
            case "fixedTop":
                return "app-alert-fixed alert-top";
            case "fixedBottom":
                return "app-alert-fixed alert-bottom";
            default:
                return "";
        }
    };
    const alertTypeClasses: string = alertType();
    const alertPositionClasses: string = alertPosition();
    const classes = `app-alert ${alertTypeClasses} ${alertPositionClasses} flex-center`;

    // Returns statement.
    return (
        <motion.div initial={{ opacity: 0, y: -85 }} animate={{ opacity: 1, y: 0 }} className={classes} role="alert">
            <p className="text"> {children}</p>
        </motion.div>
    );
}

Alert.propTypes = {
    children: PropTypes.any,
    type: PropTypes.string.isRequired,
    position: PropTypes.string,
};
