function useAudio(filePath) {
    const audio = new Audio(filePath);
    return [() => audio.play()];
}

export default useAudio;