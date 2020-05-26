module.exports = {
  name: 'control-tower-domain',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/control-tower/domain',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
