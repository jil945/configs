const semver = require("semver");
const shell = require("shelljs");
const packageJson = require("./package.json");
const { execSync } = require("child_process");

function exec(cmd) {
    return execSync(cmd).toString().trim();
}

var versionRequirements = [{
    name: "node",
    currentVersion: semver.clean(process.version),
    versionRequirement: packageJson.engines.node
}];

if (shell.which("npm")) {
    versionRequirements.push({
        name: "npm",
        currentVersion: exec("npm --version"),
        versionRequirement:packageJson.engines.npm,
    });
}


module.exports = function() {
    var warnings = [];
    versionRequirements.forEach(req => {
        if (!semver.satisfies(req.currentVersion, req.versionRequirement)) {
            warnings.push(`Required ${req.name} version ${req.versionRequirement} not satisfied with current version ${req.currentVersion}`);
        }
    });

    if (warnings.length) {
        warnings.forEach(w => {
            console.error(w);
        });
        process.exit(1);
    }
}
