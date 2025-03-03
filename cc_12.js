// Task 1: Business Dashboard – DOM Element Selection and Creation

document.addEventListener("DOMContentLoaded", function(){ // Encapsulates most of code with an event listener
    const dashboard = document.getElementById("dashboard"); // Creates the dashboard selector by elements
    const dashboard2 = document.querySelector("#dashboard"); // Creates the dashboard selector by elements
    dashboard.appendChild(createMetricCard("revenueCard", "Revenue", 200));//Appending Revenue card first to prove both selections point to the same element

    function createMetricCard(id, title, amount) { //Function to create a metric card dynamically
        const metricDiv = document.createElement("div"); //Creating a div element for the metric card
        
        metricDiv.setAttribute("id", id); //Setting an ID for the div
        metricDiv.setAttribute("class", "metric-card"); //Assigning the class "metric-card"

        const heading = document.createElement("h3"); //Creating an h3 element for the title

        heading.textContent = title; //Makes the heading text "title"

        const paragraph = document.createElement("p"); //Creating a paragraph element for the amount

        paragraph.textContent = `$${amount}`; //Setting the text content with the dollar amount

        metricDiv.appendChild(heading); //Appending the heading and paragraph to the metric card
        metricDiv.appendChild(paragraph);

        return metricDiv; //Returning the created metric card
    };
