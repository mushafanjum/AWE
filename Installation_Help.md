## Step 1 - Install Node.js (https://nodejs.org/) and during the installation, make sure the box for "Add to PATH" is checked
## Step 2 - In the command prompt run the two commands for verification (best to do in VS Code):
`node -v`
`npm -v`

Should see version numbers like this:
v18.17.1
9.5.0
## Step 3 - Go to the project Folder:
`cd "C:\Users\...\...\AWE"`
## Step 4: Run the following commands in the command prompt
`npm install`
`npm start`
`npm run build`
`npm run dev`

And the project will load up on your default web browser
## =====================================================
If having issues after putting npm install or npm start
## Step 1: Run the following commands (in the project folder path, `cd "C:\Users\...\...\AWE"`):
`npm cache clean --force`
`rd /s /q node_modules`
`del package-lock.json`

## Step 2: And then run these commands again:
`npm run build`
`npm run dev`

