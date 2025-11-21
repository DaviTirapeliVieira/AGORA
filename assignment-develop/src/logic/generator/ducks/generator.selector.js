export const selectGeneratorState = (state) => state.generator;
export const selectGeneratorMessages = (state) => state.generator.messages;
export const selectGeneratorHistory = (state) => state.generator.history;
export const selectGeneratorLoading = (state) => state.generator.loading;
export const selectGeneratorError = (state) => state.generator.error;

export const selectDownloading = (state) => state.generator.downloading;
export const selectDownloadError = (state) => state.generator.downloadError;
