import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "jspsych";
declare const info: {
    readonly name: "audio-button-response";
    readonly parameters: {
        /** The audio to be played. */
        readonly stimulus: {
            readonly type: ParameterType.AUDIO;
            readonly pretty_name: "Stimulus";
            readonly default: any;
        };
        /** Array containing the label(s) for the button(s). */
        readonly choices: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Choices";
            readonly default: any;
            readonly array: true;
        };
        /** The HTML for creating button. Can create own style. Use the "%choice%" string to indicate where the label from the choices parameter should be inserted. */
        readonly button_html: {
            readonly type: ParameterType.HTML_STRING;
            readonly pretty_name: "Button HTML";
            readonly default: "<button class=\"jspsych-btn\">%choice%</button>";
            readonly array: true;
        };
        /** Any content here will be displayed below the stimulus. */
        readonly prompt: {
            readonly type: ParameterType.HTML_STRING;
            readonly pretty_name: "Prompt";
            readonly default: any;
        };
        /** The maximum duration to wait for a response. */
        readonly trial_duration: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Trial duration";
            readonly default: any;
        };
        /** Vertical margin of button. */
        readonly margin_vertical: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Margin vertical";
            readonly default: "0px";
        };
        /** Horizontal margin of button. */
        readonly margin_horizontal: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Margin horizontal";
            readonly default: "8px";
        };
        /** If true, the trial will end when user makes a response. */
        readonly response_ends_trial: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Response ends trial";
            readonly default: true;
        };
        /** If true, then the trial will end as soon as the audio file finishes playing. */
        readonly trial_ends_after_audio: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Trial ends after audio";
            readonly default: false;
        };
        /**
         * If true, then responses are allowed while the audio is playing.
         * If false, then the audio must finish playing before a response is accepted.
         */
        readonly response_allowed_while_playing: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Response allowed while playing";
            readonly default: true;
        };
    };
};
declare type Info = typeof info;
/**
 * **audio-button-response**
 *
 * jsPsych plugin for playing an audio file and getting a button response
 *
 * @author Kristin Diep
 * @see {@link https://www.jspsych.org/plugins/jspsych-audio-button-response/ audio-button-response plugin documentation on jspsych.org}
 */
declare class AudioButtonResponsePlugin implements JsPsychPlugin<Info> {
    private jsPsych;
    static info: {
        readonly name: "audio-button-response";
        readonly parameters: {
            /** The audio to be played. */
            readonly stimulus: {
                readonly type: ParameterType.AUDIO;
                readonly pretty_name: "Stimulus";
                readonly default: any;
            };
            /** Array containing the label(s) for the button(s). */
            readonly choices: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Choices";
                readonly default: any;
                readonly array: true;
            };
            /** The HTML for creating button. Can create own style. Use the "%choice%" string to indicate where the label from the choices parameter should be inserted. */
            readonly button_html: {
                readonly type: ParameterType.HTML_STRING;
                readonly pretty_name: "Button HTML";
                readonly default: "<button class=\"jspsych-btn\">%choice%</button>";
                readonly array: true;
            };
            /** Any content here will be displayed below the stimulus. */
            readonly prompt: {
                readonly type: ParameterType.HTML_STRING;
                readonly pretty_name: "Prompt";
                readonly default: any;
            };
            /** The maximum duration to wait for a response. */
            readonly trial_duration: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Trial duration";
                readonly default: any;
            };
            /** Vertical margin of button. */
            readonly margin_vertical: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Margin vertical";
                readonly default: "0px";
            };
            /** Horizontal margin of button. */
            readonly margin_horizontal: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Margin horizontal";
                readonly default: "8px";
            };
            /** If true, the trial will end when user makes a response. */
            readonly response_ends_trial: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Response ends trial";
                readonly default: true;
            };
            /** If true, then the trial will end as soon as the audio file finishes playing. */
            readonly trial_ends_after_audio: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Trial ends after audio";
                readonly default: false;
            };
            /**
             * If true, then responses are allowed while the audio is playing.
             * If false, then the audio must finish playing before a response is accepted.
             */
            readonly response_allowed_while_playing: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Response allowed while playing";
                readonly default: true;
            };
        };
    };
    private audio;
    constructor(jsPsych: JsPsych);
    trial(display_element: HTMLElement, trial: TrialType<Info>, on_load: () => void): Promise<unknown>;
    simulate(trial: TrialType<Info>, simulation_mode: any, simulation_options: any, load_callback: () => void): void;
    private create_simulation_data;
    private simulate_data_only;
    private simulate_visual;
}
export default AudioButtonResponsePlugin;
