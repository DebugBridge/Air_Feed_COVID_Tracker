<!-- Project Title - The name of the project -->

# Air_Feed_COVID_Tracker
Easy to Digest COVID Information Application **(Cohort Project One)**


<!-- Overview - A brief description outlining what the project is -->

## Overview
This application provides users with simplistic Covid-19 data so that they can make informed decicions on their own if they think it's safe to travel anywhere within the US.


<!-- Table of Contents - You can link to the different sections below -->

## Table of Contents
1. Description
2. Installation
3. Usage

<!-- Description - A more detailed outline of the project. What does it do? Is there a high level list of features? If describing a project that has visual features, consider adding pictures or animations of the features and functionality in this section. See Adding Screen Captures below. -->

### Description
We developed a user-friendly application with easy to digest updated Covid-19 data that will allow
DoD Personnel to make informed travel assessments based on open source updated data. The data will cover every state and provide the user with critical Covid-19 information.

<!-- Installation - How can another developer get your project up and running on their own? What dependencies are required? Are there environmental requirements? Be specific, and outline steps to take in order to get the project running. -->

### Installation
- npm install
- npm install cypress --dev


<!-- Usage - Further details on how the project is meant to be used may be helpful. For a library or framework, this section would outline how to use the library within another project (see socket.io  ). For a service that is meant to be used within a larger project architecture, instructions on how to integrate may be necessary (see node-statsD  ). -->

### Usage
User will be prompted to search for the state or territory they wish to view relevant data for. As the user types, matching search results will begin to be displayed in a drop down menu.

![Main Screen](https://github.com/DebugBridge/Air_Feed_COVID_Tracker/blob/main/ReadMeSrc/ss2.png?raw=true)

The user can click on a state's name in the menu at any time to view the data for the selected state. After clicking on the state's name, the relevant data will be rendered along with the message, "Why is (STATE_NAME + COLOR) status?". Color corresponds to different statuses of risk in a given state. Color status includes three colors idicating different levels of risk:
- Red (high risk)
- Yellow (moderate risk)
- Green (low risk)

These categories are determined based off of the selected state's fatality rates.


Below this message, other relavant data for selected state will be displayed.

Relevant data will include:
- Deaths
- Fatality Rate
- Confirmed Cases
- Active Cases
- Date of Last Data Update

### Team Members
- Scott Shannon @Shannonscotta
- Nicholas Schafter @DebugBridge
- Hector Hernandez @hectorhcuevas
- Oleg Kuftyrev @raynwinter