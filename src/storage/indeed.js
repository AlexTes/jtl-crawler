/* @flow */
import rdbdBuilder from 'rethinkdbdash';

const r = rdbdBuilder({
  db:     'jtl',
  silent: true,
});

export type RawIndeedJob = {
  jobtitle: string,
  company: string,
  city: string,
  state: string,
  country: string,
  formattedLocation: string,
  source: string,
  date: string,
  snippet: string,
  url: string,
  onmousedown: string,
  latitude: number,
  longitude: number,
  jobkey: string,
  sponsored: boolean,
  expired: boolean,
  indeedApply: boolean,
  formattedLocationFull: string,
  formattedRelativeTime: string,
  stations: string,
};

export type IndeedJob = RawIndeedJob & {
  createdAt: string,
  id: string,
  updatedAt: string,
};

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
