/* @flow */
import { omit } from 'lodash';
import rdbdBuilder from 'rethinkdbdash';
import * as job from '../indeed';
import mockJob from '../__mocks__/indeed-job.json';

const r = rdbdBuilder({
  db:     'jtl',
  silent: true,
});

type IndeedJob = IndeedJob;
type RawIndeedJob = RawIndeedJob;

function stripGeneratedProps(indeedJob: IndeedJob): RawIndeedJob {
  return omit(indeedJob, 'createdAt', 'id', 'updatedAt');
}

it('should store an indeed job successfully', async () => {
  const id = await job.store(mockJob);
  const rawJob = await r.table('indeed').get(id);
  const cleanJob = stripGeneratedProps(rawJob);
  expect(cleanJob).toEqual(mockJob);
  expect(rawJob.createdAt).toBeInstanceOf(Date);
  expect(typeof rawJob.id).toBe('string');
  expect(rawJob.updatedAt).toBeInstanceOf(Date);
});

it('should retrieve an indeed job successfully', async () => {
  const { generated_keys: [id] } = await r.table('indeed').insert(mockJob);
  const rawJob = await job.retrieve(id);
  const cleanJob = stripGeneratedProps(rawJob);
  expect(cleanJob).toEqual(mockJob);
});

afterAll(async () => {
  await r.table('indeed').filter({ source: 'Mock' }).delete().run();
});
