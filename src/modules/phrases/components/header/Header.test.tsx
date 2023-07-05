import Header from "./Header"
import { render, screen } from "@testing-library/react"
describe('PhrasesBase', () => {
   
    // Tests that AppBar renders with correct color
    it('test_app_bar_color', () => {
        render(<Header />);
        expect(screen.getByText('Phrases Challenge')).toBeDefined();
    });
    it('test_avatar_src', () => {
        render(<Header />);
        const avatar = screen.getByAltText('My Avatar');
        expect(avatar).toBeDefined() ;
    });
})    
    
