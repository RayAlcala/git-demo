import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => () => [{id: 'p1', title: 'First post'}]
        });
        // window.fetch overrides the built in fetch function with our dummy fetch function 
        // so that we don't actually send a request to the API and therefore we're not
        // hammering that API with unnecessary requests
        // we're reducing the amount of network traffic
        render(<Async />)

        const listItemElements = await screen.findAllByRole('listitem');
        // find queries, unlike get queries, returns a promise
        // the react testing library will reevaluate the screen a couple of times 
        // until it succeeds 
        // findAllByRole accepts three arguments
        // second argument is where you specify if you want exact, default is yes
        // third argument is where you set a timeout period, default is one second 
        expect(listItemElements).not.toHaveLength(0);
    });
});