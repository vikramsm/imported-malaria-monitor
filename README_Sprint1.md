## SPRINT 1 (Ended July 4th, 3 pm)

### Forecast Velocity
Our initial velocity forecast is of 8 Story Points per Sprint. Our forecast is primarily based on setting up the infrastructure and choosing the right tools for backend and frontend development since this is our first sprint. We also had limited time (considering the week days and holiday, too) for this Sprint. As we progress, we expect to increase the velocity. 

### Sprint Backlog 
This is the link to the Sprint Backlog and Tasks can be found here: https://trello.com/b/2R8EOqim/imported-malaria-monitor
We refined the stories that are larger than half of our velocity. The current board reflects the newest state of the stories and tasks after refinement.

### What did you do in the last 24 hours that helped the Development Team meet the Sprint Goal? Annotate your team's response so it's clear which team members did which activities.
#### Karen
- Researched map components for web app
- Worked on frontend project using angular framework to incorporate map to app
- Migrated Leaflet geoJson render into Angular framework

#### Vikram
- Created backend of website 
- Implemented login functionality

#### Fatma
- Documented project
- Reviewed sprint backlog and formulated user stories
- Decomposed sprint item into tasks

#### Derek
- Researched backend (Django) and frontend (angular) functionalities 
- Setup backend and frontend
- Researched how to integrate front-end and backend

### What will you do in the next 24 hours to help the Development Team meet the Sprint Goal? Annotate your team's response so it's clear which team members plan to do which activities.

#### Karen
- Finish integrating maps into frontend
- Implement frontend API to request message from backend

#### Vikram
- Finalize backend functionality
- Implement backend API to respond to frontend requests

#### Fatma
- Document project
- Research CI/CD tools (Jenkins) for the next Sprint

#### Derek
- Arrange meeting with Stakeholder
- Document project

### Impediments we had and how we removed them
- We had to further decompose the original story because we realized some of the tasks are actually stories on its own. We removed the impediment by refining the stories.

- Having a holiday as the last day of our Sprint was another impediment because it was hard to contact our stakeholder and arrange a meeting with the team. We overcame this impediment by having a video conference meeting with the development team (also has P.O. and S.M.), and our stakeholder met with P.O.

- Having this as our first Sprint brought some difficulties such as choosing the right tools to maximize the productivity of our team considering team member's strengths and skills. 
  Being a newly formed team and not knowing each other's technical skills resulted in longer discussions on who should do what. 
We had many meetings and there were a lot of back and forth discussions which solved the issue.

### Sprint 1 Burndown
![Sprint 1 Burndown Chart](img/sprint1_burndown_chart.png "Sprint 1 Burndown")

### Sprint 1 Mob Programming & Pair Programming
![Mob Programming](img/mob_programming.JPG "Mob Programming")
Vikram receives gold star for effort!

- Mob programming on front end development.
- Vikram & Derek paired programmed on Wednesday after class.

### Sprint 1 TDD

The Imported Malaria Monitor is composed of two sub-projects. The back end, Django, and the front end, Angular.io. This repository contains these projects under sub directories front-end and back-end.

#### Front-End UI

The "front-end" angular.io UI has 3 components, the landing "app", the "map" of country counties, the "backend" service to retrieve map and malaria data from the backend server. The test represent instantiating the pages and retrieving content for display. The challenge with TDD on the front end was the learning curve with mocking angular.io Observables (via AngularJs v6).

![Sprint 1 TDD](img/unitTestsFrontEndSideJul4.png "Sprint 1 TDD")

#### Back-End Server

Not integrated to the main branch.

### Sprint 1 Evidence of Running Program

The front-end angular.io component demonstrating the counties of Brazil with 0 cases of Malaria.

![Sprint 1 Running Code](img/IMM-s1-front-end.png "Sprint 1 running front-end")

### Sprint 1 Daily Scrums
We performed daily scrums to inform each other where we were in progress towards the sprint goal, and to refocus efforts, and to resolve impediments as a team. We had videoconference on Monday and met after class on Tuesday and Wednesday. 

The following is an example from our Monday scrum.

- Karen had reviewed muiltiple UI tools, and found one that is free, easy to use and applicable to rendering visual GeoJSON data for the sprint goal. Karen will investigate control options for the tool for better display (panning). Karen's impediment is the large size of rendering the GeoData.

- Vikram had considered several back end options and determined that Django and Python will provide the most flexible and easy option. Vikram will investigate deployment. Vikram feels he has no impediments at this time.

- Fatma had been working on the behavioral aspect of the sprint's user story, with knowledge of larger picture of the product backlog. Fatma had identified further areas of division in the sprint story and associated tasks. Fatma will continue refining tasks. Fatma has no impediments at this time.

- Derek had communicated with Stakeholder to clarify visual aspects of the first sprint. Derek had also invested UI and back end frameworks to pool information with the team. Derek's impediment, at the time of the scrum, was finding the opportunity to retrieve sample source data from the Stakeholder.

### Sprint 1 Sprint Review

The Project Owner demonstrated the Sprint 1 working software to the Stakeholder, Marcia. Marcia provided useful feedback back to the Project Owner that was added to the Product Backlog. Marcia said that the Brazil county map looks good, it was what she had in mind. But, she felt that the county map loaded too slowy and would like it to be more responsive. In addition, Marcia provided more clarification about desired UI components. For example: a dropdown selection of month being displayed, a dropdown selection of type of map, a map legend specifying color codes.

![Sprint 1 Sprint Review](img/sprint1_review.jpeg "Sprint 1 Sprint Review")
