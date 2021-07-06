# Temperature Converter in a Webpage

We're going to start in on using Javascript in a web page!

So, what we have in the `problem4` folder is a simple webpage that lets a user enter a temperature value in **Celsius**
units, then, when the user clicks on the "Convert" button, the web page will display the converted temperature value in
**Fahrenheit** units.

Everything is implemented _except_ the conversion function. Your task is to finish the `convert`
function in the `problem4.js` file, which converts the value entered in the input field to the correct units.

Seems simple, but remember that a user might _also_ enter invalid values into the input field
(like words, etc.) so your `convert` function will have to handle those cases as well.

## Running the Example
To see the webpage in action, and to see your changes, you can simply open the `index.html` file in a browser. If you're
using Chrome, you can open the file by selecting "File => Open File..." from the menu and selecting the `index.html` file.

To have your changes take effect, just hit the "Refresh" button in the browser.

## Git Stuff (Pull Requests!)
For this exercise, we'll be creating a GitHub pull request. Pull requests let you tell others about changes you've
pushed to a branch in a repository on GitHub. Once a pull request is opened, we can discuss and review the potential
changes with collaborators and add follow-up commits before your changes are merged into the base branch.

Before you start your work, create a new branch locally with the following command in the terminal:
`> git checkout -b my-problem4-branch`

You can see that you're on a new branch by entering the following command in the terminal:
`> git branch`

You should see your newly created branch highlighted.

Then, finish the coding assignment. When you're done and all the tests work, `git add`, `git commit` and `git push` your
changes, like we did before. This time though, since you're working in a branch, the changes will all be on your branch.

Once that's done, go to the [PracticeProblems](https://github.com/mfuroyama/PracticeProblems) project page in GitHub,
then click on the `Pull requests` button up at the top:

Once you're there, click on the green `New pull request` button.

You'll see a "Compare Changes" screen. In the `compare: master` drop-down list. From the drop-down list, select your
branch (`my-problem4-branch`) then click the green `Create pull request` button.

Finally, feel free to add some notes about what you've done. When you're satisfied, click the `Create Pull Request`
button. That's it! Once you've done that, I'll be able to see and review the changes on the branch before we merge
your changes into the main branch.

As always, let me know if you have any problem with the code or with the git commands. Good luck!