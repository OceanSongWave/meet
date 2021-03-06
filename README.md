Meet App

Objective
To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

FEATURE 1: FILTER EVENTS BY CITY

User Story:As a user, I should be able to filter events by city So that I can see the list of events that take place in that city

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities. Given the user hasn’t searched for any city When the user opens the app Then the user should see a list of all upcoming events

Scenario 2: User should see a list of suggestions when they search for a city. Given the main page is open When the user starts typing in the city textbox Then the user should see a list of cities (suggestions) that match what they have typed

Scenario 3: User can select a city from the suggested list. Given the user was typing “Berlin” in the city textbox; and the list of suggested cities is showing When the user selects a city (e.g., “Berlin, Germany”) from the list Then their city should be changed to that city (i.e., “Berlin, Germany”); and the user should receive a list of upcoming events in that city

FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS

User Story:As a user, I should be able to show and/or hide an event’s details So that I have the option to see more or less information about an event

Scenario 1: An event element is collapsed by default. Given the user has selected a city When their city now changes to the city the user selected Then the user should see a list of upcoming events in that city, where each event element is collapsed to hide details about that event

Scenario 2: User can expand an event to see its details. Given the list of upcoming events is shown, where each event details is collapsed/hidden by default When the user opens an event element Then the user should see an expanded view with details and information about the event

Scenario 3: User can collapse an event to hide its details. Given the user has finished viewing the expanded details of an event When the user closes the event element Then the event element should return to its collapsed stage to hide its details

FEATURE 3: SPECIFY NUMBER OF EVENTS

User Story:As a user, I should be able to specify the number of events So that I have the option to decide how many events I want to view

Scenario 1: When user hasn’t specified a number, 32 is the default number. Given the list of upcoming events is shown When the user does not specify the number of events for viewing Then the user should see 32 events on view, as 32 is the default number

Scenario 2: User can change the number of events they want to see. Given the list of upcoming events is shown When the user changes the number of events they want to see (e.g., 10) Then the number of events displayed should be changed to (i.e., 10) match the user’s input

FEATURE 4: USE THE APP WHEN OFFLINE

User Story:As a user, I should be able to use the app when offline So that I can still access the list of events I was viewing prior

Scenario 1: Show cached data when there’s no internet connection. Given the user was viewing a list of events prior to not having internet connection When the user opens the app Then the user should see the cached data of the list of events they last viewed

Scenario 2: Show error when user changes the settings (city, time range). Given the user has viewed the cached data of previously accessed events When the user changes the settings (e.g., city, time range) Then the app should show an error as the app is unable to return results from the changes since the user is offline

FEATURE 5: DATA VISUALIZATION

User Story:As a user, I should be able to visualize the events that are upcoming across cities So that I can decide which cities I want to explore further

Scenario 1: Show a chart with the number of upcoming events in each city. Given the user hasn’t searched for a particular city When the user navigates to the “events by city” view Then the user should see a chart with the number of upcoming events in each city
