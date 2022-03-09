import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "jspsych";
declare const info: {
    readonly name: "html-audio-response";
    readonly parameters: {
        /** The HTML string to be displayed */
        readonly stimulus: {
            readonly type: ParameterType.HTML_STRING;
            readonly default: any;
        };
        /** How long to show the stimulus. */
        readonly stimulus_duration: {
            readonly type: ParameterType.INT;
            readonly default: any;
        };
        /** How long to show the trial. */
        readonly recording_duration: {
            readonly type: ParameterType.INT;
            readonly default: 2000;
        };
        readonly show_done_button: {
            readonly type: ParameterType.BOOL;
            readonly default: true;
        };
        readonly done_button_label: {
            readonly type: ParameterType.STRING;
            readonly default: "Continue";
        };
        readonly record_again_button_label: {
            readonly type: ParameterType.STRING;
            readonly default: "Record again";
        };
        readonly accept_button_label: {
            readonly type: ParameterType.STRING;
            readonly default: "Continue";
        };
        readonly allow_playback: {
            readonly type: ParameterType.BOOL;
            readonly default: false;
        };
        readonly save_audio_url: {
            readonly type: ParameterType.BOOL;
            readonly default: false;
        };
    };
};
declare type Info = typeof info;
/**
 * html-audio-response
 * jsPsych plugin for displaying a stimulus and recording an audio response through a microphone
 * @author Josh de Leeuw
 * @see {@link https://www.jspsych.org/plugins/jspsych-html-audio-response/ html-audio-response plugin documentation on jspsych.org}
 */
declare class HtmlAudioResponsePlugin implements JsPsychPlugin<Info> {
    private jsPsych;
    static info: {
        readonly name: "html-audio-response";
        readonly parameters: {
            /** The HTML string to be displayed */
            readonly stimulus: {
                readonly type: ParameterType.HTML_STRING;
                readonly default: any;
            };
            /** How long to show the stimulus. */
            readonly stimulus_duration: {
                readonly type: ParameterType.INT;
                readonly default: any;
            };
            /** How long to show the trial. */
            readonly recording_duration: {
                readonly type: ParameterType.INT;
                readonly default: 2000;
            };
            readonly show_done_button: {
                readonly type: ParameterType.BOOL;
                readonly default: true;
            };
            readonly done_button_label: {
                readonly type: ParameterType.STRING;
                readonly default: "Continue";
            };
            readonly record_again_button_label: {
                readonly type: ParameterType.STRING;
                readonly default: "Record again";
            };
            readonly accept_button_label: {
                readonly type: ParameterType.STRING;
                readonly default: "Continue";
            };
            readonly allow_playback: {
                readonly type: ParameterType.BOOL;
                readonly default: false;
            };
            readonly save_audio_url: {
                readonly type: ParameterType.BOOL;
                readonly default: false;
            };
        };
    };
    private stimulus_start_time;
    private recorder_start_time;
    private recorder;
    private audio_url;
    private response;
    private load_resolver;
    private rt;
    private start_event_handler;
    private stop_event_handler;
    private data_available_handler;
    private recorded_data_chunks;
    constructor(jsPsych: JsPsych);
    trial(display_element: HTMLElement, trial: TrialType<Info>): void;
    private showDisplay;
    private hideStimulus;
    private addButtonEvent;
    private setupRecordingEvents;
    private startRecording;
    private stopRecording;
    private showPlaybackControls;
    private endTrial;
}
export default HtmlAudioResponsePlugin;
