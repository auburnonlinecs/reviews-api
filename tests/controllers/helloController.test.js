const helloController = require('../../internal/controllers/helloController');

describe('helloController', () => {
  it('should return the correct message', () => {
    // Arrange
    const expectedResponse = { message: 'Hello, world!' };

    // Act
    const result = helloController.getHello();

    // Assert
    expect(result).toEqual(expectedResponse);
  });
});