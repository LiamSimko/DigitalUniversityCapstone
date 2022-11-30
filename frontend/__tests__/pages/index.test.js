import {ApolloProvider} from '@apollo/client';
import {createMockClient} from 'mock-apollo-client';
import {render, screen} from '@testing-library/react';
import Index from '../../pages/index.js';

describe('Homepage', () => {
	let mockClient;

	beforeAll(() => {
		mockClient = createMockClient();
	});

	it('should render the Homepage', () => {
		render(
			<ApolloProvider client={mockClient}>
				<Index />
			</ApolloProvider>,
		);

		expect(screen.getByText('Liam Simko Capstone')).toBeInTheDocument();
	});
});
