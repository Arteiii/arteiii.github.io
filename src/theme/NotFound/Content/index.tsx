// @ts-ignore
import React from 'react';
// @ts-ignore
import clsx from 'clsx';
// @ts-ignore
import type {Props} from '@theme/NotFound/Content';
// @ts-ignore
import Heading from '@theme/Heading';

export default function NotFoundContent({className}: Props): JSX.Element {
    return (
        <main className={clsx('container margin-vert--xl', className)}>
            <div className="row">
                <div className="col col--6 col--offset-3">
                    <Heading as="h1" className="hero__title text-6xl text-center">
                        404s & Heartbreaks
                    </Heading>
                    <p className="text-center">
                        Not Found
                    </p>
                    <p className="text-center">
                        Please contact the owner of the site that linked you to the
                        original URL and let them know their link is broken.
                    </p>
                    <div className="absolute bottom-56 left-0 right-0">
                        <img src="/landing-page/travolta.gif" alt="Not Found GIF"/>
                    </div>
                </div>
            </div>
        </main>
    );
}
