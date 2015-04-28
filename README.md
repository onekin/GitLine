# GitLine
GitLine project for SPLE on top of Git SCM


This is an Extension for Firefox (37.0), which renders GitHub for SPLE.

To install the extension do:

(1) Copy this repository to Firefox extensions folder

(2) Get a GitHub Access Token https://help.github.com/articles/creating-an-access-token-for-command-line-use/, and paste it in function DeltaUtils.getUserAccessToken inside file content/githubdeltas.js.

(3) In firefox browser type "about:config". Set the foloowing values to false:

**security.csp.enable=false

**security.mixed-content.block_active_content=false

