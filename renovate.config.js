module.exports = {
  dryRun: null,
  platform: 'github',
  forkProcessing: 'disabled',
  dependencyDashboard: true,
  onboarding: false,
  autodiscover: true,
  allowCustomCrateRegistries: true,
  allowScripts: true,
  exposeAllEnv: true,
  allowPostUpgradeCommandTemplating: true,
  allowedPostUpgradeCommands: [
    '^npm ci --ignore-scripts$',
    '^npm install --ignore-scripts$',
    '^npm run prepare --if-present$',
    '^npm run format --if-present$',
    '^npx nx migrate \\d+\\.\\d+\\.\\d+$',
    '^npx --no-install nx migrate --run-migrations$',
    '^rm -f migrations.json || true$',
    "^npx --no-install nx run-many --target=lint --parallel --fix --skip-nx-cache"
  ],
}
