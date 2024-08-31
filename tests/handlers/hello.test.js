const { hello } = require("../../internal/handlers/hello");
const helloController = require("../../internal/controllers/helloController");

jest.mock("../../internal/controllers/helloController");

describe("hello handler", () => {
  it("should return a 200 response with a message", async () => {
    // Arrange
    const mockResponse = { message: "Hello, world!" };
    helloController.getHello.mockResolvedValue(mockResponse);

    const event = {}; // You can mock the event object if needed
    const expectedResponse = {
      statusCode: 200,
      body: JSON.stringify(mockResponse),
    };

    // Act
    const result = await hello(event);

    // Assert
    expect(result).toEqual(expectedResponse);
  });

  it("should return a 500 response if there is an error", async () => {
    // Arrange
    helloController.getHello.mockRejectedValue(new Error("Uh oh"));

    const event = {};
    const expectedResponse = {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };

    // Act
    const result = await hello(event);

    // Assert
    expect(result).toEqual(expectedResponse);
  });
});
