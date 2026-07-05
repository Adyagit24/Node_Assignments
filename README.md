# Node_Assignments

# **Node.js Assignment: Working with Modules, HTTP Servers, and Logging**

### **Objective:**

Learn how to create your own custom modules, import them into other files, create HTTP servers, and log information using the `fs` module.

---

### **Tasks:**

### **Task 1: Create a Mathematical Module**

1. **Create a file named `mathFunctions.js`.**
2. Inside this file, create two functions:
    - **`add(a, b)`**: Returns the sum of two numbers.
    - **`subtract(a, b)`**: Returns the difference between two numbers.
3. **Export these functions** from `mathFunctions.js`.

### **Task 2: Use the Mathematical Module in Another File**

1. Create a new file named `app.js`.
2. **Import the functions** `add` and `subtract` from `mathFunctions.js`.
3. Use these functions to:
    - Add two numbers (e.g., 5 + 3) and log the result.
    - Subtract two numbers (e.g., 10 - 4) and log the result.

### **Task 3: Create an HTTP Server to Generate Random Numbers**

1. Create a new file named `randomNumberServer.js`.
2. **Create an HTTP server** that:
    - Generates a random number every 2 seconds.
    - Sends this number as a response to the client in the form of an HTML page (e.g., `Random Number: <random_number>`).
3. **Use `setInterval`** to generate a random number every 2 seconds.

### **Task 4: Log Events Using the `fs` Module**

1. In the `randomNumberServer.js` file, **log the events** of the server:
    - Log the time the server starts running.
    - Log when a request is received with details like the IP address or timestamp.
2. Create a log file named `server.log` in the same directory using `fs`.
3. **Append logs to the file** every time an event occurs (server start, incoming request).

### **Task 5: Running and Testing**

1. Run the HTTP server by executing `randomNumberServer.js`.
2. Open a browser and check the output page showing a new random number every 2 seconds.
3. Check the `server.log` file to ensure logs are being written each time an event occurs.

---

