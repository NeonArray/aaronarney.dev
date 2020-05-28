import React from 'react';

export default function Callout({ message }) {
    return (
        <div className="md:max-w-copy post-copy block text-white bg-pink shadow-callout font-bold my-8 mx-auto max-w-max p-5 uppercase">
            { message }
        </div>
    );
}
//
// Callout.propTypes = {
//     message: PropTypes.string.isRequired,
// };
