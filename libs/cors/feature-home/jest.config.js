module.exports = {
  name: 'cors-feature-home',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/cors/feature-home',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
