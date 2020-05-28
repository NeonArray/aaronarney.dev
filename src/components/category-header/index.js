import React from "react";

export default function CategoryHeader({ data }) {
    return (
        <div style={{ left: '-15px' }} className={`inline-block mb-6 pt-1 px-4 pb-6 relative ${data.category.toLowerCase()}`}>
            <h1 className="text-4xl font-bold leading-none mb-0">
                {data.category}
                <br />
                <span className="absolute block font-normal" style={{ bottom: '-12px' }}>
                    Articles
                </span>
            </h1>
        </div>
    );
}

// CategoryHeader.propTypes = {
//     data: PropTypes.shape({
//         category: PropTypes.string.isRequired,
//     }),
// };
