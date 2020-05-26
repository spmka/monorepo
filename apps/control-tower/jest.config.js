module.exports = {
  name: 'control-tower',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/control-tower',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
