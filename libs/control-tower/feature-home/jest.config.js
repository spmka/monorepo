module.exports = {
  name: 'control-tower-feature-home',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/control-tower/feature-home',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
