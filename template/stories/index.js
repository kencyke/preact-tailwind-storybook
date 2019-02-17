const reqs = [
  require.context("./elements", true, /\.tsx?$/)
];

reqs.forEach(req => req.keys().forEach(filename => req(filename)));
