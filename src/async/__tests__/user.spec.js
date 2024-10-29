import axios from 'axios';
import getUser from '../user';

jest.mock('axios');

describe('getUser', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  

  it('Should fetch user data successfully', async () => {
    const mockResponse = { data: { id: 12345, name: 'John Doe' } };
    axios.get.mockResolvedValue(mockResponse);

    console.log = jest.fn();

    await getUser();

    expect(axios.get).toHaveBeenCalledWith('/user?ID=12345');
    expect(console.log).toHaveBeenCalledWith(mockResponse);
  });

  it('Should handle error while fetching user data', async () => {
    const mockError = new Error('Network Error');
    axios.get.mockRejectedValue(mockError);

    console.error = jest.fn();

    await getUser();

    expect(axios.get).toHaveBeenCalledWith('/user?ID=12345');
    expect(console.error).toHaveBeenCalledWith(mockError);
  });
});