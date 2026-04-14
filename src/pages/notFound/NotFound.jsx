import React from 'react';

const NotFound = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-7xl font-bold text-[#244D3F]">404</h1>
                    <p className="py-6 text-lg">
                        Oops! Page not found 😢
                    </p>

                    <a href="/" className="btn bg-[#244D3F] text-white">
                        Go Back to Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NotFound;