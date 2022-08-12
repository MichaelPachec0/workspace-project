# Workspace

**Project management tool, bugtracker** <br />

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"> <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">

status: :wrench: _IN DEVELOPMENT_ (draft stage, _design and styling of elements are going to be changed._) <br />

## Idea
The idea of the project is creating a _workspace_ environment for each task or issue in a project created by a user, that includes: 
- sticky notes for brainstorming, 
- a todolist for organizing a process (with a possibility to name and save the todolist to your profile, and search through all your saved `process trees` and pin it to another project in future).<br />

In short:
_Find a bug, Research, Fix, Save the process for similar tasks in future_ <br />
Right now the functionality is limited to creating a project and tasks to it. Time to expand! :rocket:

## Test
This is the <a href="https://workspace-bugtracker.herokuapp.com">demo website</a> of the project. Username: `workspace` Password: `workspace`. <br />


<!-- How to contribute -->
## How to contribute
If you have a suggestion that would make this project better or you want to practice and fix one of the <a href="https://github.com/Abrosss/Workspace/issues">issues</a>, please fork the repository and create a pull request.
Any contributions you make are greatly appreciated! Thank you! <br />

Note: _during production process the authentication system is not working, only one dev account is used by default, a connection to the database happens through API. Everything is set up, so it's easier to focus on bugtracker features and issues_ <br />

Here are the instructions on setting up the project locally.

:exclamation: Replace everything in angle brackets with your _<relevant_data>_ without including the brackets

### Installation

1. Fork <a href="https://github.com/Abrosss/Workspace">this</a> repository.
2. Clone your fork.
   ```sh
   git clone  https://github.com/<your_name>/Workspace.git
   ```
3. Navigate to the project directory.
   ```sh
   cd Workspace
   ```
4. Add a reference to the original repository.
   ```sh
   git remote add upstream https://github.com/Abrosss/Workspace.git
   ```
5. Check that you now have two remotes: an origin that points to your fork, and an upstream that points to the project repository.
   ```sh
   git remote -v
   ```
6. Synchronize your local repository with the project repository. 
   ```sh
   git pull upstream main
   ```
7. Create a new branch. 
   ```sh
   git checkout -b <your_branch_name>
   ```
8. **Install NPM packages**
   ```sh
   npm install
   ```
9. Make changes to files.
10. Track your changes.
   ```sh
   git add .
   ```
11. Commit your changes.
   ```sh
   git commit -m "<description_of_changes>"
   ```
12. Push these changes in your branch to your fork
   ```sh
   git push origin <your_branch_name>
   ```
13. To create a pull request, return to your fork on GitHub, and refresh the page.Click on `compare and pull request`
14. Add a title and description to your pull request explaining the changes you made.
15. Click the green `Create pull request` button.

You have now created a pull request! It's going to be reviewed!



## TO-DO-LIST
[ ] landing page
- Individual issue <a href="https://github.com/Abrosss/Workspace/blob/main/README.md#idea">workspace</a>
- the bugtracker for TEAMS

