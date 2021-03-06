export declare class MediaAPI {
    private useWebaudio;
    private webaudioContext?;
    constructor(useWebaudio: boolean, webaudioContext?: AudioContext);
    private video_buffers;
    getVideoBuffer(videoID: any): any;
    private context;
    private audio_buffers;
    initAudio(): void;
    audioContext(): any;
    getAudioBuffer(audioID: any): Promise<unknown>;
    private preload_requests;
    private img_cache;
    preloadAudio(files: any, callback_complete?: () => void, callback_load?: (filepath: any) => void, callback_error?: (error_msg: any) => void): void;
    preloadImages(images: any, callback_complete?: () => void, callback_load?: (filepath: any) => void, callback_error?: (error_msg: any) => void): void;
    preloadVideo(videos: any, callback_complete?: () => void, callback_load?: (filepath: any) => void, callback_error?: (error_msg: any) => void): void;
    private preloadMap;
    getAutoPreloadList(timeline_description: any[]): {
        images: string[];
        audio: string[];
        video: string[];
    };
    cancelPreloads(): void;
    private microphone_recorder;
    initializeMicrophoneRecorder(stream: MediaStream): void;
    getMicrophoneRecorder(): MediaRecorder;
}
