module.exports = {
  name: 'shared-e2e-util-tools',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared-e2e/util-tools',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
