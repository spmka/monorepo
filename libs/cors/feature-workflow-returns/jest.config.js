module.exports = {
  name: 'cors-feature-workflow-returns',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/cors/feature-workflow-returns',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
