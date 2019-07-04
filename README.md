# imported-malaria-monitor

## Team "Malaria Monitors"

- Fatma: Dev Team Member
- Vikram: Dev Team Member
- Derek: Dev Team Member & Project Owner
- Karen: Dev Team Member & Scrum Master


## Product "Imported Malaria Monitor"

__Far Vision:__ Control and eliminate malaria globally.

__Near Vision:__ Prevent malaria outbreaks by enabling informed programmatic actions on the ground.

## Product Stakeholders & Personas

Real person Stakeholder (Researcher): Marcia Castro, PhD

![Researcher persona](personas/persona-nonFictional-Researcher.png "Researcher persona")

![Global Health Director persona](personas/persona-semiFictional-GlobalHealthOrganizationDirector.png "Global Health Director persona")


![Control Manager persona](personas/personal-semiFictional-RegionalMalariaControlProgramManager.png "Control Manager persona")

## Product Backlog

Trello PBI Board: ["Imported Malaria Monitor" Product Backlog](https://trello.com/b/2R8EOqim/imported-malaria-monitor "Imported Malaria Monitor Product Backlog")

### Product Backlog Order Rational

The product backlog is ordered based on a MVP (Minimal Viable Product) criteria and the feature priorities state by the stakeholder.

## Definition of Ready

A Product Backlog Item (PBI) is "ready" for a consideration in a sprint when:

* It has a title
* It has a User Story opening sentence
* It has an estimate in story points
* Its acceptance criteria are clear and testable
* Its details are sufficiently understood by the development team so it can make an informed decision as to whether it can be completed in one sprint
* It is small enough to comfortably be completed in one sprint
* The team understands how to demonstrate the PBI at the sprint review

### Relative Size Estimates

Relative size estimates of story board points was done by Planning Poker. It was facilitated by the web tool https://play.planningpoker.com

Only developmental team members participated in creating the estimates.

## Definition of Done
- There are unit tests
- All unit tests pass
- Design decisions are discussed
- No objections from dev team
- Passes all acceptance tests
- Code builds
- Code is committed

## SPRINT 1 (Due July 4th, 3 pm)

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


### Sprint 1 Daily Scrums
We performed daily scrums to inform each other where we were in progress towards the sprint goal, and to refocus efforts, and to resolve impediments as a team. We had videoconference on Monday and met after class on Tuesday and Wednesday. 

The following is an example from our Monday scrum.

- Karen had reviewed muiltiple UI tools, and found one that is free, easy to use and applicable to rendering visual GeoJSON data for the sprint goal. Karen will investigate control options for the tool for better display (panning). Karen's impediment is the large size of rendering the GeoData.

- Vikram had considered several back end options and determined that Django and Python will provide the most flexible and easy option. Vikram will investigate deployment. Vikram feels he has no impediments at this time.

- Fatma had been working on the behavioral aspect of the sprint's user story, with knowledge of larger picture of the product backlog. Fatma had identified further areas of division in the sprint story and associated tasks. Fatma will continue refining tasks. Fatma has no impediments at this time.

- Derek had communicated with Stakeholder to clarify visual aspects of the first sprint. Derek had also invested UI and back end frameworks to pool information with the team. Derek's impediment, at the time of the scrum, was finding the opportunity to retrieve sample source data from the Stakeholder. 
