const installModules = async (destination, packageManager, loader, asyncExec) => {
  loader.text = "Install node_modules...\n";
  await asyncExec(`${packageManager} install --legacy-peer-deps`, {
    cwd: destination,
  });
};

export default installModules;