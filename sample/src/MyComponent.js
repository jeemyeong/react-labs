import Loadable from 'react-loadable';
import React from 'react';

const LoadableOtherComponent = Loadable({
    loader: () => import('./OtherComponent'),
    loading: () => <div>Loading...</div>,
});

const MyComponent = () => (
    <LoadableOtherComponent />
);

export default MyComponent;
