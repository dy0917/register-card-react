import { render, fireEvent, screen, act } from '../tools/test-utils'
import CardForm from "../Components/CardForm";


describe("CardForm", () => {
  test("Header contains correct text", async () => {
    render(<CardForm />);
    const text = screen.getByText("Welcome Kingsley");
    expect(text).toBeInTheDocument();
  });

  test("hook fail", async () => {
    act(() => {
      render(<CardForm />);
    });
    fireEvent.input(screen.getByPlaceholderText("Credit card number"), {
      target: {
        value: "12312312312"
      }
    });
    const submit = screen.getByText(/Submit/i);
    await act(async () => {
      await fireEvent.submit(submit);
    });

    expect(await screen.queryAllByText(/Card added/i)).toHaveLength(0);
  });

  test("hook seccuss", async () => {
    render(<CardForm />);
    // screen.getByLabelText("Submit");
    const submit = screen.getByText(/Submit/i);


    fireEvent.input(screen.getByPlaceholderText("Credit card number"), {
      target: {
        value: "12312312312"
      }
    });
    fireEvent.input(screen.getByPlaceholderText("CVC"), {
      target: {
        value: "1211"
      }
    });

    fireEvent.input(screen.getByPlaceholderText("Expiry"), {
      target: {
        value: "12/22"
      }
    });
    await act(async () => {
      await fireEvent.submit(submit);
    });

    expect(await screen.findByText(/Card added/i)).toBeInTheDocument()

  });
});