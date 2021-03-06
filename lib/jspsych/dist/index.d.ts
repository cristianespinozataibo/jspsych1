import { JsPsych } from "./JsPsych";
/**
 * Creates a new JsPsych instance using the provided options.
 *
 * @param options The options to pass to the JsPsych constructor
 * @returns A new JsPsych instance
 */
export declare function initJsPsych(options?: any): JsPsych;
export { JsPsych } from "./JsPsych";
export { JsPsychPlugin, PluginInfo, TrialType, ParameterType, universalPluginParameters, UniversalPluginParameters, } from "./modules/plugins";
export { JsPsychExtension, JsPsychExtensionInfo } from "./modules/extensions";
