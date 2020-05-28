module.exports = {
  name: 'template-feature-form',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/template/feature-form',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
