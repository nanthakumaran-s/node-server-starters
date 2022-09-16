import path from "path";
import ncp from "ncp";

const copyProjectFiles = async (destination, directory) => {
  return new Promise((resolve, reject) => {
    const source = path.join("./lib", `./${directory}`);
    const options = {
      clobber: true,
      stopOnErr: true,
    };

    ncp.limit = 16;
    ncp(source, destination, options, function (err) {
      if (err) reject(err);
      resolve();
    });
  });
};

export default copyProjectFiles;
