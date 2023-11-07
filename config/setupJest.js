require('jest-fetch-mock').enableMocks()

beforeEach(() => {
  // Load content from file system when attempting to use fetch in tests
  fetchMock.mockIf(
    () => true,
    async (req) => {
      return require('fs').readFileSync(req.url).toString()
    }
  )
})
