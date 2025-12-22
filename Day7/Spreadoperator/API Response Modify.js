let apiResponse = { success: true, data: { id: 1 } };

let finalResponse = { ...apiResponse, timestamp: Date.now() };


console.log(finalResponse)