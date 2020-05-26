module.exports = {
  name: 'shared-ui-cards',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/ui-cards',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
