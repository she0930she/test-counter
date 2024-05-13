import { fireEvent, render } from '@testing-library/react';
import Counter from './Counter';

// class test: Counter component
describe(Counter, () => {

    // method test- init count:
    it("counter display correct init count: 0", () => {
        const { getByTestId } = render(<Counter initialCount={0} />);
        const countValue = Number(getByTestId("initCount").textContent);
        expect(countValue).toEqual(0);
    })

    it("count should increment by 1, if increment btn is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
        // grab increment btn, grab the text in DOM
        const incrementBtn = getByRole("button", { name:"Increment" }); 

        // count before increment btn is clicked
        const countValueBeforeClicked = Number(getByTestId("initCount").textContent);
        expect(countValueBeforeClicked).toEqual(0);

        // mock- click increment btn
        fireEvent.click(incrementBtn);

        // display count 
        const countValue = Number(getByTestId("initCount").textContent);
        expect(countValue).toEqual(1);
    })

    it("counter should be 0, if restart btn is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={9} />);
        // grab restart btn
        const restartBtn = getByRole("button", { name:"restart" });

        // count before restart btn is clicked
        const countValueBeforeClicked = Number(getByTestId("initCount").textContent);
        expect(countValueBeforeClicked).toEqual(9);

        // mock- click increment btn
        fireEvent.click(restartBtn);

        // display count 
        const countValue = Number(getByTestId("initCount").textContent);
        expect(countValue).toEqual(0);
    })

    it("counter should invert signs, if switchSigns btn is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={9} />);
        // grab switchSigns btn
        const switchSignsBtn = getByRole("button", { name:"switchSigns" });

        // count before switchSigns btn is clicked
        const countValueBeforeClicked = Number(getByTestId("initCount").textContent);
        expect(countValueBeforeClicked).toEqual(9);

        // mock- click increment btn
        fireEvent.click(switchSignsBtn);

        // display count 
        const countValue = Number(getByTestId("initCount").textContent);
        expect(countValue).toEqual(-9);
    })

})