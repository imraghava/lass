import path from 'path';
import test from 'ava';
import sao from 'sao';

const template = path.join(__dirname, '..');

test('defaults', async t => {
  const stream = await sao.mockPrompt(template, {
    name: 'my-package-name',
    description: 'my project description',
    license: 'MIT',
    version: '0.0.1',
    author: 'Nick Baugh',
    email: 'niftylettuce@gmail.com',
    website: 'http://niftylettuce.com',
    username: 'niftylettuce'
  });
  t.snapshot(stream.fileList, 'generated files');
  const content = stream.fileContents('README.md');
  t.snapshot(content, 'content of README.md');
});

/*
test('invalid name', async t => {
  const error = await t.throws(
    sao.mockPrompt(template, {
      name: 'Foo Bar'
    })
  );
  t.is(error.message, 'Please change the name from "Foo Bar" to "foo-bar"');
});

test('invalid version', async t => {
  const error = await t.throws(
    sao.mockPrompt(template, {
      version: 'abcdef'
    })
  );
  t.is(error.message, 'Invalid semver version');
});

test('invalid email', async t => {
  const error = await t.throws(
    sao.mockPrompt(template, {
      email: 'niftylettuce'
    })
  );
  t.is(error.message, 'Invalid email');
});

test('invalid website', async t => {
  const error = await t.throws(
    sao.mockPrompt(template, {
      website: 'niftylettuce'
    })
  );
  t.is(error.message, 'Invalid URL');
});

test('invalid username', async t => {
  const error = await t.throws(
    sao.mockPrompt(template, {
      username: '$$$'
    })
  );
  t.is(
    error.message,
    'Invalid GitHub username'
  );
});

test('invalid repo', async t => {
  const error = await t.throws(
    sao.mockPrompt(template, {
      repo: 'https://bitbucket.org/foo/bar'
    })
  );
  t.is(
    error.message,
    'Please include a valid GitHub.com URL without a trailing slash'
  );
});
*/
