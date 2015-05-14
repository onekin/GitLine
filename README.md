
# GitLine

GitLine is a Firefox Add-On (working on 37.0 version), which offers extra functionality on top of GitHub. GitLine aids SPL product builders to create and sync assets between product builders repositories (a.k.a Product Repositories) and the assets builders' repository (a.k.a Core Assets Repository). Operations for product builders are: 
1. Product Fork: creates a new GitHub Repository from a Core Asset Repository
2. Update Propagation: update assets in Product Repositories with the latest versions from the Core Asset Repository.
3. Feedback Propagation: propose a customization in Product Repository to be promoted as a core asset in the Core Asset Repository

<p>Check the project Page for detailed description of GitLine: http://letimome.github.io/GitLine.</p>

<iframe src="https://player.vimeo.com/video/127812347" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> 
<p><a href="https://vimeo.com/127812347">Check GitLine Demo </a> on <a href="https://vimeo.com">Vimeo</a>.</p>


# To install GitLine


(1) Copy this repository to Firefox extensions folder in your computer.

(2) Get a GitHub Access Token https://help.github.com/articles/creating-an-access-token-for-command-line-use/, and paste it in function DeltaUtils.getUserAccessToken inside file content/githubdeltas.js.

(3) In Firefox URL bar type "about:config". Set the following values to false:

**security.csp.enable=false

**security.mixed-content.block_active_content=false

