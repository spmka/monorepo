module.exports = {
  name: 'shared-util-objects',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/util-objects',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
