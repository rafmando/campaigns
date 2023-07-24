import { Results } from "../results"
import { render, screen } from "@testing-library/react";
import { addCampaign, getStatus } from "../results.utils";
import { mockCampaign1, mockCampaign2, mockCampaigns } from "../../../mocks/mocks";
import App from "../../../App";
import userEvent from "@testing-library/user-event";

describe('the ResultsComponent', () => {
  describe('the addCampaignHelper', () => {
    it("returns true of campaigns when a campaign with an existing id is added", () => {
      expect(addCampaign(mockCampaign1, mockCampaigns)).toEqual(
        true
      );
    });

    it("returns false when a campaign with a non existing id is added", () => {
      expect(
        addCampaign(mockCampaign2, mockCampaigns)
      ).toEqual(false);
    });
  })

  describe('the getStatus helper', () => {
    it('returns active if the date is inbetween the start and end date', () => {
      expect(
      getStatus(mockCampaign2)
      ).toEqual('Active');
    })

    it("returns indicative if the date is not inbetween the start and end date", () => {
      expect(getStatus(mockCampaign1)).toEqual("Indicative");
    });
  })

  it('renders initial campaign results correctly', () => {
    render(
      <Results
        results={mockCampaigns}
        searchTerm={''}
      />
    );
    expect(screen.getByText('Divavu')).toBeInTheDocument()
    expect(screen.getAllByText("Indicative")[0]).toBeInTheDocument();
    expect(screen.getByText("9/19/2017")).toBeInTheDocument();
    expect(screen.getByText("3/9/2018")).toBeInTheDocument();
    expect(screen.getByText("£88377")).toBeInTheDocument();

    expect(screen.getByText("Jaxspan")).toBeInTheDocument();
    expect(screen.getAllByText("Indicative")[1]).toBeInTheDocument();
    expect(screen.getByText("11/21/2017")).toBeInTheDocument();
    expect(screen.getByText("2/21/2018")).toBeInTheDocument();
    expect(screen.getByText("£608715")).toBeInTheDocument();
  })

  it('searches for a result when a search term is provided', () => {
    render(<Results results={mockCampaigns} searchTerm={"di"} />);

    expect(screen.getByText("Divavu")).toBeInTheDocument();
    expect(screen.getAllByText("Indicative")[0]).toBeInTheDocument();
    expect(screen.getByText("9/19/2017")).toBeInTheDocument();
    expect(screen.getByText("3/9/2018")).toBeInTheDocument();
    expect(screen.getByText("£88377")).toBeInTheDocument();
  })

  it('returns the correct campaigns when filtered by dates', () => {
    render(<App/>);

    const toggleFilterButton = screen.getByTestId('toggleFilter')

    userEvent.click(toggleFilterButton);

    const startDateInput = (screen.getAllByPlaceholderText('MM/DD/YYYY')[0])
    const endDateInput = screen.getAllByPlaceholderText("MM/DD/YYYY")[1];
    const getResultsButton = screen.getByText('Get results')

    expect(startDateInput).toBeInTheDocument()
    expect(endDateInput).toBeInTheDocument()

   
    userEvent.type(startDateInput,'2/2/2016')
    userEvent.type(endDateInput, "12/30/2017");
    userEvent.click(getResultsButton);

    expect(screen.getByText("Miboo")).toBeInTheDocument();
    expect(screen.getAllByText("Indicative")[0]).toBeInTheDocument();
    expect(screen.getByText("11/1/2017")).toBeInTheDocument();
    expect(screen.getByText("6/20/2017")).toBeInTheDocument();
    expect(screen.getByText("£239507")).toBeInTheDocument();

    expect(screen.getByText("Trilith")).toBeInTheDocument();
    expect(screen.getAllByText("Indicative")[1]).toBeInTheDocument();
    expect(screen.getByText("8/25/2017")).toBeInTheDocument();
    expect(screen.getByText("11/30/2017")).toBeInTheDocument();
    expect(screen.getByText("£179838")).toBeInTheDocument();
  })

  it("returns no campaigns when filtered by dates", () => {
    render(<App />);

    const toggleFilterButton = screen.getByTestId("toggleFilter");

    userEvent.click(toggleFilterButton);

    const startDateInput = screen.getAllByPlaceholderText("MM/DD/YYYY")[0];
    const endDateInput = screen.getAllByPlaceholderText("MM/DD/YYYY")[1];
    const getResultsButton = screen.getByText("Get results");

    expect(startDateInput).toBeInTheDocument();
    expect(endDateInput).toBeInTheDocument();

    userEvent.type(startDateInput, "2/2/2016");
    userEvent.type(endDateInput, "12/30/2014");
    userEvent.click(getResultsButton);

    expect(screen.queryByText("Miboo")).not.toBeInTheDocument();
    expect(screen.queryByText("Trilith")).not.toBeInTheDocument();
     
  });

  it("resets the filter when button is clicked", () => {
    render(<App />);

    const toggleFilterButton = screen.getByTestId("toggleFilter");

    userEvent.click(toggleFilterButton);

    const startDateInput = screen.getAllByPlaceholderText("MM/DD/YYYY")[0];
    const endDateInput = screen.getAllByPlaceholderText("MM/DD/YYYY")[1];
    const getResultsButton = screen.getByText("Get results");

    expect(startDateInput).toBeInTheDocument();
    expect(endDateInput).toBeInTheDocument();

    userEvent.type(startDateInput, "2/2/2016");
    userEvent.type(endDateInput, "12/30/2014");
    userEvent.click(getResultsButton);

    expect(screen.queryByText("Miboo")).not.toBeInTheDocument();
    expect(screen.queryByText("Trilith")).not.toBeInTheDocument();

    const resetFilterButton = screen.getByText('Reset filter')
    userEvent.click(resetFilterButton)
    expect(screen.getByText("Miboo")).toBeInTheDocument();
    expect(screen.getByText("Trilith")).toBeInTheDocument();


  })
   
})