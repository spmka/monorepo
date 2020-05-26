module.exports = {
  name: 'cors',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/cors',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
