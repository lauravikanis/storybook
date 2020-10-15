export const songs = () => {
    const container = document.createElement('div');
    const firstTrack = createTrackElement(...);
    container.append(firstTrack);
    const secondTrack = createTrackElement(...);
    container.append(secondTrack);
    return container;
  }