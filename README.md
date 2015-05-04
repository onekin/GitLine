# GitLine
GitLine project for SPLE on top of Git SCM. Project Page: http://letimome.github.io/GitLine.


This is an Extension for Firefox (37.0), which renders GitHub for SPLE. Operations supported are: Product Fork, Update Propagation and Feedback Propagation.

To install the extension do:

(1) Copy this repository to Firefox extensions folder in your computer.

(2) Get a GitHub Access Token https://help.github.com/articles/creating-an-access-token-for-command-line-use/, and paste it in function DeltaUtils.getUserAccessToken inside file content/githubdeltas.js.

(3) In Firefox URL bar type "about:config". Set the following values to false:

**security.csp.enable=false

**security.mixed-content.block_active_content=false

