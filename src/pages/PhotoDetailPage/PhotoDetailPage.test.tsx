import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import PhotoDetailPage from "./PhotoDetailPage";
import { ImageData } from "../../types/types";

const mockCard: ImageData = {
  author: "test_author",
  id: "test_id",
  selftext: "test_description",
  title: "test_title",
  subreddit: "test_subreddit",
  thumbnail: "test_thumbnail_url",
  ups: 123,
};

const mockStore = configureStore();
const store = mockStore({
  theme: { mode: "light" },
});

jest.mock("../../components/Header/Header", () => () => <div>Mock Header</div>);

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("PhotoDetailPage", () => {
  it("renders the detail card with correct data", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[{ state: { card: mockCard } }]}>
          <Routes>
            <Route path="/" element={<PhotoDetailPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId("detail-card")).toBeInTheDocument();
    expect(screen.getByTestId("title")).toHaveTextContent(mockCard.title);
    expect(screen.getByTestId("author")).toHaveTextContent(mockCard.author);
    expect(screen.getByTestId("subreddit")).toHaveTextContent(
      mockCard.subreddit
    );
    expect(screen.getByTestId("ups")).toHaveTextContent(
      mockCard.ups.toString()
    );
    expect(screen.getByTestId("description")).toHaveTextContent(
      mockCard.selftext
    );
    expect(screen.getByTestId("id")).toHaveTextContent(mockCard.id);
    expect(screen.getByTestId("thumbnail")).toHaveAttribute(
      "src",
      mockCard.thumbnail
    );
  });

  it("navigates back when the back button is clicked", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[{ state: { card: mockCard } }]}>
          <Routes>
            <Route path="/" element={<PhotoDetailPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByTestId("back-button"));
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
