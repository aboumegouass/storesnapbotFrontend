import PropTypes from "prop-types";
import { ReactElement } from "react";

const AuthSessionStatus = ({ status, ...props }: any): ReactElement => (
    <>
        {status && (
            <div
                className={`font-medium text-sm text-green-600`}
                {...props}>
                {status}
            </div>
        )}
    </>
)

AuthSessionStatus.propTypes = {
    status: PropTypes.any,
};
export default AuthSessionStatus