import React from 'react';
import Layout from '@theme/Layout';

const NotFound = () => (
    <Layout title="$=$; N07 F0und">
        <div className="noise-bg-faded no-underline-links px-4 pt-8 lg:py-0 h-screen overflow-y-auto">
            <section className="flex flex-col items-center justify-center py-32">
                <h1 className="font-jakarta text-7xl font-bold">$=$  -  N07 F0und</h1>
            </section>
            <div className="absolute bottom-0 left-0 right-0 text-center">
                <img src="/landing-page/travolta.gif" alt="Not Found GIF" />
            </div>

        </div>
    </Layout>
);

export default NotFound;
