import { fireEvent, render, screen } from "@testing-library/react-native";
import '@testing-library/react-native/extend-expect';
import App from "../App";

jest.mock('expo-font', ()=>{   
    const module = {
        ...jest.requireActual("expo-font"),
        isLoaded: jest.fn(()=>true)
    }
    return module;
});

describe('Form calculation test', () => {
    it('Calculate thinkpad total price', () => {
        jest.useFakeTimers();
        
        render(<App/>);

        fireEvent(screen.getByTestId('text-input-underline'), 'onSelect', 'thinkpad');
        fireEvent(screen.getByPlaceholderText('quantity'), 'onChange', 2);

        expect(screen.getByTestId('result')).toHaveTextContent('Total price: 2060');
        
    });
    it('Calculate iPhone total price', () => {
        jest.useFakeTimers();

        render(<App/>);
        fireEvent(screen.getByTestId('text-input-underline'), 'onSelect', 'chromecast');
        fireEvent(screen.getByPlaceholderText('quantity'), 'onChange', 3);

        expect(screen.getByTestId('result')).toHaveTextContent('Total price: 240');
    });
    it('Calculate chromecast total price', () => {
        jest.useFakeTimers();

        render(<App/>);
        fireEvent(screen.getByTestId('text-input-underline'), 'onSelect', 'iphone');
        fireEvent(screen.getByPlaceholderText('quantity'), 'onChange', 10);

        expect(screen.getByTestId('result')).toHaveTextContent('Total price: 8000');
    });
});

