const { execSync } = require("child_process");
const path = require("path");

const PERSONAL_ACCESS = "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";
const REPO_NAME = "digital-gregg-app";
const USER_NAME = "digitalgregg";

const repoPath = `https://${PERSONAL_ACCESS}@github.com/${USER_NAME}/${REPO_NAME}.git`;

const repoUrl = path.join(__dirname, REPO_NAME);

const command = [
  `git clone ${repoPath}`,
  `cd ${repoUrl}`,
  `shx cp -rf ${repoUrl}/* .`,
  `shx rm -rf ${repoUrl}`,
];

try {
  command.forEach((c) => {
    execSync(c);
  });
  console.log("Repository cloned successfully!");
} catch (error) {
  console.error(`Error cloning repository: ${error.message}`);
}
