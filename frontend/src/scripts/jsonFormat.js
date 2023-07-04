function validateJSON(jsonData) {
    // Check if the required properties exist
    if (!jsonData.hasOwnProperty('rooms') || !jsonData.hasOwnProperty('doors')) {
      return false;
    }
  
    // Check if the rooms and doors properties are arrays
    if (!Array.isArray(jsonData.rooms) || !Array.isArray(jsonData.doors)) {
      return false;
    }
  
    // Check if each room object has the required properties
    for (const room of jsonData.rooms) {
      if (!room.hasOwnProperty('x') || !room.hasOwnProperty('y') ||
          !room.hasOwnProperty('length') || !room.hasOwnProperty('width')) {
        return false;
      }
    }
  
    // Check if each door object has the required properties
    for (const door of jsonData.doors) {
      if (!door.hasOwnProperty('x') || !door.hasOwnProperty('y')) {
        return false;
      }
    }
  
    // All checks passed, the JSON file is valid
    return true;
  }