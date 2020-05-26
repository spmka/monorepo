module.exports = {
  name: 'control-tower-feature-charts',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/control-tower/feature-charts',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
