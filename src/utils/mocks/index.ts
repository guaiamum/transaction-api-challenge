const mockResponse = {
    count: 10,
    items: Array(10).fill(null).map((_, id) => ({
        id: `${id}`,
        amount: id * 100,
        currency: 'GBP',
        datetime: new Date().toDateString(),
        card: {
            lastNumbers: '1234'
        }
    }))
};

export default mockResponse;