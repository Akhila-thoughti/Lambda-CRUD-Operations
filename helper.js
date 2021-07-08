module.exports = {
    handleError(status, body) {
        headers = {
            "Content-Type": "application/json"
        };
        response = { success: false, statusCode: status || 500, body: JSON.stringify(body) };
        response.headers = headers;
        return response;
    }
};


