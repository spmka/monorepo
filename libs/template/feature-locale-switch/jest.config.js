module.exports = {
  name: 'template-feature-locale-switch',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/template/feature-locale-switch',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
