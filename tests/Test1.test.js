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

describe('Check components', () => {
    it('Is there a dropdown ', () => {
        jest.useFakeTimers();
        render(<App/>);
        expect(screen.getByTestId('text-input-underline')).toBeOnTheScreen();
        
    });
    it('Is there a spinner ', () => {
        jest.useFakeTimers();
        render(<App/>);
        expect(screen.getByPlaceholderText('quantity')).toBeOnTheScreen();
        
    });
});

