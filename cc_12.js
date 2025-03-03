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

// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays
    dashboard2.appendChild(createMetricCard("profitCard", "Profit", 160)); //Creating and appending more metric cards 
    dashboard.appendChild(createMetricCard("expensesCard", "Expenses", 130)); //Creating and appending more metric cards 

    const metricCards = document.querySelectorAll(".metric-card"); //Selecting all metric cards
    const metricCardsArray = Array.from(metricCards); //Converting the NodeList to an array

    metricCardsArray.forEach((card) => { //Looping through each metric card to update its content and style
        const myHeading = card.querySelector("h3"); //Selecting the <h3> inside the card
        myHeading.textContent += " - Updated"; // Updates the revenue
        card.style.backgroundColor = "#fdebd0"; //Changing the background color
    });

     // Task 4: Business Customer Section – Handling Event Bubbling
        const customerSectionDiv = document.getElementById("customerSection");

        function addCustomerCard(name) { // Creates a function to add a customer card
            const customerDiv = document.createElement("div");
            customerDiv.setAttribute("class", "customer-card");
            customerDiv.textContent = name; ///Setting the text content to the customer's name
            customerDiv.addEventListener("click", (event) => { // listens for an event
                console.log("Customer Card Clicked"); // logs the sentence in the console when event is heard
                event.stopPropagation;
            });
            customerSectionDiv.appendChild(customerDiv);
        };
        customerSectionDiv.addEventListener("click", () => { // listen for an event "click"
            console.log("Customer Section Clicked"); // when hears event logs message in the console
        });
    
        //Adding two customer cards dynamically
        addCustomerCard("First Customer");
        addCustomerCard("Second Customer");
        addCustomerCard("Third Customer");
        
    });
    