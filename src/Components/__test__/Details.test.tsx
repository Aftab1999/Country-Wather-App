import React from "react"
import Details from "../Details"
import {render,screen, fireEvent, act} from "@testing-library/react"

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => ({ navigate: jest.fn() }),
   useLocation: () => ({  }),
  
  }));

  jest.mock("axios", () => ({
    get: jest.fn((_url, _body) => {
      return new Promise((resolve, reject) => {
        if (
          _url ===
          "http://api.weatherstack.com/current?access_key=ac3ce49c3a59e8a93a80d44948c1d528&query=Delhi"
        ) {
          reject(new Error("Id not found!"));
        } else {
          resolve({
            data: {
                capital: [{ id: "Delhi" }],
              id: "Delhi",
            },
            status: 200,
          });
        }
      });
    }),
  }));

  test("checking snapshot", () => {
    const test1 = render(<Details/>);
    expect(test1).toMatchSnapshot();
  });

  test("checking without crashes", () => {
    const test2 = render(<Details/>);
    expect(test2).toBeTruthy();
  });

it ('checkCapital_WeatherButton', async() =>{
    render(<Details/>)
    expect(screen).toMatchSnapshot();
})

it ('Components exists or not', async() =>{
const root= render(<Details/>)
expect(root).toBeTruthy();
   
})

it("checking for text content", async() => {
const { getByTestId } = render(<Details />)
const text = getByTestId("Country_Typo")
expect(text.textContent).toBe("Country Details")

})

// test("checking Capital Weather button", async () => {
//     const { getByTestId } = render(<Details/>);
//     const randomSubmit = getByTestId("Weather");
//     await act(async () => {
//       await fireEvent.click(randomSubmit);
//     });
//     expect(randomSubmit).toBeDefined();
//   });


// it("checking for text content", async() => {
// const { getByTestId } = render(<Details />)
// const text = getByTestId("Capial")
// expect(text.textContent).toBe("Capital")

// })

// it("checking for text content", async() => {
// const { getByTestId } = render(<Details />)
// const text = getByTestId("Weather_Information")
// expect(text.textContent).toBe("Weather Information")

// })




// it ("Check  Capital_Weather", ()=>{
//     const {getByText} = render(<Details/>);
//     const btn:any =getByText('Capital Weather');
//     expect(btn).toBeTruthy();
//     expect (getByText('Capital Weather')).toBeInTheDocument()
// })
// it ("Check Back Button", ()=>{
//     const {queryByTitle} = render(<Details/>);
//     const btn:any = queryByTitle("Back");
//     expect(btn).toBeTruthy();
// }) 
