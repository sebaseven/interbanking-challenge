
import { Navigation } from './Navigation';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

    // Tests that the navigation bar is rendered with the Interbank logo and links to all pages
    it('test_navigation_bar_rendering', () => {
        render(<Navigation />);
        const logo = screen.getByAltText('Interbank Logo');
        expect(logo).toBeDefined();
        const homeLink = screen.getByText('HomePage');
        expect(homeLink).toBeDefined();
        const phrasesLink = screen.getByText('PhrasesPage');
        expect(phrasesLink).toBeDefined();
        const aboutUsLink = screen.getByText('AboutUsPage');
        expect(aboutUsLink).toBeDefined();
    });

    // Tests that the correct page is rendered when a link is clicked
    it('test_correct_page_rendering', () => {
        render(<Navigation />);
        const homeLink = screen.getByText('HomePage');
        userEvent.click(homeLink);
    });

    // Tests 'nav-active' class
    it('test_link', () => {
        render(<Navigation />);
        const homeLink = screen.getByText('HomePage');
        expect(homeLink).toHaveProperty('href');
        const phrasesLink = screen.getByText('PhrasesPage');
        userEvent.click(phrasesLink);

        const { container } = render(<Navigation />)
        expect(container.getElementsByClassName('nav-active').length).toBe(1);

    });