const fs = require("fs").promises;

// Read and write functions for JSON data
async function readJSON(filename) {
  try {
    const data = await fs.readFile(filename, "utf8");
    
    // If file is empty or non-existent, return an empty array
    if (!data) {
      return [];
    }

    const parsedData = JSON.parse(data);

    // Ensure the data is an array; if it's not, return an empty array
    if (!Array.isArray(parsedData)) {
      return [];
    }

    return parsedData;
  } catch (err) {
    // If file does not exist, initialize with an empty array
    if (err.code === 'ENOENT') {
      await fs.writeFile(filename, JSON.stringify([]), 'utf8'); // Initialize empty array if file doesn't exist
      return [];
    }
    
    console.error("Error reading JSON file:", err);
    throw err;
  }
}

async function writeJSON(object, filename) {
  try {
    const allObjects = await readJSON(filename);
    
    // Ensure that the data being written is an array
    if (!Array.isArray(allObjects)) {
      throw new Error("The data in the file is not an array.");
    }

    allObjects.push(object);  // Add the new object to the array

    // Write the updated array back to the file
    await fs.writeFile(filename, JSON.stringify(allObjects, null, 2), "utf8");
    
    return allObjects;
  } catch (err) {
    console.error("Error writing JSON file:", err);
    throw err;
  }
}

// Flight creation function
async function createFlight(flightData) {
  try {
    const flights = await readJSON("utils/flights.json");

    // Create new flight object
    const newFlight = {
      flightNumber: flightData.flightNumber,
      departureLocation: flightData.departureLocation,
      arrivalLocation: flightData.arrivalLocation,
      departureTime: flightData.departureTime,
      arrivalTime: flightData.arrivalTime,
      duration: flightData.duration,
      price: flightData.price,
      comfortLevel: flightData.comfortLevel,
      id: `${new Date().getTime()}${Math.floor(Math.random() * 1000)}`
    };

    // Save the new flight
    const updatedFlights = await writeJSON(newFlight, "utils/flights.json");

    return { success: true, message: 'Flight created successfully!', data: updatedFlights };
  } catch (error) {
    console.error('Error creating flight:', error);
    return { success: false, message: 'Error creating flight', error };
  }
}

// Function to get all flights
async function getFlights() {
  try {
    const flights = await readJSON("utils/flights.json");
    return { success: true, data: flights };
  } catch (error) {
    console.error('Error fetching flights:', error);
    return { success: false, message: 'Error fetching flights', error };
  }
}

// Function to update a flight
async function updateFlight(flightNumber, flightData) {
  try {
    const flights = await readJSON("utils/flights.json");
    const flightIndex = flights.findIndex(flight => flight.flightNumber === flightNumber);

    if (flightIndex === -1) {
      return { success: false, message: 'Flight not found' };
    }

    // Update flight data
    const updatedFlight = { ...flights[flightIndex], ...flightData };
    flights[flightIndex] = updatedFlight;

    await fs.writeFile("utils/flights.json", JSON.stringify(flights, null, 2), "utf8");

    return { success: true, message: 'Flight updated successfully!', data: updatedFlight };
  } catch (error) {
    console.error('Error updating flight:', error);
    return { success: false, message: 'Error updating flight', error };
  }
}

// Function to delete a flight
async function deleteFlight(flightNumber) {
  try {
    const flights = await readJSON("utils/flights.json");
    const updatedFlights = flights.filter(flight => flight.flightNumber !== flightNumber);

    if (flights.length === updatedFlights.length) {
      return { success: false, message: 'Flight not found' };
    }

    await fs.writeFile("utils/flights.json", JSON.stringify(updatedFlights, null, 2), "utf8");

    return { success: true, message: 'Flight deleted successfully!' };
  } catch (error) {
    console.error('Error deleting flight:', error);
    return { success: false, message: 'Error deleting flight', error };
  }
}

module.exports = {
  createFlight,
  getFlights,
  updateFlight,
  deleteFlight
};
