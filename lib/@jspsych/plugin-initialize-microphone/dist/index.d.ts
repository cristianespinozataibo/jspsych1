import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "jspsych";
declare const info: {
    readonly name: "initialize-microphone";
    readonly parameters: {
        /** Function to call */
        readonly device_select_message: {
            readonly type: ParameterType.HTML_STRING;
            readonly default: "<p>Please select the microphone you would like to use.</p>";
        };
        /** Is the function call asynchronous? */
        readonly button_label: {
            readonly type: ParameterType.STRING;
            readonly default: "Use this microphone";
        };
    };
};
declare type Info = typeof info;
/**
 * **initialize-microphone**
 *
 * jsPsych plugin for getting permission to initialize a microphone
 *
 * @author Josh de Leeuw
 * @see {@link https://www.jspsych.org/plugins/jspsych-initialize-microphone/ initialize-microphone plugin documentation on jspsych.org}
 */
declare class InitializeMicrophonePlugin implements JsPsychPlugin<Info> {
    private jsPsych;
    static info: {
        readonly name: "initialize-microphone";
        readonly parameters: {
            /** Function to call */
            readonly device_select_message: {
                readonly type: ParameterType.HTML_STRING;
                readonly default: "<p>Please select the microphone you would like to use.</p>";
            };
            /** Is the function call asynchronous? */
            readonly button_label: {
                readonly type: ParameterType.STRING;
                readonly default: "Use this microphone";
            };
        };
    };
    constructor(jsPsych: JsPsych);
    trial(display_element: HTMLElement, trial: TrialType<Info>): void;
    private run_trial;
    private askForPermission;
    private showMicrophoneSelection;
    private waitForSelection;
    private updateDeviceList;
}
export default InitializeMicrophonePlugin;
