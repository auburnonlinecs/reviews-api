/**
 * This is a dummy handler to get the api on its feet
 */
const helloController = require("../controllers/helloController");

module.exports.handleGetHello = async (event) => {
  try {
    const response = await helloController.getHello();
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};
