exports.up = r =>
  r.db('jtl').tableCreate('indeed').run();

exports.down = r =>
  r.db('jtl').tableDrop('indeed').run();
