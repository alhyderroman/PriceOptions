import { IoCheckmarkOutline } from "react-icons/io5";
import PropTypes from 'prop-types';
const Feature = ({feature}) => {
    return (
        <div >
            
            <p className="flex items-center"><IoCheckmarkOutline className="text-red-950 mr-4"></IoCheckmarkOutline> {feature}</p>
        </div>
    );
};

Feature.propTypes={
    feature:PropTypes.string
}

export default Feature;