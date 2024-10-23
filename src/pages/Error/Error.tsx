import React from 'react';
import { Link } from 'react-router-dom';

const Error: React.FC = () => {
    return (
        <div className="mt-20 text-center">
            <h1 className="text-primary text-4xl font-bold">
                404 - Page Not Found
            </h1>
            <p className="mt-4 text-gray-600">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link
                to="/"
                className="text-secondary mt-6 inline-block hover:underline"
            >
                Go back to Home
            </Link>
        </div>
    );
};

export default Error;
