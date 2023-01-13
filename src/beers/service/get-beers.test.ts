import { getBeersFromPunkBrewery, getBeersFromSessionStorage } from "./get-beers";
import { BeersFixture } from "./beers.fixture";
import { getBeersEndpoint } from "../endpoint/get-beers.endpoint";
import { mapBeerFromPunkBreweryApi } from "../mapper/mapBeerFromPunkBreweryApi";

const mockGetBeers = getBeersEndpoint as jest.Mock;
jest.mock("../endpoint/get-beers.endpoint", () => {
	return {
		getBeersEndpoint: jest.fn().mockImplementation(() => Promise.resolve())
	}
});

describe("GetBeersService", () => {
	describe("GetBeersFromPunkBrewery", () => {
		it("should return a list of beers", async () => {
			mockGetBeers.mockResolvedValue(BeersFixture)
			
			const response = await getBeersFromPunkBrewery();

			const formattedResponse = await getBeersEndpoint()
			
			expect(mockGetBeers).toHaveBeenCalledTimes(2);
			expect(response).toHaveLength(2);
			expect(response[0]).toEqual(mapBeerFromPunkBreweryApi(formattedResponse[0]));
		});
	});
})