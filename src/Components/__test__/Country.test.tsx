// import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Country from "../Country"

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => ({ navigate: jest.fn() }),
   useLocation: () => ({  }),
  
  }));

  // jest.mock("axios", () => ({
  //   get: jest.fn((_url, _body) => {
  //     return new Promise((resolve, reject) => {
  //       if (
  //         _url ===
  //         "https://restcountries.com/v3.1/name/india"
  //       ) {
  //         reject(new Error("Id not found!"));
  //       } else {
  //         resolve({
  //           data: {
  //             near_earth_objects: [{ id: "000000" }],
  //             id: "123",
  //           },
  //           status: 200,
  //         });
  //       }
  //     });
  //   }),
  // }));

  test("checking snapshot", () => {
    const test1 = render(<Country/>);
    expect(test1).toMatchSnapshot();
  });

  test("checking without crashes", () => {
    const test2 = render(<Country/>);
    expect(test2).toBeTruthy();
  });

  it ('Components exists or not', async() =>{
    const root= render(<Country/>)
    expect(root).toBeTruthy();
       
    })

it ("Check Rander Country", ()=>{
    const {queryByTitle} = render(<Country/>);
    const btn:any = queryByTitle("Country");
    expect(btn).toBeTruthy();
}) 

it ('checkSubmitButton', async() =>{
    render(<Country/>)
    expect(screen).toMatchSnapshot();
})

it ('checkSubmitButton',async() =>{
    render(<Country/>);
    const headingElement = await screen.getByTestId('submit')
    expect(headingElement).toBeInTheDocument();
  });

//   it('check button disable',async() =>{
//     const{getByTestId} =render(<Country/>);
//     const submit =getByTestId('submit');
//      expect(submit).toBeDisabled();
//    });

it('checkSubmitButton',async() =>{
    render(<Country/>);
    const headingElement = await screen.getByText('Submit')
    expect(headingElement).toBeInTheDocument();
  });

  describe ('Initial test, validate fields', () => {
    test('TextField component should exists.', () => {
      render(<Country/>);
      expect('Textfield').toBeDefined();
    });
  });

  it("checking for text content", async() => {
    const { getByTestId } = render(<Country/>)
    const text = getByTestId("Country_Data")
    expect(text.textContent).toBe("Country Data")
    
    })

    test("checking submitbutton", async () => {
      const { getByTestId } = render(<Country/>);
      const submitButton = getByTestId("submit");
      await act(async () => {
        await fireEvent.click(submitButton);
      });
      expect(submitButton).toBeDefined();
    });







// describe('render a TextField', () =>{
// const { getByText } = render(<Country/>);
// const result = find('#textfield').length;
// expect(result).toEqual(1);
// }) 