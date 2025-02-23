import * as primitives from '@jens-2020/primitives';

import usePDF from './usePDF';
import PDFViewer from './PDFViewer';
import BlobProvider from './BlobProvider';
import PDFDownloadLink from './PDFDownloadLink';
import { pdf, version, Font, StyleSheet } from '../index';

const throwEnvironmentError = name => {
  throw new Error(
    `${name} is a Node specific API. You're either using this method in a browser, or your bundler is not loading react-pdf from the appropriate web build.`,
  );
};

export const renderToStream = () => {
  throwEnvironmentError('renderToStream');
};

export const renderToString = () => {
  throwEnvironmentError('renderToString');
};

export const renderToFile = () => {
  throwEnvironmentError('renderToFile');
};

export const render = () => {
  throwEnvironmentError('render');
};

export * from '../index';

export * from './usePDF';

export * from './PDFViewer';

export * from './BlobProvider';

export * from './PDFDownloadLink';

export * from '@jens-2020/primitives';

export default {
  pdf,
  usePDF,
  Font,
  version,
  StyleSheet,
  PDFViewer,
  BlobProvider,
  PDFDownloadLink,
  renderToStream,
  renderToString,
  renderToFile,
  render,
  ...primitives,
};
