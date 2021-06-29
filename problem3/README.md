# Look for a field in an JS Object

Your task is to make a function called `greetUser` that takes a JS Object, and looks for a `user` field in the object.
If the `user` field is present in the object, the function should return a string that says, `Hello <<user name>>`. So
for example, if the function receives the following object:

```javascript
{
    id: 12345,
    user: 'Andrea',
}
```

The function should return:

`Hello Andrea`

If the `user` field is not present in the Object, the function should return the following string:

`No user found`

You can assume that the object passed to the function will always be valid.

*== Examples ==*
```javascript
{
    id: 56789,
    phone: '555-123-4567',
    name: 'Mike Furoyama',
    user: 'Mike',
}
```

returns `Hello Mike`

```javascript
{
    id: 00000,
    name: 'Unknown User',
}
```

returns `No user found`

Once you have your function coded up, we'll use NodeJS to run your code. To test your code, just run the following
command from a terminal:
  > node problem3.js

If you don't see any errors, that means your function worked!

## Git Stuff
For this exercise, we'll be creating a git branch to work in. Instead of committing and pushing our changes to the main 
`master`, we'll commit and push our changes to a branch, then once we're happy with the changes, we'll merge the changes
into the main `master`.

Before you start your work, create a new branch locally with the following command in the terminal:
`> git checkout -b my-problem3-branch`

You can see that you're on a new branch by entering the following command in the terminal:
`> git branch`

You should see your newly created branch highlighted.

Then, finish the coding assignment. When you're done and all the tests work, `git add`, `git commit` and `git push` your
changes, like we did before. This time though, since you're working in a branch, the changes will all be on your branch.

Once that's done, we can merge your branch into the main `master` branch. To do this, we first switch back to the
`master` branch with the following command:

`> git checkout master`

Then, we merge your working branch into the `master` branch:

`> git merge my-problem3-branch`

Finally, we have to push the changes you made to the main repository. You can do that with the following command:

`> git push origin`


As always, let me know if you have any problem with the code or with the git commands. Good luck!