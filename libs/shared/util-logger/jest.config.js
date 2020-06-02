module.exports = {
  name: 'shared-util-logger',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/util-logger',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
