import { render,screen } from "@testing-library/react";
import App from './App';

test('renders learn react link', () => {
    render(<App/>);
    const LinkElement = screen.getByText(/learn/i)
    expect (LinkElement).toBeInTheDocument();;
});