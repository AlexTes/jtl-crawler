/* @flow */
import rdbdBuilder from 'rethinkdbdash';

const r = rdbdBuilder({
  db:     'jtl',
  silent: true,
});

export function store(job: RawIndeedJob): Promise<string> {
  return r
    .table('indeed')
    .insert({
      createdAt: r.now(),
      updatedAt: r.now(),
      ...job,
    })
    .run()
    .then(result => result.generated_keys[0]);
}

export function retrieve(id: string): Promise<IndeedJob> {
  return r
    .table('indeed')
    .get(id)
    .run();
}
