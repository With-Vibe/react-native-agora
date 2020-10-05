/**
 * Regions for connection.
 */
export var AreaCode;
(function (AreaCode) {
    /**
     * Mainland China
     */
    AreaCode[AreaCode["CN"] = 1] = "CN";
    /**
     * North America
     */
    AreaCode[AreaCode["NA"] = 2] = "NA";
    /**
     * Europe
     */
    AreaCode[AreaCode["EU"] = 4] = "EU";
    /**
     * Asia, excluding Mainland China
     */
    AreaCode[AreaCode["AS"] = 8] = "AS";
    /**
     * Japan
     */
    AreaCode[AreaCode["JP"] = 16] = "JP";
    /**
     * India
     */
    AreaCode[AreaCode["IN"] = 32] = "IN";
    /**
     * (Default) Global
     */
    AreaCode[AreaCode["GLOB"] = -1] = "GLOB";
})(AreaCode || (AreaCode = {}));
/**
 * Audio codec profile.
 */
export var AudioCodecProfileType;
(function (AudioCodecProfileType) {
    /**
     * 0: (Default) LC-AAC, which is the low-complexity audio codec profile.
     */
    AudioCodecProfileType[AudioCodecProfileType["LCAAC"] = 0] = "LCAAC";
    /**
     * 1: HE-AAC, which is the high-efficiency audio codec profile.
     */
    AudioCodecProfileType[AudioCodecProfileType["HEAAC"] = 1] = "HEAAC";
})(AudioCodecProfileType || (AudioCodecProfileType = {}));
/**
 * Audio equalization band frequency.
 */
export var AudioEqualizationBandFrequency;
(function (AudioEqualizationBandFrequency) {
    /**
     * 0: 31 Hz.
     */
    AudioEqualizationBandFrequency[AudioEqualizationBandFrequency["Band31"] = 0] = "Band31";
    /**
     * 1: 62 Hz.
     */
    AudioEqualizationBandFrequency[AudioEqualizationBandFrequency["Band62"] = 1] = "Band62";
    /**
     * 2: 125 Hz.
     */
    AudioEqualizationBandFrequency[AudioEqualizationBandFrequency["Band125"] = 2] = "Band125";
    /**
     * 3: 250 Hz.
     */
    AudioEqualizationBandFrequency[AudioEqualizationBandFrequency["Band250"] = 3] = "Band250";
    /**
     * 4: 500 Hz.
     */
    AudioEqualizationBandFrequency[AudioEqualizationBandFrequency["Band500"] = 4] = "Band500";
    /**
     * 5: 1 kHz.
     */
    AudioEqualizationBandFrequency[AudioEqualizationBandFrequency["Band1K"] = 5] = "Band1K";
    /**
     * 6: 2 kHz.
     */
    AudioEqualizationBandFrequency[AudioEqualizationBandFrequency["Band2K"] = 6] = "Band2K";
    /**
     * 7: 4 kHz.
     */
    AudioEqualizationBandFrequency[AudioEqualizationBandFrequency["Band4K"] = 7] = "Band4K";
    /**
     * 8: 8 kHz.
     */
    AudioEqualizationBandFrequency[AudioEqualizationBandFrequency["Band8K"] = 8] = "Band8K";
    /**
     * 9: 16 kHz.
     */
    AudioEqualizationBandFrequency[AudioEqualizationBandFrequency["Band16K"] = 9] = "Band16K";
})(AudioEqualizationBandFrequency || (AudioEqualizationBandFrequency = {}));
/**
 * The error information of the local audio.
 */
export var AudioLocalError;
(function (AudioLocalError) {
    /**
     * 0: The local audio is normal.
     */
    AudioLocalError[AudioLocalError["Ok"] = 0] = "Ok";
    /**
     * 1: No specified reason for the local audio failure.
     */
    AudioLocalError[AudioLocalError["Failure"] = 1] = "Failure";
    /**
     * 2: No permission to use the local audio device.
     */
    AudioLocalError[AudioLocalError["DeviceNoPermission"] = 2] = "DeviceNoPermission";
    /**
     * 3: The microphone is in use.
     */
    AudioLocalError[AudioLocalError["DeviceBusy"] = 3] = "DeviceBusy";
    /**
     * 4: The local audio recording fails. Check whether the recording device is working properly.
     */
    AudioLocalError[AudioLocalError["RecordFailure"] = 4] = "RecordFailure";
    /**
     * 5: The local audio encoding fails.
     */
    AudioLocalError[AudioLocalError["EncodeFailure"] = 5] = "EncodeFailure";
})(AudioLocalError || (AudioLocalError = {}));
/**
 * The state of the local audio.
 */
export var AudioLocalState;
(function (AudioLocalState) {
    /**
     * 0: The local audio is in the initial state.
     */
    AudioLocalState[AudioLocalState["Stopped"] = 0] = "Stopped";
    /**
     * 1: The recording device starts successfully.
     */
    AudioLocalState[AudioLocalState["Recording"] = 1] = "Recording";
    /**
     * 2: The first audio frame encodes successfully.
     */
    AudioLocalState[AudioLocalState["Encoding"] = 2] = "Encoding";
    /**
     * 3: The local audio fails to start.
     */
    AudioLocalState[AudioLocalState["Failed"] = 3] = "Failed";
})(AudioLocalState || (AudioLocalState = {}));
/**
 * The error code of the audio mixing file.
 */
export var AudioMixingErrorCode;
(function (AudioMixingErrorCode) {
    /**
     * 701: The SDK cannot open the audio mixing file.
     */
    AudioMixingErrorCode[AudioMixingErrorCode["CanNotOpen"] = 701] = "CanNotOpen";
    /**
     * 702: The SDK opens the audio mixing file too frequently.
     */
    AudioMixingErrorCode[AudioMixingErrorCode["TooFrequentCall"] = 702] = "TooFrequentCall";
    /**
     * 703: The opening of the audio mixing file is interrupted.
     */
    AudioMixingErrorCode[AudioMixingErrorCode["InterruptedEOF"] = 703] = "InterruptedEOF";
    /**
     * 0: No error.
     */
    AudioMixingErrorCode[AudioMixingErrorCode["OK"] = 0] = "OK";
})(AudioMixingErrorCode || (AudioMixingErrorCode = {}));
/**
 * The state of the audio mixing file.
 */
export var AudioMixingStateCode;
(function (AudioMixingStateCode) {
    /**
     * 710: The audio mixing file is playing.
     */
    AudioMixingStateCode[AudioMixingStateCode["Playing"] = 710] = "Playing";
    /**
     * 711: The audio mixing file pauses playing.
     */
    AudioMixingStateCode[AudioMixingStateCode["Paused"] = 711] = "Paused";
    /**
     * 713: The audio mixing file stops playing.
     */
    AudioMixingStateCode[AudioMixingStateCode["Stopped"] = 713] = "Stopped";
    /**
     * 714: An exception occurs when playing the audio mixing file.
     */
    AudioMixingStateCode[AudioMixingStateCode["Failed"] = 714] = "Failed";
})(AudioMixingStateCode || (AudioMixingStateCode = {}));
/**
 * Audio output routing.
 */
export var AudioOutputRouting;
(function (AudioOutputRouting) {
    /**
     * -1: Default.
     */
    AudioOutputRouting[AudioOutputRouting["Default"] = -1] = "Default";
    /**
     * 0: Headset.
     */
    AudioOutputRouting[AudioOutputRouting["Headset"] = 0] = "Headset";
    /**
     * 1: Earpiece.
     */
    AudioOutputRouting[AudioOutputRouting["Earpiece"] = 1] = "Earpiece";
    /**
     * 2: Headset with no microphone.
     */
    AudioOutputRouting[AudioOutputRouting["HeadsetNoMic"] = 2] = "HeadsetNoMic";
    /**
     * 3: Speakerphone.
     */
    AudioOutputRouting[AudioOutputRouting["Speakerphone"] = 3] = "Speakerphone";
    /**
     * 4: Loudspeaker.
     */
    AudioOutputRouting[AudioOutputRouting["Loudspeaker"] = 4] = "Loudspeaker";
    /**
     * 5: Bluetooth headset.
     */
    AudioOutputRouting[AudioOutputRouting["HeadsetBluetooth"] = 5] = "HeadsetBluetooth";
})(AudioOutputRouting || (AudioOutputRouting = {}));
/**
 * Audio profile.
 */
export var AudioProfile;
(function (AudioProfile) {
    /**
     * 0: Default audio profile.
     * - In the `Communication` profile: A sample rate of 32 KHz, audio encoding, mono, and a bitrate of up to 18 Kbps.
     * - In the `LiveBroadcasting` profile: A sample rate of 48 KHz, music encoding, mono, and a bitrate of up to 64 Kbps.
     */
    AudioProfile[AudioProfile["Default"] = 0] = "Default";
    /**
     * 1: A sample rate of 32 KHz, audio encoding, mono, and a bitrate of up to 18 Kbps.
     */
    AudioProfile[AudioProfile["SpeechStandard"] = 1] = "SpeechStandard";
    /**
     * 2: A sample rate of 48 KHz, music encoding, mono, and a bitrate of up to 64 Kbps.
     */
    AudioProfile[AudioProfile["MusicStandard"] = 2] = "MusicStandard";
    /**
     * 3: A sample rate of 48 KHz, music encoding, stereo, and a bitrate of up to 80 Kbps.
     */
    AudioProfile[AudioProfile["MusicStandardStereo"] = 3] = "MusicStandardStereo";
    /**
     * 4: A sample rate of 48 KHz, music encoding, mono, and a bitrate of up to 96 Kbps.
     */
    AudioProfile[AudioProfile["MusicHighQuality"] = 4] = "MusicHighQuality";
    /**
     * 5: A sample rate of 48 KHz, music encoding, stereo, and a bitrate of up to 128 Kbps.
     */
    AudioProfile[AudioProfile["MusicHighQualityStereo"] = 5] = "MusicHighQualityStereo";
})(AudioProfile || (AudioProfile = {}));
/**
 * Audio recording quality.
 */
export var AudioRecordingQuality;
(function (AudioRecordingQuality) {
    /**
     * 0: The sample rate is 32 KHz, and the file size is around 1.2 MB after 10 minutes of recording.
     */
    AudioRecordingQuality[AudioRecordingQuality["Low"] = 0] = "Low";
    /**
     * 1: The sample rate is 32 KHz, and the file size is around 2 MB after 10 minutes of recording.
     */
    AudioRecordingQuality[AudioRecordingQuality["Medium"] = 1] = "Medium";
    /**
     * 2: The sample rate is 32 KHz, and the file size is around 3.75 MB after 10 minutes of recording.
     */
    AudioRecordingQuality[AudioRecordingQuality["High"] = 2] = "High";
})(AudioRecordingQuality || (AudioRecordingQuality = {}));
/**
 * The state of the remote audio.
 */
export var AudioRemoteState;
(function (AudioRemoteState) {
    /**
     * 0: The remote audio is in the default state, probably due to:
     * - [`LocalMuted`]{@link AudioRemoteStateReason.LocalMuted}
     * - [`RemoteMuted`]{@link AudioRemoteStateReason.RemoteMuted}
     * - [`RemoteOffline`]{@link AudioRemoteStateReason.RemoteOffline}
     */
    AudioRemoteState[AudioRemoteState["Stopped"] = 0] = "Stopped";
    /**
     * 1: The first remote audio packet is received.
     */
    AudioRemoteState[AudioRemoteState["Starting"] = 1] = "Starting";
    /**
     * 2: The remote audio stream is decoded and plays normally, probably due to:
     * - [`NetworkRecovery`]{@link AudioRemoteStateReason.NetworkRecovery}
     * - [`LocalUnmuted`]{@link AudioRemoteStateReason.LocalUnmuted}
     * - [`RemoteUnmuted`]{@link AudioRemoteStateReason.RemoteUnmuted}
     */
    AudioRemoteState[AudioRemoteState["Decoding"] = 2] = "Decoding";
    /**
     * 3: The remote audio is frozen, probably due to:
     * [`NetworkCongestion`]{@link AudioRemoteStateReason.NetworkCongestion}
     */
    AudioRemoteState[AudioRemoteState["Frozen"] = 3] = "Frozen";
    /**
     * 4: The remote audio fails to start, probably due to:
     * [`Internal`]{@link AudioRemoteStateReason.Internal}
     */
    AudioRemoteState[AudioRemoteState["Failed"] = 4] = "Failed";
})(AudioRemoteState || (AudioRemoteState = {}));
/**
 * The reason of the remote audio state change.
 */
export var AudioRemoteStateReason;
(function (AudioRemoteStateReason) {
    /**
     * 0: Internal reasons.
     */
    AudioRemoteStateReason[AudioRemoteStateReason["Internal"] = 0] = "Internal";
    /**
     * 1: Network congestion.
     */
    AudioRemoteStateReason[AudioRemoteStateReason["NetworkCongestion"] = 1] = "NetworkCongestion";
    /**
     * 2: Network recovery.
     */
    AudioRemoteStateReason[AudioRemoteStateReason["NetworkRecovery"] = 2] = "NetworkRecovery";
    /**
     * 3: The local user stops receiving the remote audio stream or disables the audio module.
     */
    AudioRemoteStateReason[AudioRemoteStateReason["LocalMuted"] = 3] = "LocalMuted";
    /**
     * 4: The local user resumes receiving the remote audio stream or enables the audio module.
     */
    AudioRemoteStateReason[AudioRemoteStateReason["LocalUnmuted"] = 4] = "LocalUnmuted";
    /**
     * 5: The remote user stops sending the audio stream or disables the audio module.
     */
    AudioRemoteStateReason[AudioRemoteStateReason["RemoteMuted"] = 5] = "RemoteMuted";
    /**
     * 6: The remote user resumes sending the audio stream or enables the audio module.
     */
    AudioRemoteStateReason[AudioRemoteStateReason["RemoteUnmuted"] = 6] = "RemoteUnmuted";
    /**
     * 7: The remote user leaves the channel.
     */
    AudioRemoteStateReason[AudioRemoteStateReason["RemoteOffline"] = 7] = "RemoteOffline";
})(AudioRemoteStateReason || (AudioRemoteStateReason = {}));
/**
 * The preset local voice reverberation option.
 */
export var AudioReverbPreset;
(function (AudioReverbPreset) {
    /**
     * The original voice (no local voice reverberation).
     */
    AudioReverbPreset[AudioReverbPreset["Off"] = 0] = "Off";
    /**
     * Pop music.
     */
    AudioReverbPreset[AudioReverbPreset["Popular"] = 1] = "Popular";
    /**
     * R&B.
     */
    AudioReverbPreset[AudioReverbPreset["RnB"] = 2] = "RnB";
    /**
     * Rock music.
     */
    AudioReverbPreset[AudioReverbPreset["Rock"] = 3] = "Rock";
    /**
     * Hip-hop music.
     */
    AudioReverbPreset[AudioReverbPreset["HipHop"] = 4] = "HipHop";
    /**
     * Pop concert.
     */
    AudioReverbPreset[AudioReverbPreset["VocalConcert"] = 5] = "VocalConcert";
    /**
     * Karaoke.
     */
    AudioReverbPreset[AudioReverbPreset["KTV"] = 6] = "KTV";
    /**
     * Recording studio.
     */
    AudioReverbPreset[AudioReverbPreset["Studio"] = 7] = "Studio";
    /**
     * The reverberation style typical of a KTV venue (enhanced).
     */
    AudioReverbPreset[AudioReverbPreset["FX_KTV"] = 1048577] = "FX_KTV";
    /**
     * The reverberation style typical of a concert hall (enhanced).
     */
    AudioReverbPreset[AudioReverbPreset["FX_VOCAL_CONCERT"] = 1048578] = "FX_VOCAL_CONCERT";
    /**
     * The reverberation style typical of an uncle’s voice.
     */
    AudioReverbPreset[AudioReverbPreset["FX_UNCLE"] = 1048579] = "FX_UNCLE";
    /**
     * The reverberation style typical of a sister’s voice.
     */
    AudioReverbPreset[AudioReverbPreset["FX_SISTER"] = 1048580] = "FX_SISTER";
    /**
     * The reverberation style typical of a recording studio (enhanced).
     */
    AudioReverbPreset[AudioReverbPreset["FX_STUDIO"] = 1048581] = "FX_STUDIO";
    /**
     * The reverberation style typical of popular music (enhanced).
     */
    AudioReverbPreset[AudioReverbPreset["FX_POPULAR"] = 1048582] = "FX_POPULAR";
    /**
     * The reverberation style typical of R&B music (enhanced).
     */
    AudioReverbPreset[AudioReverbPreset["FX_RNB"] = 1048583] = "FX_RNB";
    /**
     * The reverberation style typical of the vintage phonograph.
     */
    AudioReverbPreset[AudioReverbPreset["FX_PHONOGRAPH"] = 1048584] = "FX_PHONOGRAPH";
    /**
     * The reverberation of the virtual stereo. The virtual stereo is an effect that renders
     * the monophonic audio as the stereo audio, so that all users in the channel can hear the stereo voice effect.
     * To achieve better virtual stereo reverberation, Agora recommends setting the profile
     * parameter in [`RtcEngine#setAudioProfile`]{@link RtcEngine#setAudioProfile} as [`MusicHighQualityStereo(5)`]{@link AudioProfile.MusicHighQualityStereo}.
     */
    AudioReverbPreset[AudioReverbPreset["VIRTUAL_STEREO"] = 2097153] = "VIRTUAL_STEREO";
})(AudioReverbPreset || (AudioReverbPreset = {}));
/**
 * Audio reverberation type.
 */
export var AudioReverbType;
(function (AudioReverbType) {
    /**
     * 0: The level of the dry signal (dB). The value ranges between -20 and 10.
     */
    AudioReverbType[AudioReverbType["DryLevel"] = 0] = "DryLevel";
    /**
     * 1: The level of the early reflection signal (wet signal) in dB. The value ranges between -20 and 10.
     */
    AudioReverbType[AudioReverbType["WetLevel"] = 1] = "WetLevel";
    /**
     * 2: The room size of the reverberation. A larger room size means a stronger reverberation. The value ranges between 0 and 100.
     */
    AudioReverbType[AudioReverbType["RoomSize"] = 2] = "RoomSize";
    /**
     * 3: The length of the initial delay of the wet signal (ms). The value ranges between 0 and 200.
     */
    AudioReverbType[AudioReverbType["WetDelay"] = 3] = "WetDelay";
    /**
     * 4: The reverberation strength. The value ranges between 0 and 100.
     */
    AudioReverbType[AudioReverbType["Strength"] = 4] = "Strength";
})(AudioReverbType || (AudioReverbType = {}));
/**
 * Audio sample rate.
 */
export var AudioSampleRateType;
(function (AudioSampleRateType) {
    /**
     * 32000: 32 kHz.
     */
    AudioSampleRateType[AudioSampleRateType["Type32000"] = 32000] = "Type32000";
    /**
     * 44100: 44.1 kHz.
     */
    AudioSampleRateType[AudioSampleRateType["Type44100"] = 44100] = "Type44100";
    /**
     * 48000: 48 kHz.
     */
    AudioSampleRateType[AudioSampleRateType["Type48000"] = 48000] = "Type48000";
})(AudioSampleRateType || (AudioSampleRateType = {}));
/**
 * Audio scenario.
 */
export var AudioScenario;
(function (AudioScenario) {
    /**
     * 0: Default.
     */
    AudioScenario[AudioScenario["Default"] = 0] = "Default";
    /**
     * 1: Entertainment scenario, supporting voice during gameplay.
     */
    AudioScenario[AudioScenario["ChatRoomEntertainment"] = 1] = "ChatRoomEntertainment";
    /**
     * 2: Education scenario, prioritizing fluency and stability.
     */
    AudioScenario[AudioScenario["Education"] = 2] = "Education";
    /**
     * 3: Live gaming scenario, enabling the gaming audio effects in the speaker mode in a live broadcast scenario. Choose this scenario for high-fidelity music playback.
     */
    AudioScenario[AudioScenario["GameStreaming"] = 3] = "GameStreaming";
    /**
     * 4: Showroom scenario, optimizing the audio quality with external professional equipment.
     */
    AudioScenario[AudioScenario["ShowRoom"] = 4] = "ShowRoom";
    /**
     * 5: Gaming scenario.
     */
    AudioScenario[AudioScenario["ChatRoomGaming"] = 5] = "ChatRoomGaming";
})(AudioScenario || (AudioScenario = {}));
/**
 * The preset audio voice configuration used to change the voice effect.
 */
export var AudioVoiceChanger;
(function (AudioVoiceChanger) {
    /**
     * The original voice (no local voice change).
     */
    AudioVoiceChanger[AudioVoiceChanger["Off"] = 0] = "Off";
    /**
     * An old man’s voice.
     */
    AudioVoiceChanger[AudioVoiceChanger["OldMan"] = 1] = "OldMan";
    /**
     * A little boy’s voice.
     */
    AudioVoiceChanger[AudioVoiceChanger["BabyBoy"] = 2] = "BabyBoy";
    /**
     * A little girl’s voice.
     */
    AudioVoiceChanger[AudioVoiceChanger["BabyGirl"] = 3] = "BabyGirl";
    /**
     * The voice of a growling bear.
     */
    AudioVoiceChanger[AudioVoiceChanger["ZhuBaJie"] = 4] = "ZhuBaJie";
    /**
     * Ethereal vocal effects.
     */
    AudioVoiceChanger[AudioVoiceChanger["Ethereal"] = 5] = "Ethereal";
    /**
     * Hulk’s voice.
     */
    AudioVoiceChanger[AudioVoiceChanger["Hulk"] = 6] = "Hulk";
    /**
     * A more vigorous voice.
     */
    AudioVoiceChanger[AudioVoiceChanger["BEAUTY_VIGOROUS"] = 1048577] = "BEAUTY_VIGOROUS";
    /**
     * A deeper voice.
     */
    AudioVoiceChanger[AudioVoiceChanger["BEAUTY_DEEP"] = 1048578] = "BEAUTY_DEEP";
    /**
     * A mellower voice.
     */
    AudioVoiceChanger[AudioVoiceChanger["BEAUTY_MELLOW"] = 1048579] = "BEAUTY_MELLOW";
    /**
     * Falsetto.
     */
    AudioVoiceChanger[AudioVoiceChanger["BEAUTY_FALSETTO"] = 1048580] = "BEAUTY_FALSETTO";
    /**
     * A fuller voice.
     */
    AudioVoiceChanger[AudioVoiceChanger["BEAUTY_FULL"] = 1048581] = "BEAUTY_FULL";
    /**
     * A clearer voice.
     */
    AudioVoiceChanger[AudioVoiceChanger["BEAUTY_CLEAR"] = 1048582] = "BEAUTY_CLEAR";
    /**
     * A more resounding voice.
     */
    AudioVoiceChanger[AudioVoiceChanger["BEAUTY_RESOUNDING"] = 1048583] = "BEAUTY_RESOUNDING";
    /**
     * A more ringing voice.
     */
    AudioVoiceChanger[AudioVoiceChanger["BEAUTY_RINGING"] = 1048584] = "BEAUTY_RINGING";
    /**
     * A more spatially resonant voice.
     */
    AudioVoiceChanger[AudioVoiceChanger["BEAUTY_SPACIAL"] = 1048585] = "BEAUTY_SPACIAL";
    /**
     * (For male only) A more magnetic voice. Do not use it when the speaker is a female; otherwise, voice distortion occurs.
     */
    AudioVoiceChanger[AudioVoiceChanger["GENERAL_BEAUTY_VOICE_MALE_MAGNETIC"] = 2097153] = "GENERAL_BEAUTY_VOICE_MALE_MAGNETIC";
    /**
     * (For female only) A fresher voice. Do not use it when the speaker is a male; otherwise, voice distortion occurs.
     */
    AudioVoiceChanger[AudioVoiceChanger["GENERAL_BEAUTY_VOICE_FEMALE_FRESH"] = 2097154] = "GENERAL_BEAUTY_VOICE_FEMALE_FRESH";
    /**
     * (For female only) A more vital voice. Do not use it when the speaker is a male; otherwise, voice distortion occurs.
     */
    AudioVoiceChanger[AudioVoiceChanger["GENERAL_BEAUTY_VOICE_FEMALE_VITALITY"] = 2097155] = "GENERAL_BEAUTY_VOICE_FEMALE_VITALITY";
})(AudioVoiceChanger || (AudioVoiceChanger = {}));
/**
 * The camera capturer configuration.
 */
export var CameraCaptureOutputPreference;
(function (CameraCaptureOutputPreference) {
    /**
     * 0: (default) Self-adapts the camera output parameters to the system performance and network conditions to balance CPU consumption and video preview quality.
     */
    CameraCaptureOutputPreference[CameraCaptureOutputPreference["Auto"] = 0] = "Auto";
    /**
     * 1: Prioritizes the system performance. The SDK chooses the dimension and frame rate of the local camera capture closest to those set by [`setVideoEncoderConfiguration`]{@link RtcEngine.setVideoEncoderConfiguration}.
     */
    CameraCaptureOutputPreference[CameraCaptureOutputPreference["Performance"] = 1] = "Performance";
    /**
     * 2: Prioritizes the local preview quality. The SDK chooses higher camera output parameters to improve the local video preview quality. This option requires extra CPU and RAM usage for video pre-processing.
     */
    CameraCaptureOutputPreference[CameraCaptureOutputPreference["Preview"] = 2] = "Preview";
    /**
     * 3: Internal use only
     */
    CameraCaptureOutputPreference[CameraCaptureOutputPreference["Unkown"] = 3] = "Unkown";
})(CameraCaptureOutputPreference || (CameraCaptureOutputPreference = {}));
/**
 * The camera direction.
 */
export var CameraDirection;
(function (CameraDirection) {
    /**
     * 0: The rear camera.
     */
    CameraDirection[CameraDirection["Rear"] = 0] = "Rear";
    /**
     * 1: The front camera.
     */
    CameraDirection[CameraDirection["Front"] = 1] = "Front";
})(CameraDirection || (CameraDirection = {}));
/**
 * The error code in AgoraChannelMediaRelayError.
 */
export var ChannelMediaRelayError;
(function (ChannelMediaRelayError) {
    /**
     * 0: The state is normal.
     */
    ChannelMediaRelayError[ChannelMediaRelayError["None"] = 0] = "None";
    /**
     * 1: An error occurs in the server response.
     */
    ChannelMediaRelayError[ChannelMediaRelayError["ServerErrorResponse"] = 1] = "ServerErrorResponse";
    /**
     * 2: No server response. You can call the leaveChannel method to leave the channel.
     * [`leaveChannel`]{@link RtcEngine.leaveChannel}
     */
    ChannelMediaRelayError[ChannelMediaRelayError["ServerNoResponse"] = 2] = "ServerNoResponse";
    /**
     * 3: The SDK fails to access the service, probably due to limited resources of the server.
     */
    ChannelMediaRelayError[ChannelMediaRelayError["NoResourceAvailable"] = 3] = "NoResourceAvailable";
    /**
     * 4: Fails to send the relay request.
     */
    ChannelMediaRelayError[ChannelMediaRelayError["FailedJoinSourceChannel"] = 4] = "FailedJoinSourceChannel";
    /**
     * 5: Fails to accept the relay request.
     */
    ChannelMediaRelayError[ChannelMediaRelayError["FailedJoinDestinationChannel"] = 5] = "FailedJoinDestinationChannel";
    /**
     * 6: The server fails to receive the media stream.
     */
    ChannelMediaRelayError[ChannelMediaRelayError["FailedPacketReceivedFromSource"] = 6] = "FailedPacketReceivedFromSource";
    /**
     * 7: The server fails to send the media stream.
     */
    ChannelMediaRelayError[ChannelMediaRelayError["FailedPacketSentToDestination"] = 7] = "FailedPacketSentToDestination";
    /**
     * 8: The SDK disconnects from the server due to poor network connections. You can call [`leaveChannel`]{@link RtcEngine.leaveChannel} to leave the channel.
     */
    ChannelMediaRelayError[ChannelMediaRelayError["ServerConnectionLost"] = 8] = "ServerConnectionLost";
    /**
     * 9: An internal error occurs in the server.
     */
    ChannelMediaRelayError[ChannelMediaRelayError["InternalError"] = 9] = "InternalError";
    /**
     * 10: The token of the source channel has expired.
     */
    ChannelMediaRelayError[ChannelMediaRelayError["SourceTokenExpired"] = 10] = "SourceTokenExpired";
    /**
     * 11: The token of the destination channel has expired.
     */
    ChannelMediaRelayError[ChannelMediaRelayError["DestinationTokenExpired"] = 11] = "DestinationTokenExpired";
})(ChannelMediaRelayError || (ChannelMediaRelayError = {}));
/**
 * The event code in `ChannelMediaRelayEvent`.
 */
export var ChannelMediaRelayEvent;
(function (ChannelMediaRelayEvent) {
    /**
     * 0: The user disconnects from the server due to poor network connections.
     */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["Disconnect"] = 0] = "Disconnect";
    /**
     * 1: The network reconnects.
     */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["Connected"] = 1] = "Connected";
    /**
     * 2: The user joins the source channel.
     */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["JoinedSourceChannel"] = 2] = "JoinedSourceChannel";
    /**
     * 3: The user joins the destination channel.
     */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["JoinedDestinationChannel"] = 3] = "JoinedDestinationChannel";
    /**
     * 4: The SDK starts relaying the media stream to the destination channel.
     */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["SentToDestinationChannel"] = 4] = "SentToDestinationChannel";
    /**
     * 5: The server receives the video stream from the source channel.
     */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["ReceivedVideoPacketFromSource"] = 5] = "ReceivedVideoPacketFromSource";
    /**
     * 6: The server receives the audio stream from the source channel.
     */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["ReceivedAudioPacketFromSource"] = 6] = "ReceivedAudioPacketFromSource";
    /**
     * 7: The destination channel is updated.
     */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["UpdateDestinationChannel"] = 7] = "UpdateDestinationChannel";
    /**
     * 8: The destination channel update fails due to internal reasons.
     */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["UpdateDestinationChannelRefused"] = 8] = "UpdateDestinationChannelRefused";
    /**
     * 9: The destination channel does not change, which means that the destination channel fails to be updated.
     */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["UpdateDestinationChannelNotChange"] = 9] = "UpdateDestinationChannelNotChange";
    /**
     * 10: The destination channel name is null.
     */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["UpdateDestinationChannelIsNil"] = 10] = "UpdateDestinationChannelIsNil";
    /**
     * 11: The video profile is sent to the server.
     */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["VideoProfileUpdate"] = 11] = "VideoProfileUpdate";
})(ChannelMediaRelayEvent || (ChannelMediaRelayEvent = {}));
/**
 * The state code in [`ChannelMediaRelayState`]{@link ChannelMediaRelayState}.
 */
export var ChannelMediaRelayState;
(function (ChannelMediaRelayState) {
    /**
     * 0: The SDK is initializing.
     */
    ChannelMediaRelayState[ChannelMediaRelayState["Idle"] = 0] = "Idle";
    /**
     * 1: The SDK tries to relay the media stream to the destination channel.
     */
    ChannelMediaRelayState[ChannelMediaRelayState["Connecting"] = 1] = "Connecting";
    /**
     * 2: The SDK successfully relays the media stream to the destination channel.
     */
    ChannelMediaRelayState[ChannelMediaRelayState["Running"] = 2] = "Running";
    /**
     * 3: A failure occurs. See the details in error.
     */
    ChannelMediaRelayState[ChannelMediaRelayState["Failure"] = 3] = "Failure";
})(ChannelMediaRelayState || (ChannelMediaRelayState = {}));
/**
 * Channel profile.
 */
export var ChannelProfile;
(function (ChannelProfile) {
    /**
     * 0: (Default) The Communication profile.
     * Use this profile in one-on-one calls or group calls, where all users can talk freely.
     */
    ChannelProfile[ChannelProfile["Communication"] = 0] = "Communication";
    /**
     * 1: The Live-Broadcast profile.
     * Users in a live-broadcast channel have a role as either host or audience. A host can both send and receive streams; an audience can only receive streams.
     */
    ChannelProfile[ChannelProfile["LiveBroadcasting"] = 1] = "LiveBroadcasting";
    /**
     * 2: The Gaming profile.
     * This profile uses a codec with a lower bitrate and consumes less power. Applies to the gaming scenario, where all game players can talk freely.
     */
    ChannelProfile[ChannelProfile["Game"] = 2] = "Game";
})(ChannelProfile || (ChannelProfile = {}));
/**
 * Client role in the `LiveBroadcasting` profile.
 */
export var ClientRole;
(function (ClientRole) {
    /**
     * 1: A host can both send and receive streams.
     */
    ClientRole[ClientRole["Broadcaster"] = 1] = "Broadcaster";
    /**
     * 2: The default role. An audience can only receive streams.
     */
    ClientRole[ClientRole["Audience"] = 2] = "Audience";
})(ClientRole || (ClientRole = {}));
/**
 * Reasons for the connection state change.
 */
export var ConnectionChangedReason;
(function (ConnectionChangedReason) {
    /**
     * 0: The SDK is connecting to Agora’s edge server.
     */
    ConnectionChangedReason[ConnectionChangedReason["Connecting"] = 0] = "Connecting";
    /**
     * 1: The SDK has joined the channel successfully.
     */
    ConnectionChangedReason[ConnectionChangedReason["JoinSuccess"] = 1] = "JoinSuccess";
    /**
     * 2: The connection between the SDK and Agora’s edge server is interrupted.
     */
    ConnectionChangedReason[ConnectionChangedReason["Interrupted"] = 2] = "Interrupted";
    /**
     * 3: The connection between the SDK and Agora’s edge server is banned by Agora’s edge server.
     */
    ConnectionChangedReason[ConnectionChangedReason["BannedByServer"] = 3] = "BannedByServer";
    /**
     * 4: The SDK fails to join the channel for more than 20 minutes and stops reconnecting to the channel.
     */
    ConnectionChangedReason[ConnectionChangedReason["JoinFailed"] = 4] = "JoinFailed";
    /**
     * 5: The SDK has left the channel.
     */
    ConnectionChangedReason[ConnectionChangedReason["LeaveChannel"] = 5] = "LeaveChannel";
    /**
     * 6: The specified App ID is invalid. Try to rejoin the channel with a valid App ID.
     */
    ConnectionChangedReason[ConnectionChangedReason["InvalidAppId"] = 6] = "InvalidAppId";
    /**
     * 7: The specified channel name is invalid. Try to rejoin the channel with a valid channel name.
     */
    ConnectionChangedReason[ConnectionChangedReason["InvalidChannelName"] = 7] = "InvalidChannelName";
    /**
     * 8: The generated token is invalid probably due to the following reasons:
     * - The App Certificate for the project is enabled in Console, but you do not use Token when joining the channel. If you enable the App Certificate, you must use a token to join the channel.
     * - The uid that you specify in the [`joinChannel`]{@link RtcEngine.joinChannel} method is different from the uid that you pass for generating the token.
     */
    ConnectionChangedReason[ConnectionChangedReason["InvalidToken"] = 8] = "InvalidToken";
    /**
     * 9: The token has expired. Generate a new token from your server.
     */
    ConnectionChangedReason[ConnectionChangedReason["TokenExpired"] = 9] = "TokenExpired";
    /**
     * 10: The user is banned by the server.
     */
    ConnectionChangedReason[ConnectionChangedReason["RejectedByServer"] = 10] = "RejectedByServer";
    /**
     * 11: The SDK tries to reconnect after setting a proxy server.
     */
    ConnectionChangedReason[ConnectionChangedReason["SettingProxyServer"] = 11] = "SettingProxyServer";
    /**
     * 12: The token renews.
     */
    ConnectionChangedReason[ConnectionChangedReason["RenewToken"] = 12] = "RenewToken";
    /**
     * 13: The client IP address has changed, probably due to a change of the network type, IP address, or network port.
     */
    ConnectionChangedReason[ConnectionChangedReason["ClientIpAddressChanged"] = 13] = "ClientIpAddressChanged";
    /**
     * 14: Timeout for the keep-alive of the connection between the SDK and Agora’s edge server. The connection state changes to:
     * [`Reconnecting`]{@link ConnectionStateType.Reconnecting}
     */
    ConnectionChangedReason[ConnectionChangedReason["KeepAliveTimeout"] = 14] = "KeepAliveTimeout";
})(ConnectionChangedReason || (ConnectionChangedReason = {}));
/**
 * Connection states.
 */
export var ConnectionStateType;
(function (ConnectionStateType) {
    /**
     * 1: The SDK is disconnected from Agora's edge server.
     * - This is the initial state before [`joinChannel`]{@link RtcEngine.joinChannel}.
     * - The SDK also enters this state when the app calls [`leaveChannel`]{@link RtcEngine.leaveChannel}.
     */
    ConnectionStateType[ConnectionStateType["Disconnected"] = 1] = "Disconnected";
    /**
     * 2: The SDK is connecting to Agora's edge server.
     * - When the app calls [`joinChannel`]{@link RtcEngine.joinChannel}, the SDK starts to establish a connection to the specified channel, triggers the [`ConnectionStateChanged`]{@link RtcEngineEvents.ConnectionStateChanged} callback, and switches to the [`Connecting`]{@link ConnectionStateType.Connecting} state.
     * - When the SDK successfully joins the channel, the SDK triggers the [`ConnectionStateChanged`]{@link RtcEngineEvents.ConnectionStateChanged} callback and switches to the [`Connected`]{@link ConnectionStateType.Connected} state.
     * - After the SDK joins the channel and when it finishes initializing the media engine, the SDK triggers the [`JoinChannelSuccess`]{@link RtcEngineEvents.JoinChannelSuccess} callback.
     */
    ConnectionStateType[ConnectionStateType["Connecting"] = 2] = "Connecting";
    /**
     * 3: The SDK is connected to Agora's edge server and joins a channel. You can now publish or subscribe to a media stream in the channel.
     * If the connection to the channel is lost because, for example, the network is down or switched, the SDK automatically tries to reconnect and triggers:
     * - The [`ConnectionStateChanged`]{@link RtcEngineEvents.ConnectionStateChanged} callback, and switches to the [`Reconnecting`]{@link ConnectionStateType.Reconnecting} state.
     */
    ConnectionStateType[ConnectionStateType["Connected"] = 3] = "Connected";
    /**
     * 4: The SDK keeps rejoining the channel after being disconnected from a joined channel because of network issues.
     * - If the SDK cannot rejoin the channel within 10 seconds after being disconnected from Agora’s edge server, the SDK triggers the [`ConnectionLost`]{@link RtcEngineEvents.ConnectionLost} callback, stays in the [`Reconnecting`]{@link ConnectionStateType.Reconnecting} state, and keeps rejoining the channel.
     *
     * - If the SDK fails to rejoin the channel 20 minutes after being disconnected from Agora’s edge server, the SDK triggers the [`ConnectionStateChanged`]{@link RtcEngineEvents.ConnectionStateChanged} callback, switches to the [`Failed`]{@link ConnectionStateType.Failed} state, and stops rejoining the channel.
     * [`ConnectionStateChanged`]{@link RtcEngineEvents.ConnectionStateChanged}
     */
    ConnectionStateType[ConnectionStateType["Reconnecting"] = 4] = "Reconnecting";
    /**
     * 5: The SDK fails to connect to Agora's edge server or join the channel.
     * You must call [`leaveChannel`]{@link RtcEngine.leaveChannel} to leave this state, and call [`joinChannel`]{@link RtcEngine.joinChannel} again to rejoin the channel.
     *
     * If the SDK is banned from joining the channel by Agora’s edge server (through the RESTful API), the SDK triggers the [`ConnectionStateChanged`]{@link RtcEngineEvents.ConnectionStateChanged} callbacks.
     */
    ConnectionStateType[ConnectionStateType["Failed"] = 5] = "Failed";
})(ConnectionStateType || (ConnectionStateType = {}));
/**
 * The video encoding degradation preference under limited bandwidth.
 */
export var DegradationPreference;
(function (DegradationPreference) {
    /**
     * 0: (Default) Degrades the frame rate to guarantee the video quality.
     */
    DegradationPreference[DegradationPreference["MaintainQuality"] = 0] = "MaintainQuality";
    /**
     * 1: Degrades the video quality to guarantee the frame rate.
     */
    DegradationPreference[DegradationPreference["MaintainFramerate"] = 1] = "MaintainFramerate";
    /**
     * 2: Reserved for future use.
     */
    DegradationPreference[DegradationPreference["Balanced"] = 2] = "Balanced";
})(DegradationPreference || (DegradationPreference = {}));
/**
 * Encryption mode.
 */
export var EncryptionMode;
(function (EncryptionMode) {
    /**
     * @deprecated
     * 0: This mode is deprecated.
     */
    EncryptionMode[EncryptionMode["None"] = 0] = "None";
    /**
     * 1: (Default) 128-bit AES encryption, XTS mode.
     */
    EncryptionMode[EncryptionMode["AES128XTS"] = 1] = "AES128XTS";
    /**
     * 2: 128-bit AES encryption, ECB mode.
     */
    EncryptionMode[EncryptionMode["AES128ECB"] = 2] = "AES128ECB";
    /**
     * 3: 256-bit AES encryption, XTS mode.
     */
    EncryptionMode[EncryptionMode["AES256XTS"] = 3] = "AES256XTS";
    /**
     * 4: 128-bit SM4 encryption, ECB mode.
     *
     * @since v3.1.2.
     */
    EncryptionMode[EncryptionMode["SM4128ECB"] = 4] = "SM4128ECB";
})(EncryptionMode || (EncryptionMode = {}));
/**
 * Error codes occur when the SDK encounters an error that cannot be recovered automatically without any app intervention.
 */
export var ErrorCode;
(function (ErrorCode) {
    /**
     * 0: No error occurs.
     */
    ErrorCode[ErrorCode["NoError"] = 0] = "NoError";
    /**
     * 1: A general error occurs (no specified reason).
     */
    ErrorCode[ErrorCode["Failed"] = 1] = "Failed";
    /**
     * 2: An invalid parameter is used. For example, the specific channel name includes illegal characters.
     */
    ErrorCode[ErrorCode["InvalidArgument"] = 2] = "InvalidArgument";
    /**
     * 3: The SDK module is not ready.
     * Possible solutions:
     * - Check the audio device.
     * - Check the completeness of the app.
     * - Re-initialize the SDK.
     */
    ErrorCode[ErrorCode["NotReady"] = 3] = "NotReady";
    /**
     * 4: The current state of the SDK does not support this function.
     */
    ErrorCode[ErrorCode["NotSupported"] = 4] = "NotSupported";
    /**
     * 5: The request is rejected. This is for internal SDK use only, and is not returned to the app through any method or callback.
     */
    ErrorCode[ErrorCode["Refused"] = 5] = "Refused";
    /**
     * 6: The buffer size is not big enough to store the returned data.
     */
    ErrorCode[ErrorCode["BufferTooSmall"] = 6] = "BufferTooSmall";
    /**
     * 7: The SDK is not initialized before calling this method.
     */
    ErrorCode[ErrorCode["NotInitialized"] = 7] = "NotInitialized";
    /**
     * 9: No permission exists. Check if the user has granted access to the audio or video device.
     */
    ErrorCode[ErrorCode["NoPermission"] = 9] = "NoPermission";
    /**
     * 10: An API method timeout occurs. Some API methods require the SDK to return the execution result, and this error occurs if the request takes too long (over 10 seconds) for the SDK to process.
     */
    ErrorCode[ErrorCode["TimedOut"] = 10] = "TimedOut";
    /**
     * 11: The request is canceled. This is for internal SDK use only, and is not returned to the app through any method or callback.
     */
    ErrorCode[ErrorCode["Canceled"] = 11] = "Canceled";
    /**
     * 12: The method is called too often. This is for internal SDK use only, and is not returned to the app through any method or callback.
     */
    ErrorCode[ErrorCode["TooOften"] = 12] = "TooOften";
    /**
     * 13: The SDK fails to bind to the network socket. This is for internal SDK use only, and is not returned to the app through any method or callback.
     */
    ErrorCode[ErrorCode["BindSocket"] = 13] = "BindSocket";
    /**
     * 14: The network is unavailable. This is for internal SDK use only, and is not returned to the app through any method or callback.
     */
    ErrorCode[ErrorCode["NetDown"] = 14] = "NetDown";
    /**
     * 15: No network buffers are available. This is for internal SDK use only, and is not returned to the app through any method or callback.
     */
    ErrorCode[ErrorCode["NoBufs"] = 15] = "NoBufs";
    /**
     * 17: The request to join the channel is rejected.
     * Possible reasons are:
     * - The user is already in the channel, and still calls the API method to join the channel, for example, [`joinChannel`]{@link RtcEngine.joinChannel}
     * - The user tries joining the channel during the echo test. Please join the channel after the echo test ends.
     */
    ErrorCode[ErrorCode["JoinChannelRejected"] = 17] = "JoinChannelRejected";
    /**
     * 18: The request to leave the channel is rejected.
     * Possible reasons are:
     * - The user left the channel and still calls the API method to leave the channel, for example, [`leaveChannel`]{@link RtcEngine.leaveChannel}.
     * - The user has not joined the channel and calls the API method to leave the channel.
     */
    ErrorCode[ErrorCode["LeaveChannelRejected"] = 18] = "LeaveChannelRejected";
    /**
     * 19: The resources are occupied and cannot be used.
     */
    ErrorCode[ErrorCode["AlreadyInUse"] = 19] = "AlreadyInUse";
    /**
     * 20: The SDK gave up the request due to too many requests.
     */
    ErrorCode[ErrorCode["Abort"] = 20] = "Abort";
    /**
     * 21: In Windows, specific firewall settings cause the SDK to fail to initialize and crash.
     */
    ErrorCode[ErrorCode["InitNetEngine"] = 21] = "InitNetEngine";
    /**
     * 22: The app uses too much of the system resources and the SDK fails to allocate the resources.
     */
    ErrorCode[ErrorCode["ResourceLimited"] = 22] = "ResourceLimited";
    /**
     * 101: The specified App ID is invalid. Please try to rejoin the channel with a valid App ID.
     */
    ErrorCode[ErrorCode["InvalidAppId"] = 101] = "InvalidAppId";
    /**
     * 102: The specified channel name is invalid. Please try to rejoin the channel with a valid channel name.
     */
    ErrorCode[ErrorCode["InvalidChannelId"] = 102] = "InvalidChannelId";
    /**
     * 103: Fails to get server resources in the specified region. Please try to specify another region.
     *
     * @since v3.1.2.
     */
    ErrorCode[ErrorCode["NoServerResources"] = 103] = "NoServerResources";
    /**
     * 109: The token expired.
     * @deprecated Use [`TokenExpired`]{@link ConnectionChangedReason.TokenExpired} in the reason parameter of [`onConnectionStateChanged`]{@link RtcEngineEvents.ConnectionStateChanged}.
     *
     * Possible reasons are:
     * - Authorized Timestamp expired: The timestamp is represented by the number of seconds elapsed since 1/1/1970. The user can use the token to access the Agora service within five minutes after the token is generated. If the user does not access the Agora service after five minutes, this token is no longer valid.
     * - Call Expiration Timestamp expired: The timestamp is the exact time when a user can no longer use the Agora service (for example, when a user is forced to leave an ongoing call). When a value is set for the Call Expiration Timestamp, it does not mean that the token will expire, but that the user will be banned from the channel.
     */
    ErrorCode[ErrorCode["TokenExpired"] = 109] = "TokenExpired";
    /**
     * 110: The token is invalid.
     * @deprecated Use [`InvalidToken`]{@link ConnectionChangedReason.InvalidToken} in the reason parameter of [`onConnectionStateChanged`]{@link RtcEngineEvents.ConnectionStateChanged}.
     *
     * Possible reasons are:
     * - The App Certificate for the project is enabled in Console, but the user is using the App ID. Once the App Certificate is enabled, the user must use a token.
     * - The uid is mandatory, and users must set the same uid as the one set in the [`joinChannel`]{@link RtcEngine.joinChannel} method.
     */
    ErrorCode[ErrorCode["InvalidToken"] = 110] = "InvalidToken";
    /**
     * 111: The Internet connection is interrupted. This applies to the Agora Web SDK only.
     */
    ErrorCode[ErrorCode["ConnectionInterrupted"] = 111] = "ConnectionInterrupted";
    /**
     * 112: The Internet connection is lost. This applies to the Agora Web SDK only.
     */
    ErrorCode[ErrorCode["ConnectionLost"] = 112] = "ConnectionLost";
    /**
     * 113: The user is not in the channel when calling the [`sendStreamMessage`]{@link RtcEngine.sendStreamMessage} or [`getUserInfoByUserAccount`]{@link RtcEngine.getUserInfoByUserAccount} method.
     */
    ErrorCode[ErrorCode["NotInChannel"] = 113] = "NotInChannel";
    /**
     * 114: The size of the sent data is over 1024 bytes when the user calls the [`sendStreamMessage`]{@link RtcEngine.sendStreamMessage} method.
     */
    ErrorCode[ErrorCode["SizeTooLarge"] = 114] = "SizeTooLarge";
    /**
     * 115: The bitrate of the sent data exceeds the limit of 6 Kbps when the user calls the [`sendStreamMessage`]{@link RtcEngine.sendStreamMessage} method.
     */
    ErrorCode[ErrorCode["BitrateLimit"] = 115] = "BitrateLimit";
    /**
     * 116: Too many data streams (over five streams) are created when the user calls the [`createDataStream`]{@link RtcEngine.createDataStream} method.
     */
    ErrorCode[ErrorCode["TooManyDataStreams"] = 116] = "TooManyDataStreams";
    /**
     * 120: Decryption fails. The user may have used a different encryption password to join the channel. Check your settings or try rejoining the channel.
     */
    ErrorCode[ErrorCode["DecryptionFailed"] = 120] = "DecryptionFailed";
    /**
     * 123: The client is banned by the server.
     */
    ErrorCode[ErrorCode["ClientIsBannedByServer"] = 123] = "ClientIsBannedByServer";
    /**
     * 124: Incorrect watermark file parameter.
     */
    ErrorCode[ErrorCode["WatermarkParam"] = 124] = "WatermarkParam";
    /**
     * 125: Incorrect watermark file path.
     */
    ErrorCode[ErrorCode["WatermarkPath"] = 125] = "WatermarkPath";
    /**
     * 126: Incorrect watermark file format.
     */
    ErrorCode[ErrorCode["WatermarkPng"] = 126] = "WatermarkPng";
    /**
     * 127: Incorrect watermark file information.
     */
    ErrorCode[ErrorCode["WatermarkInfo"] = 127] = "WatermarkInfo";
    /**
     * 128: Incorrect watermark file data format.
     */
    ErrorCode[ErrorCode["WatermarkAGRB"] = 128] = "WatermarkAGRB";
    /**
     * 129: An error occurs in reading the watermark file.
     */
    ErrorCode[ErrorCode["WatermarkRead"] = 129] = "WatermarkRead";
    /**
     * 130: The encrypted stream is not allowed to publish.
     */
    ErrorCode[ErrorCode["EncryptedStreamNotAllowedPublish"] = 130] = "EncryptedStreamNotAllowedPublish";
    /**
     * 134: The user account is invalid.
     */
    ErrorCode[ErrorCode["InvalidUserAccount"] = 134] = "InvalidUserAccount";
    /**
     * 151: CDN related errors. Remove the original URL address and add a new one by calling the [`removePublishStreamUrl`]{@link RtcEngine.removePublishStreamUrl} and [`addPublishStreamUrl`]{@link RtcEngine.addPublishStreamUrl} methods.
     */
    ErrorCode[ErrorCode["PublishStreamCDNError"] = 151] = "PublishStreamCDNError";
    /**
     * 152: The host publishes more than 10 URLs. Delete the unnecessary URLs before adding new ones.
     */
    ErrorCode[ErrorCode["PublishStreamNumReachLimit"] = 152] = "PublishStreamNumReachLimit";
    /**
     * 153: The host manipulates other hosts' URLs. Check your app logic.
     */
    ErrorCode[ErrorCode["PublishStreamNotAuthorized"] = 153] = "PublishStreamNotAuthorized";
    /**
     * 154: An error occurs in Agora’s streaming server. Call the [`addPublishStreamUrl`]{@link RtcEngine.addPublishStreamUrl} method to publish the stream again.
     */
    ErrorCode[ErrorCode["PublishStreamInternalServerError"] = 154] = "PublishStreamInternalServerError";
    /**
     * 155: The server fails to find the stream.
     */
    ErrorCode[ErrorCode["PublishStreamNotFound"] = 155] = "PublishStreamNotFound";
    /**
     * 156: The format of the RTMP stream URL is not supported. Check whether the URL format is correct.
     */
    ErrorCode[ErrorCode["PublishStreamFormatNotSuppported"] = 156] = "PublishStreamFormatNotSuppported";
    /**
     * 1001: Fails to load the media engine.
     */
    ErrorCode[ErrorCode["LoadMediaEngine"] = 1001] = "LoadMediaEngine";
    /**
     * 1002: Fails to start the call after enabling the media engine.
     */
    ErrorCode[ErrorCode["StartCall"] = 1002] = "StartCall";
    /**
     * 1003: Fails to start the camera.
     *
     * @deprecated Use [`CaptureFailure`]{@link LocalVideoStreamError.CaptureFailure} in the error parameter of [`LocalVideoStateChanged`]{@link RtcEngineEvents.LocalVideoStateChanged}.
     */
    ErrorCode[ErrorCode["StartCamera"] = 1003] = "StartCamera";
    /**
     * 1004: Fails to start the video rendering module.
     */
    ErrorCode[ErrorCode["StartVideoRender"] = 1004] = "StartVideoRender";
    /**
     * 1005: Audio Device Module: A general error occurs in the Audio Device Module (the reason is not classified specifically). Check if the audio device is used by another app, or try rejoining the channel.
     */
    ErrorCode[ErrorCode["AdmGeneralError"] = 1005] = "AdmGeneralError";
    /**
     * 1006: Audio Device Module: An error occurs in using the Java resources.
     */
    ErrorCode[ErrorCode["AdmJavaResource"] = 1006] = "AdmJavaResource";
    /**
     * 1007: Audio Device Module: An error occurs in setting the sampling frequency.
     */
    ErrorCode[ErrorCode["AdmSampleRate"] = 1007] = "AdmSampleRate";
    /**
     * 1008: Audio Device Module: An error occurs in initializing the playback device.
     */
    ErrorCode[ErrorCode["AdmInitPlayout"] = 1008] = "AdmInitPlayout";
    /**
     * 1009: Audio Device Module: An error occurs in starting the playback device.
     */
    ErrorCode[ErrorCode["AdmStartPlayout"] = 1009] = "AdmStartPlayout";
    /**
     * 1010: Audio Device Module: An error occurs in stopping the playback device.
     */
    ErrorCode[ErrorCode["AdmStopPlayout"] = 1010] = "AdmStopPlayout";
    /**
     * 1011: Audio Device Module: An error occurs in initializing the recording device.
     */
    ErrorCode[ErrorCode["AdmInitRecording"] = 1011] = "AdmInitRecording";
    /**
     * 1012: Audio Device Module: An error occurs in starting the recording device.
     */
    ErrorCode[ErrorCode["AdmStartRecording"] = 1012] = "AdmStartRecording";
    /**
     * 1013: Audio Device Module: An error occurs in stopping the recording device.
     */
    ErrorCode[ErrorCode["AdmStopRecording"] = 1013] = "AdmStopRecording";
    /**
     * 1015: Audio Device Module: A playback error occurs. Check your playback device, or try rejoining the channel.
     */
    ErrorCode[ErrorCode["AdmRuntimePlayoutError"] = 1015] = "AdmRuntimePlayoutError";
    /**
     * 1017: Audio Device Module: A recording error occurs.
     */
    ErrorCode[ErrorCode["AdmRuntimeRecordingError"] = 1017] = "AdmRuntimeRecordingError";
    /**
     * 1018: Audio Device Module: Fails to record.
     */
    ErrorCode[ErrorCode["AdmRecordAudioFailed"] = 1018] = "AdmRecordAudioFailed";
    /**
     * 1020: Audio device module: The audio playback frequency is abnormal, which may cause audio freezes. This abnormality is caused by high CPU usage. Agora recommends stopping other apps.
     */
    ErrorCode[ErrorCode["AdmPlayAbnormalFrequency"] = 1020] = "AdmPlayAbnormalFrequency";
    /**
     * 1021: Audio device module: The audio recording frequency is abnormal, which may cause audio freezes. This abnormality is caused by high CPU usage. Agora recommends stopping other apps.
     */
    ErrorCode[ErrorCode["AdmRecordAbnormalFrequency"] = 1021] = "AdmRecordAbnormalFrequency";
    /**
     * 1022: Audio Device Module: An error occurs in initializing the loopback device.
     */
    ErrorCode[ErrorCode["AdmInitLoopback"] = 1022] = "AdmInitLoopback";
    /**
     * 1023: Audio Device Module: An error occurs in starting the loopback device.
     */
    ErrorCode[ErrorCode["AdmStartLoopback"] = 1023] = "AdmStartLoopback";
    /**
     * 1027: Audio Device Module: No recording permission.
     */
    ErrorCode[ErrorCode["AdmNoPermission"] = 1027] = "AdmNoPermission";
    /**
     * 1030: Audio Routing: Fails to route the audio to the connected Bluetooth device. The default route is used.
     */
    ErrorCode[ErrorCode["AudioBtScoFailed"] = 1030] = "AudioBtScoFailed";
    /**
     * 1359: Audio Device Module: No recording device exists.
     */
    ErrorCode[ErrorCode["AdmNoRecordingDevice"] = 1359] = "AdmNoRecordingDevice";
    /**
     * 1360: No playback device exists.
     */
    ErrorCode[ErrorCode["AdmNoPlayoutDevice"] = 1360] = "AdmNoPlayoutDevice";
    /**
     * 1501: Video Device Module: The camera is unauthorized.
     */
    ErrorCode[ErrorCode["VdmCameraNotAuthorized"] = 1501] = "VdmCameraNotAuthorized";
    /**
     * 1600: Video Device Module: An unknown error occurs.
     */
    ErrorCode[ErrorCode["VcmUnknownError"] = 1600] = "VcmUnknownError";
    /**
     * 1601: Video Device Module: An error occurs in initializing the video encoder.
     */
    ErrorCode[ErrorCode["VcmEncoderInitError"] = 1601] = "VcmEncoderInitError";
    /**
     * 1602: Video Device Module: An error occurs in video encoding.
     */
    ErrorCode[ErrorCode["VcmEncoderEncodeError"] = 1602] = "VcmEncoderEncodeError";
    /**
     * 1603: Video Device Module: An error occurs in setting the video encoder.
     *
     * @deprecated
     * This error code is deprecated.
     */
    ErrorCode[ErrorCode["VcmEncoderSetError"] = 1603] = "VcmEncoderSetError";
})(ErrorCode || (ErrorCode = {}));
/**
 * State of importing an external video stream in a live broadcast.
 */
export var InjectStreamStatus;
(function (InjectStreamStatus) {
    /**
     * 0: The external video stream imported successfully.
     */
    InjectStreamStatus[InjectStreamStatus["StartSuccess"] = 0] = "StartSuccess";
    /**
     * 1: The external video stream already exists.
     */
    InjectStreamStatus[InjectStreamStatus["StartAlreadyExists"] = 1] = "StartAlreadyExists";
    /**
     * 2: The external video stream import is unauthorized.
     */
    InjectStreamStatus[InjectStreamStatus["StartUnauthorized"] = 2] = "StartUnauthorized";
    /**
     * 3: Import external video stream timeout.
     */
    InjectStreamStatus[InjectStreamStatus["StartTimedout"] = 3] = "StartTimedout";
    /**
     * 4: The external video stream failed to import.
     */
    InjectStreamStatus[InjectStreamStatus["StartFailed"] = 4] = "StartFailed";
    /**
     * 5: The external video stream stops importing successfully.
     */
    InjectStreamStatus[InjectStreamStatus["StopSuccess"] = 5] = "StopSuccess";
    /**
     * 6: No external video stream is found.
     */
    InjectStreamStatus[InjectStreamStatus["StopNotFound"] = 6] = "StopNotFound";
    /**
     * 7: The external video stream to be stopped importing is unauthorized.
     */
    InjectStreamStatus[InjectStreamStatus["StopUnauthorized"] = 7] = "StopUnauthorized";
    /**
     * 8: Stopping importing the external video stream timed out.
     */
    InjectStreamStatus[InjectStreamStatus["StopTimedout"] = 8] = "StopTimedout";
    /**
     * 9: Stopping Importing the external video stream failed.
     */
    InjectStreamStatus[InjectStreamStatus["StopFailed"] = 9] = "StopFailed";
    /**
     * 10: The external video stream import is corrupted.
     */
    InjectStreamStatus[InjectStreamStatus["Broken"] = 10] = "Broken";
})(InjectStreamStatus || (InjectStreamStatus = {}));
/**
 * The state of the probe test result.
 */
export var LastmileProbeResultState;
(function (LastmileProbeResultState) {
    /**
     * 1: the last-mile network probe test is complete.
     */
    LastmileProbeResultState[LastmileProbeResultState["Complete"] = 1] = "Complete";
    /**
     * 2: the last-mile network probe test is incomplete and the bandwidth estimation is not available, probably due to limited test resources.
     */
    LastmileProbeResultState[LastmileProbeResultState["IncompleteNoBwe"] = 2] = "IncompleteNoBwe";
    /**
     * 3: The last-mile network probe test is not carried out, probably due to poor network conditions.
     */
    LastmileProbeResultState[LastmileProbeResultState["Unavailable"] = 3] = "Unavailable";
})(LastmileProbeResultState || (LastmileProbeResultState = {}));
/**
 * The lightening contrast level.
 */
export var LighteningContrastLevel;
(function (LighteningContrastLevel) {
    /**
     * 0: Low contrast level.
     */
    LighteningContrastLevel[LighteningContrastLevel["Low"] = 0] = "Low";
    /**
     * 1: (Default) Normal contrast level.
     */
    LighteningContrastLevel[LighteningContrastLevel["Normal"] = 1] = "Normal";
    /**
     * 2: High contrast level.
     */
    LighteningContrastLevel[LighteningContrastLevel["High"] = 2] = "High";
})(LighteningContrastLevel || (LighteningContrastLevel = {}));
/**
 * The detailed error information of the local video.
 */
export var LocalVideoStreamError;
(function (LocalVideoStreamError) {
    /**
     * 0: The local video is normal.
     */
    LocalVideoStreamError[LocalVideoStreamError["OK"] = 0] = "OK";
    /**
     * 1: No specified reason for the local video failure.
     */
    LocalVideoStreamError[LocalVideoStreamError["Failure"] = 1] = "Failure";
    /**
     * 2: No permission to use the local video device.
     */
    LocalVideoStreamError[LocalVideoStreamError["DeviceNoPermission"] = 2] = "DeviceNoPermission";
    /**
     * 3: The local video capturer is in use.
     */
    LocalVideoStreamError[LocalVideoStreamError["DeviceBusy"] = 3] = "DeviceBusy";
    /**
     * 4: The local video capture fails. Check whether the capturer is working properly.
     */
    LocalVideoStreamError[LocalVideoStreamError["CaptureFailure"] = 4] = "CaptureFailure";
    /**
     * 5: The local video encoding fails.
     */
    LocalVideoStreamError[LocalVideoStreamError["EncodeFailure"] = 5] = "EncodeFailure";
})(LocalVideoStreamError || (LocalVideoStreamError = {}));
/**
 * The state of the local video stream.
 */
export var LocalVideoStreamState;
(function (LocalVideoStreamState) {
    /**
     * 0: The local video is in the initial state.
     */
    LocalVideoStreamState[LocalVideoStreamState["Stopped"] = 0] = "Stopped";
    /**
     * 1: The local video capturer starts successfully.
     */
    LocalVideoStreamState[LocalVideoStreamState["Capturing"] = 1] = "Capturing";
    /**
     * 2: The first local video frame encodes successfully.
     */
    LocalVideoStreamState[LocalVideoStreamState["Encoding"] = 2] = "Encoding";
    /**
     * 3: The local video fails to start.
     */
    LocalVideoStreamState[LocalVideoStreamState["Failed"] = 3] = "Failed";
})(LocalVideoStreamState || (LocalVideoStreamState = {}));
/**
 * Output log filter level.
 */
export var LogFilter;
(function (LogFilter) {
    /**
     * 0: Do not output any log information.
     */
    LogFilter[LogFilter["Off"] = 0] = "Off";
    /**
     * 0x080f: Output all log information. Set your log filter as debug if you want to get the most complete log file.
     */
    LogFilter[LogFilter["Debug"] = 2063] = "Debug";
    /**
     * 0x000f: Output CRITICAL, ERROR, WARNING, and INFO level log information. We recommend setting your log filter as this level.
     */
    LogFilter[LogFilter["Info"] = 15] = "Info";
    /**
     * 0x000e: Outputs CRITICAL, ERROR, and WARNING level log information.
     */
    LogFilter[LogFilter["Warning"] = 14] = "Warning";
    /**
     * 0x000c: Outputs CRITICAL and ERROR level log information.
     */
    LogFilter[LogFilter["Error"] = 12] = "Error";
    /**
     * 0x0008: Outputs CRITICAL level log information.
     */
    LogFilter[LogFilter["Critical"] = 8] = "Critical";
})(LogFilter || (LogFilter = {}));
/**
 * Network quality.
 */
export var NetworkQuality;
(function (NetworkQuality) {
    /**
     * 0: The network quality is unknown.
     */
    NetworkQuality[NetworkQuality["Unknown"] = 0] = "Unknown";
    /**
     * 1: The network quality is excellent.
     */
    NetworkQuality[NetworkQuality["Excellent"] = 1] = "Excellent";
    /**
     * 2: The network quality is quite good, but the bitrate may be slightly lower than excellent.
     */
    NetworkQuality[NetworkQuality["Good"] = 2] = "Good";
    /**
     * 3: Users can feel the communication slightly impaired.
     */
    NetworkQuality[NetworkQuality["Poor"] = 3] = "Poor";
    /**
     * 4: Users can communicate only not very smoothly.
     */
    NetworkQuality[NetworkQuality["Bad"] = 4] = "Bad";
    /**
     * 5: The network quality is so bad that users can hardly communicate.
     */
    NetworkQuality[NetworkQuality["VBad"] = 5] = "VBad";
    /**
     * 6: The network is disconnected and users cannot communicate at all.
     */
    NetworkQuality[NetworkQuality["Down"] = 6] = "Down";
    /**
     * 7: Users cannot detect the network quality. (Not in use.)
     */
    NetworkQuality[NetworkQuality["Unsupported"] = 7] = "Unsupported";
    /**
     * 8: Detecting the network quality.
     */
    NetworkQuality[NetworkQuality["Detecting"] = 8] = "Detecting";
})(NetworkQuality || (NetworkQuality = {}));
/**
 * Network type.
 */
export var NetworkType;
(function (NetworkType) {
    /**
     * -1: The network type is unknown.
     */
    NetworkType[NetworkType["Unknown"] = -1] = "Unknown";
    /**
     * 0: The SDK disconnects from the network.
     */
    NetworkType[NetworkType["Disconnected"] = 0] = "Disconnected";
    /**
     * 1: The network type is LAN.
     */
    NetworkType[NetworkType["LAN"] = 1] = "LAN";
    /**
     * 2: The network type is Wi-Fi (including hotspots).
     */
    NetworkType[NetworkType["WIFI"] = 2] = "WIFI";
    /**
     * 3: The network type is mobile 2G.
     */
    NetworkType[NetworkType["Mobile2G"] = 3] = "Mobile2G";
    /**
     * 4: The network type is mobile 3G.
     */
    NetworkType[NetworkType["Mobile3G"] = 4] = "Mobile3G";
    /**
     * 5: The network type is mobile 4G.
     */
    NetworkType[NetworkType["Mobile4G"] = 5] = "Mobile4G";
})(NetworkType || (NetworkType = {}));
/**
 * The detailed error information for streaming.
 */
export var RtmpStreamingErrorCode;
(function (RtmpStreamingErrorCode) {
    /**
     * 0: The RTMP streaming publishes successfully.
     */
    RtmpStreamingErrorCode[RtmpStreamingErrorCode["OK"] = 0] = "OK";
    /**
     * 1: Invalid argument used. If, for example, you do not call the [`setLiveTranscoding`]{@link RtcEngine.setLiveTranscoding} method to configure
     * the `LiveTranscoding` parameters before calling the [`addPublishStreamUrl`]{@link RtcEngine.addPublishStreamUrl} method, the SDK returns this error.
     * Check whether you set the parameters in the [`setLiveTranscoding`]{@link RtcEngine.setLiveTranscoding} method properly.
     */
    RtmpStreamingErrorCode[RtmpStreamingErrorCode["InvalidParameters"] = 1] = "InvalidParameters";
    /**
     * 2: The RTMP streaming is encrypted and cannot be published.
     */
    RtmpStreamingErrorCode[RtmpStreamingErrorCode["EncryptedStreamNotAllowed"] = 2] = "EncryptedStreamNotAllowed";
    /**
     * 3: Timeout for the RTMP streaming. Call the [`addPublishStreamUrl`]{@link RtcEngine.addPublishStreamUrl} method to publish the streaming again.
     */
    RtmpStreamingErrorCode[RtmpStreamingErrorCode["ConnectionTimeout"] = 3] = "ConnectionTimeout";
    /**
     * 4: An error occurs in Agora’s streaming server. Call the [`addPublishStreamUrl`]{@link RtcEngine.addPublishStreamUrl} method to publish the streaming again.
     */
    RtmpStreamingErrorCode[RtmpStreamingErrorCode["InternalServerError"] = 4] = "InternalServerError";
    /**
     * 5: An error occurs in the RTMP server.
     */
    RtmpStreamingErrorCode[RtmpStreamingErrorCode["RtmpServerError"] = 5] = "RtmpServerError";
    /**
     * 6: The RTMP streaming publishes too frequently.
     */
    RtmpStreamingErrorCode[RtmpStreamingErrorCode["TooOften"] = 6] = "TooOften";
    /**
     * 7: The host publishes more than 10 URLs. Delete the unnecessary URLs before adding new ones.
     */
    RtmpStreamingErrorCode[RtmpStreamingErrorCode["ReachLimit"] = 7] = "ReachLimit";
    /**
     * 8: The host manipulates other hosts' URLs. Check your app logic.
     */
    RtmpStreamingErrorCode[RtmpStreamingErrorCode["NotAuthorized"] = 8] = "NotAuthorized";
    /**
     * 9: Agora’s server fails to find the RTMP streaming.
     */
    RtmpStreamingErrorCode[RtmpStreamingErrorCode["StreamNotFound"] = 9] = "StreamNotFound";
    /**
     * 10: The format of the RTMP streaming URL is not supported. Check whether the URL format is correct.
     */
    RtmpStreamingErrorCode[RtmpStreamingErrorCode["FormatNotSupported"] = 10] = "FormatNotSupported";
})(RtmpStreamingErrorCode || (RtmpStreamingErrorCode = {}));
/**
 * The RTMP streaming state.
 */
export var RtmpStreamingState;
(function (RtmpStreamingState) {
    /**
     * 0: The RTMP streaming has not started or has ended. This state is also triggered after you
     * remove an RTMP address from the CDN by calling [`removePublishStreamUrl`]{@link RtcEngine.removePublishStreamUrl}.
     */
    RtmpStreamingState[RtmpStreamingState["Idle"] = 0] = "Idle";
    /**
     * 1: The SDK is connecting to Agora’s streaming server and the RTMP server.
     * This state is triggered after you call the [`addPublishStreamUrl`]{@link RtcEngine.addPublishStreamUrl} method.
     */
    RtmpStreamingState[RtmpStreamingState["Connecting"] = 1] = "Connecting";
    /**
     * 2: The RTMP streaming is being published. The SDK successfully publishes the RTMP streaming and returns this state.
     */
    RtmpStreamingState[RtmpStreamingState["Running"] = 2] = "Running";
    /**
     * 3: The RTMP streaming is recovering. When exceptions occur to the CDN, or the streaming is interrupted,
     * the SDK attempts to resume RTMP streaming and returns this state.
     *
     * - If the SDK successfully resumes the streaming, [`Running`]{@link RtmpStreamingState.Running} returns.
     * - If the streaming does not resume within 60 seconds or server errors occur,
     * [`Failure`]{@link RtmpStreamingState.Failure} returns.
     *
     * You can also reconnect to the server by calling the [`removePublishStreamUrl`]{@link RtcEngine.removePublishStreamUrl} and [`addPublishStreamUrl`]{@link RtcEngine.addPublishStreamUrl} methods.
     */
    RtmpStreamingState[RtmpStreamingState["Recovering"] = 3] = "Recovering";
    /**
     * 4: The RTMP streaming fails. See the errorCode parameter for the detailed error information.
     * You can also call the [`addPublishStreamUrl`]{@link RtcEngine.addPublishStreamUrl} method to publish the RTMP streaming again.
     */
    RtmpStreamingState[RtmpStreamingState["Failure"] = 4] = "Failure";
})(RtmpStreamingState || (RtmpStreamingState = {}));
/**
 * Stream fallback option.
 */
export var StreamFallbackOptions;
(function (StreamFallbackOptions) {
    /**
     * 0: No fallback behavior for the local/remote video stream when the uplink/downlink network condition is unreliable. The quality of the stream is not guaranteed.
     */
    StreamFallbackOptions[StreamFallbackOptions["Disabled"] = 0] = "Disabled";
    /**
     * 1: Under unreliable downlink network conditions, the remote video stream falls back to the
     * low-stream (low resolution and low bitrate) video. You can only set this option
     * in the [`setRemoteSubscribeFallbackOption`]{@link RtcEngine.setRemoteSubscribeFallbackOption} method.
     * Nothing happens when you set this in the [`setLocalPublishFallbackOption`]{@link RtcEngine.setLocalPublishFallbackOption} method.
     */
    StreamFallbackOptions[StreamFallbackOptions["VideoStreamLow"] = 1] = "VideoStreamLow";
    /**
     * 2: Under unreliable uplink network conditions, the published video stream falls back to audio only. Under unreliable downlink network conditions, the remote video stream first falls back to the low-stream (low resolution and low bitrate) video; and then to an audio-only stream if the network condition deteriorates.
     */
    StreamFallbackOptions[StreamFallbackOptions["AudioOnly"] = 2] = "AudioOnly";
})(StreamFallbackOptions || (StreamFallbackOptions = {}));
/**
 * Reason for the user being offline.
 */
export var UserOfflineReason;
(function (UserOfflineReason) {
    /**
     * 0: The user left the current channel.
     */
    UserOfflineReason[UserOfflineReason["Quit"] = 0] = "Quit";
    /**
     * 1: The SDK timed out and the user dropped offline because no data packet is received within a certain period of time. If a user quits the call and the message is not passed to the SDK (due to an unreliable channel), the SDK assumes the user dropped offline.
     */
    UserOfflineReason[UserOfflineReason["Dropped"] = 1] = "Dropped";
    /**
     * 2: (Live broadcast only.) The client role switched from the host to the audience.
     */
    UserOfflineReason[UserOfflineReason["BecomeAudience"] = 2] = "BecomeAudience";
})(UserOfflineReason || (UserOfflineReason = {}));
/**
 * The priority of the remote user.
 */
export var UserPriority;
(function (UserPriority) {
    /**
     * 50: The user’s priority is high.
     */
    UserPriority[UserPriority["High"] = 50] = "High";
    /**
     * 100: (Default) The user’s priority is normal.
     */
    UserPriority[UserPriority["Normal"] = 100] = "Normal";
})(UserPriority || (UserPriority = {}));
/**
 * Self-defined video codec profile.
 */
export var VideoCodecProfileType;
(function (VideoCodecProfileType) {
    /**
     * 66: Baseline video codec profile. Generally used in video calls on mobile phones.
     */
    VideoCodecProfileType[VideoCodecProfileType["BaseLine"] = 66] = "BaseLine";
    /**
     * 77: Main video codec profile. Generally used in mainstream electronics, such as MP4 players, portable video players, PSP, and iPads.
     */
    VideoCodecProfileType[VideoCodecProfileType["Main"] = 77] = "Main";
    /**
     * 100: (Default) High video codec profile. Generally used in high-resolution broadcasts or television.
     */
    VideoCodecProfileType[VideoCodecProfileType["High"] = 100] = "High";
})(VideoCodecProfileType || (VideoCodecProfileType = {}));
/**
 * Video frame rate.
 */
export var VideoFrameRate;
(function (VideoFrameRate) {
    /**
     * -1: The minimum frame rate of the video.
     */
    VideoFrameRate[VideoFrameRate["Min"] = -1] = "Min";
    /**
     * 1: 1 fps.
     */
    VideoFrameRate[VideoFrameRate["Fps1"] = 1] = "Fps1";
    /**
     * 7: 7 fps.
     */
    VideoFrameRate[VideoFrameRate["Fps7"] = 7] = "Fps7";
    /**
     * 10: 10 fps.
     */
    VideoFrameRate[VideoFrameRate["Fps10"] = 10] = "Fps10";
    /**
     * 15: 15 fps.
     */
    VideoFrameRate[VideoFrameRate["Fps15"] = 15] = "Fps15";
    /**
     * 24: 24 fps.
     */
    VideoFrameRate[VideoFrameRate["Fps24"] = 24] = "Fps24";
    /**
     * 30: 30 fps.
     */
    VideoFrameRate[VideoFrameRate["Fps30"] = 30] = "Fps30";
    /**
     * 60: 60 fps (macOS only).
     */
    VideoFrameRate[VideoFrameRate["Fps60"] = 60] = "Fps60";
})(VideoFrameRate || (VideoFrameRate = {}));
/**
 * Bitrate of the video (Kbps). Refer to the table below and set your bitrate.
 * If you set a bitrate beyond the proper range, the SDK automatically adjusts it to a value within the range.
 *
 * **Video Bitrate Table**
 * <table>
 *     <tr>
 *         <th>Resolution</th>
 *         <th>Frame rate<p>(fps)</th>
 *         <th>Base Bitrate<p>(Kbps, for Communication)</th>
 *         <th>Live Bitrate<p>(Kbps, for Live Broadcasting)</th>
 *     </tr>
 *     <tr>
 *         <td>160*120</td>
 *         <td>15</td>
 *         <td>65</td>
 *         <td>130</td>
 *     </tr>
 *     <tr>
 *         <td>120*120</td>
 *         <td>15</td>
 *         <td>50</td>
 *         <td>100</td>
 *     </tr>
 *     <tr>
 *         <td>320*180</td>
 *         <td>15</td>
 *         <td>140</td>
 *         <td>280</td>
 *     </tr>
 *     <tr>
 *         <td>180*180</td>
 *         <td>15</td>
 *         <td>100</td>
 *         <td>200</td>
 *     </tr>
 *     <tr>
 *         <td>240*180</td>
 *         <td>15</td>
 *         <td>120</td>
 *         <td>240</td>
 *     </tr>
 *     <tr>
 *         <td>320*240</td>
 *         <td>15</td>
 *         <td>200</td>
 *         <td>400</td>
 *     </tr>
 *     <tr>
 *         <td>240*240</td>
 *         <td>15</td>
 *         <td>140</td>
 *         <td>280</td>
 *     </tr>
 *     <tr>
 *         <td>424*240</td>
 *         <td>15</td>
 *         <td>220</td>
 *         <td>440</td>
 *     </tr>
 *     <tr>
 *         <td>640*360</td>
 *         <td>15</td>
 *         <td>400</td>
 *         <td>800</td>
 *     </tr>
 *     <tr>
 *         <td>360*360</td>
 *         <td>15</td>
 *         <td>260</td>
 *         <td>520</td>
 *     </tr>
 *     <tr>
 *         <td>640*360</td>
 *         <td>30</td>
 *         <td>600</td>
 *         <td>1200</td>
 *     </tr>
 *     <tr>
 *         <td>360*360</td>
 *         <td>30</td>
 *         <td>400</td>
 *         <td>800</td>
 *     </tr>
 *     <tr>
 *         <td>480*360</td>
 *         <td>15</td>
 *         <td>320</td>
 *         <td>640</td>
 *     </tr>
 *     <tr>
 *         <td>480*360</td>
 *         <td>30</td>
 *         <td>490</td>
 *         <td>980</td>
 *     </tr>
 *     <tr>
 *         <td>640*480</td>
 *         <td>15</td>
 *         <td>500</td>
 *         <td>1000</td>
 *     </tr>
 *     <tr>
 *         <td>480*480</td>
 *         <td>15</td>
 *         <td>400</td>
 *         <td>800</td>
 *     </tr>
 *     <tr>
 *         <td>640*480</td>
 *         <td>30</td>
 *         <td>750</td>
 *         <td>1500</td>
 *     </tr>
 *     <tr>
 *         <td>480*480</td>
 *         <td>30</td>
 *         <td>600</td>
 *         <td>1200</td>
 *     </tr>
 *     <tr>
 *         <td>848*480</td>
 *         <td>15</td>
 *         <td>610</td>
 *         <td>1220</td>
 *     </tr>
 *     <tr>
 *         <td>848*480</td>
 *         <td>30</td>
 *         <td>930</td>
 *         <td>1860</td>
 *     </tr>
 *     <tr>
 *         <td>640*480</td>
 *         <td>10</td>
 *         <td>400</td>
 *         <td>800</td>
 *     </tr>
 *     <tr>
 *         <td>1280*720</td>
 *         <td>15</td>
 *         <td>1130</td>
 *         <td>2260</td>
 *     </tr>
 *     <tr>
 *         <td>1280*720</td>
 *         <td>30</td>
 *         <td>1710</td>
 *         <td>3420</td>
 *     </tr>
 *     <tr>
 *         <td>960*720</td>
 *         <td>15</td>
 *         <td>910</td>
 *         <td>1820</td>
 *     </tr>
 *     <tr>
 *         <td>960*720</td>
 *         <td>30</td>
 *         <td>1380</td>
 *         <td>2760</td>
 *     </tr>
 * </table>
 *
 * Agora uses different video codecs for different profiles to optimize the user experience. For example,
 * the Communication profile prioritizes the smoothness while the LIVE_BROADCASTING profile prioritizes the
 * video quality (a higher bitrate). Therefore, We recommend setting this parameter as STANDARD_BITRATE = 0.
 */
export var BitRate;
(function (BitRate) {
    /**
     * 0: (Recommended) the standard bitrate mode. In this mode, the bitrates differ between the Live-broadcast and Communication profiles:
     * - Communication profile: the video bitrate is the same as the base bitrate.
     * - Live-broadcast profile: the video bitrate is twice the base bitrate.
     */
    BitRate[BitRate["Standard"] = 0] = "Standard";
    /**
     * -1: The compatible bitrate mode. In this mode, the bitrate stays the same regardless of the profile. In the Live-broadcast profile,
     * if you choose this mode, the video frame rate may be lower than the set value.
     */
    BitRate[BitRate["Compatible"] = -1] = "Compatible";
})(BitRate || (BitRate = {}));
/**
 * Video mirror mode.
 */
export var VideoMirrorMode;
(function (VideoMirrorMode) {
    /**
     * 0: (Default) The SDK determines the mirror mode.
     */
    VideoMirrorMode[VideoMirrorMode["Auto"] = 0] = "Auto";
    /**
     * 1: Enables mirror mode.
     */
    VideoMirrorMode[VideoMirrorMode["Enabled"] = 1] = "Enabled";
    /**
     * 2: Disables mirror mode.
     */
    VideoMirrorMode[VideoMirrorMode["Disabled"] = 2] = "Disabled";
})(VideoMirrorMode || (VideoMirrorMode = {}));
/**
 * Video output orientation mode.
 */
export var VideoOutputOrientationMode;
(function (VideoOutputOrientationMode) {
    /**
     * 0: Adaptive mode (Default).
     *
     * The video encoder adapts to the orientation mode of the video input device. When you use a custom video source, the output video from the encoder inherits the orientation of the original video.
     * - If the width of the captured video from the SDK is greater than the height, the encoder sends the video in landscape mode. The encoder also sends the rotational information of the video, and the receiver uses the rotational information to rotate the received video.
     * - If the original video is in portrait mode, the output video from the encoder is also in portrait mode. The encoder also sends the rotational information of the video to the receiver.
     */
    VideoOutputOrientationMode[VideoOutputOrientationMode["Adaptative"] = 0] = "Adaptative";
    /**
     * 1: Landscape mode.
     *
     * The video encoder always sends the video in landscape mode. The video encoder rotates the original video before sending it and the rotational information is 0. This mode applies to scenarios involving CDN live streaming.
     */
    VideoOutputOrientationMode[VideoOutputOrientationMode["FixedLandscape"] = 1] = "FixedLandscape";
    /**
     * 2: Portrait mode.
     *
     * The video encoder always sends the video in portrait mode. The video encoder rotates the original video before sending it and the rotational information is 0. This mode applies to scenarios involving CDN live streaming.
     */
    VideoOutputOrientationMode[VideoOutputOrientationMode["FixedPortrait"] = 2] = "FixedPortrait";
})(VideoOutputOrientationMode || (VideoOutputOrientationMode = {}));
/**
 * Quality change of the local video in terms of target frame rate and target bit rate since last count.
 */
export var VideoQualityAdaptIndication;
(function (VideoQualityAdaptIndication) {
    /**
     * 0: The quality of the local video stays the same.
     */
    VideoQualityAdaptIndication[VideoQualityAdaptIndication["AdaptNone"] = 0] = "AdaptNone";
    /**
     * 1: The quality improves because the network bandwidth increases.
     */
    VideoQualityAdaptIndication[VideoQualityAdaptIndication["AdaptUpBandwidth"] = 1] = "AdaptUpBandwidth";
    /**
     * 2: The quality worsens because the network bandwidth decreases.
     */
    VideoQualityAdaptIndication[VideoQualityAdaptIndication["AdaptDownBandwidth"] = 2] = "AdaptDownBandwidth";
})(VideoQualityAdaptIndication || (VideoQualityAdaptIndication = {}));
/**
 * The state of the remote video.
 */
export var VideoRemoteState;
(function (VideoRemoteState) {
    /**
     * 0: The remote video is in the default state, probably due to:
     * - [`LocalMuted`]{@link VideoRemoteStateReason.LocalMuted}
     * - [`RemoteMuted`]{@link VideoRemoteStateReason.RemoteMuted}
     * - [`RemoteOffline`]{@link VideoRemoteStateReason.RemoteOffline}
     */
    VideoRemoteState[VideoRemoteState["Stopped"] = 0] = "Stopped";
    /**
     * 1: The first remote video packet is received.
     */
    VideoRemoteState[VideoRemoteState["Starting"] = 1] = "Starting";
    /**
     * 2: The remote video stream is decoded and plays normally, probably due to:
     * - [`NetworkRecovery`]{@link VideoRemoteStateReason.NetworkRecovery}
     * - [`LocalUnmuted`]{@link VideoRemoteStateReason.LocalUnmuted}
     * - [`RemoteUnmuted`]{@link VideoRemoteStateReason.RemoteUnmuted}
     * - [`AudioFallbackRecovery`]{@link VideoRemoteStateReason.AudioFallbackRecovery}
     */
    VideoRemoteState[VideoRemoteState["Decoding"] = 2] = "Decoding";
    /**
     * 3: The remote video is frozen, probably due to:
     * - [`NetworkCongestion`]{@link VideoRemoteStateReason.NetworkCongestion}
     * - [`AudioFallback`]{@link VideoRemoteStateReason.AudioFallback}
     */
    VideoRemoteState[VideoRemoteState["Frozen"] = 3] = "Frozen";
    /**
     * 4: The remote video fails to start, probably due to: [`Internal`]{@link VideoRemoteStateReason.Internal}
     */
    VideoRemoteState[VideoRemoteState["Failed"] = 4] = "Failed";
})(VideoRemoteState || (VideoRemoteState = {}));
/**
 * The reason of the remote video state change.
 */
export var VideoRemoteStateReason;
(function (VideoRemoteStateReason) {
    /**
     * 0: Internal reasons.
     */
    VideoRemoteStateReason[VideoRemoteStateReason["Internal"] = 0] = "Internal";
    /**
     * 1: Network congestion.
     */
    VideoRemoteStateReason[VideoRemoteStateReason["NetworkCongestion"] = 1] = "NetworkCongestion";
    /**
     * 2: Network recovery.
     */
    VideoRemoteStateReason[VideoRemoteStateReason["NetworkRecovery"] = 2] = "NetworkRecovery";
    /**
     * 3: The local user stops receiving the remote video stream or disables the video module.
     */
    VideoRemoteStateReason[VideoRemoteStateReason["LocalMuted"] = 3] = "LocalMuted";
    /**
     * 4: The local user resumes receiving the remote video stream or disables the video module.
     */
    VideoRemoteStateReason[VideoRemoteStateReason["LocalUnmuted"] = 4] = "LocalUnmuted";
    /**
     * 5: The remote user stops sending the video stream or disables the video module.
     */
    VideoRemoteStateReason[VideoRemoteStateReason["RemoteMuted"] = 5] = "RemoteMuted";
    /**
     * 6: The remote user resumes sending the video stream or enables the video module.
     */
    VideoRemoteStateReason[VideoRemoteStateReason["RemoteUnmuted"] = 6] = "RemoteUnmuted";
    /**
     * 7: The remote user leaves the channel.
     */
    VideoRemoteStateReason[VideoRemoteStateReason["RemoteOffline"] = 7] = "RemoteOffline";
    /**
     * 8: The remote media stream falls back to the audio-only stream due to poor network conditions.
     */
    VideoRemoteStateReason[VideoRemoteStateReason["AudioFallback"] = 8] = "AudioFallback";
    /**
     * 9: The remote media stream switches back to the video stream after the network conditions improve.
     */
    VideoRemoteStateReason[VideoRemoteStateReason["AudioFallbackRecovery"] = 9] = "AudioFallbackRecovery";
})(VideoRemoteStateReason || (VideoRemoteStateReason = {}));
/**
 * Video display mode.
 */
export var VideoRenderMode;
(function (VideoRenderMode) {
    /**
     * 1: Uniformly scale the video until it fills the visible boundaries (cropped). One dimension of the video may have clipped contents.
     */
    VideoRenderMode[VideoRenderMode["Hidden"] = 1] = "Hidden";
    /**
     * 2: Uniformly scale the video until one of its dimension fits the boundary (zoomed to fit). Areas that are not filled due to the disparity in the aspect ratio are filled with black.
     */
    VideoRenderMode[VideoRenderMode["Fit"] = 2] = "Fit";
    /**
     * @deprecated
     * 3: This mode is deprecated.
     */
    VideoRenderMode[VideoRenderMode["Adaptive"] = 3] = "Adaptive";
    /**
     * 4: The fill mode. In this mode, the SDK stretches or zooms the video to fill the display window.
     */
    VideoRenderMode[VideoRenderMode["FILL"] = 4] = "FILL";
})(VideoRenderMode || (VideoRenderMode = {}));
/**
 * Video stream type.
 */
export var VideoStreamType;
(function (VideoStreamType) {
    /**
     * 0: High-bitrate, high-resolution video stream.
     */
    VideoStreamType[VideoStreamType["High"] = 0] = "High";
    /**
     * 1: Low-bitrate, low-resolution video stream.
     */
    VideoStreamType[VideoStreamType["Low"] = 1] = "Low";
})(VideoStreamType || (VideoStreamType = {}));
/**
 * Warning codes occur when the SDK encounters an error that may be recovered automatically.
 * These are only notifications, and can generally be ignored. For example, when the SDK loses connection to the server,
 * the SDK reports the [`OpenChannelTimeout(106)`]{@link WarningCode.OpenChannelTimeout} warning and tries to reconnect automatically.
 */
export var WarningCode;
(function (WarningCode) {
    /**
     * 8: The specified view is invalid. Specify a view when using the video call function.
     */
    WarningCode[WarningCode["InvalidView"] = 8] = "InvalidView";
    /**
     * 16: Failed to initialize the video function, possibly caused by a lack of resources. The users cannot see the video while the voice communication is not affected.
     */
    WarningCode[WarningCode["InitVideo"] = 16] = "InitVideo";
    /**
     * 20: The request is pending, usually due to some module not being ready, and the SDK postpones processing the request.
     */
    WarningCode[WarningCode["Pending"] = 20] = "Pending";
    /**
     * 103: No channel resources are available. Maybe because the server cannot allocate any channel resource.
     */
    WarningCode[WarningCode["NoAvailableChannel"] = 103] = "NoAvailableChannel";
    /**
     * 104: A timeout occurs when looking up the channel. When joining a channel, the SDK looks up the specified channel. The warning usually occurs when the network condition is too poor for the SDK to connect to the server.
     */
    WarningCode[WarningCode["LookupChannelTimeout"] = 104] = "LookupChannelTimeout";
    /**
     * 105: The server rejects the request to look up the channel.
     * The server cannot process this request or the request is illegal.
     * @deprecated
     *
     * Use [`RejectedByServer(10)`]{@link ConnectionChangedReason.RejectedByServer} in the reason parameter
     * of [`ConnectionStateChanged`]{@link RtcEngineEvents.ConnectionStateChanged}.
     */
    WarningCode[WarningCode["LookupChannelRejected"] = 105] = "LookupChannelRejected";
    /**
     * 106: The server rejects the request to look up the channel. The server cannot process this request
     * or the request is illegal.
     */
    WarningCode[WarningCode["OpenChannelTimeout"] = 106] = "OpenChannelTimeout";
    /**
     * 107: The server rejects the request to open the channel. The server cannot process this request or the request is illegal.
     */
    WarningCode[WarningCode["OpenChannelRejected"] = 107] = "OpenChannelRejected";
    /**
     * 111: A timeout occurs when switching to the live video.
     */
    WarningCode[WarningCode["SwitchLiveVideoTimeout"] = 111] = "SwitchLiveVideoTimeout";
    /**
     * 118: A timeout occurs when setting the client role in the live broadcast profile.
     */
    WarningCode[WarningCode["SetClientRoleTimeout"] = 118] = "SetClientRoleTimeout";
    /**
     * 119: The client role is unauthorized.
     */
    WarningCode[WarningCode["SetClientRoleNotAuthorized"] = 119] = "SetClientRoleNotAuthorized";
    /**
     * 121: The ticket to open the channel is invalid.
     */
    WarningCode[WarningCode["OpenChannelInvalidTicket"] = 121] = "OpenChannelInvalidTicket";
    /**
     * 122: Try connecting to another server.
     */
    WarningCode[WarningCode["OpenChannelTryNextVos"] = 122] = "OpenChannelTryNextVos";
    /**
     * 701: An error occurs in opening the audio mixing file.
     */
    WarningCode[WarningCode["AudioMixingOpenError"] = 701] = "AudioMixingOpenError";
    /**
     * 1014: Audio Device Module: a warning occurs in the playback device.
     */
    WarningCode[WarningCode["AdmRuntimePlayoutWarning"] = 1014] = "AdmRuntimePlayoutWarning";
    /**
     * 1016: Audio Device Module: a warning occurs in the recording device.
     */
    WarningCode[WarningCode["AdmRuntimeRecordingWarning"] = 1016] = "AdmRuntimeRecordingWarning";
    /**
     * 1019: Audio Device Module: no valid audio data is collected.
     */
    WarningCode[WarningCode["AdmRecordAudioSilence"] = 1019] = "AdmRecordAudioSilence";
    /**
     * 1020: Audio Device Module: a playback device fails.
     */
    WarningCode[WarningCode["AdmPlaybackMalfunction"] = 1020] = "AdmPlaybackMalfunction";
    /**
     * 1021: Audio Device Module: a recording device fails.
     */
    WarningCode[WarningCode["AdmRecordMalfunction"] = 1021] = "AdmRecordMalfunction";
    /**
     * 1025: Audio Device Module: call is interrupted by system events such as phone call or siri etc.
     */
    WarningCode[WarningCode["AdmInterruption"] = 1025] = "AdmInterruption";
    /**
     * 1029: During a call, `AudioSessionCategory` should be set to `AVAudioSessionCategoryPlayAndRecord`, and the SDK monitors this value. If the `AudioSessionCategory` is set to other values, this warning code is triggered and the SDK will forcefully set it back to `AVAudioSessionCategoryPlayAndRecord`.
     *
     * @since v3.1.2.
     */
    WarningCode[WarningCode["AdmCategoryNotPlayAndRecord"] = 1029] = "AdmCategoryNotPlayAndRecord";
    /**
     * 1031: Audio Device Module: the recorded audio is too low.
     */
    WarningCode[WarningCode["AdmRecordAudioLowlevel"] = 1031] = "AdmRecordAudioLowlevel";
    /**
     * 1032: Audio Device Module: the playback audio is too low.
     */
    WarningCode[WarningCode["AdmPlayoutAudioLowlevel"] = 1032] = "AdmPlayoutAudioLowlevel";
    /**
     * 1033: Audio Device Module: The recording device is busy.
     */
    WarningCode[WarningCode["AdmRecordIsOccupied"] = 1033] = "AdmRecordIsOccupied";
    /**
     * 1040: Audio device module: An error occurs in the audio driver. Solutions:
     * - Restart your audio device.
     * - Restart your device where the app runs.
     * - Upgrade the sound card drive.
     *
     * @since v3.1.2.
     */
    WarningCode[WarningCode["AdmNoDataReadyCallback"] = 1040] = "AdmNoDataReadyCallback";
    /**
     * 1042: Audio device module: The audio recording device is different from the audio playback device, which may cause echoes problem. Agora recommends using the same audio device to record and playback audio.
     *
     * @since v3.1.2.
     */
    WarningCode[WarningCode["AdmInconsistentDevices"] = 1042] = "AdmInconsistentDevices";
    /**
     * 1051: Audio Device Module: howling is detected.
     */
    WarningCode[WarningCode["ApmHowling"] = 1051] = "ApmHowling";
    /**
     * 1052: Audio Device Module: the device is in the glitch state.
     */
    WarningCode[WarningCode["AdmGlitchState"] = 1052] = "AdmGlitchState";
    /**
     * 1053: Audio processing module: A residual echo is detected, which may be caused by the belated scheduling of system threads or the signal overflow.
     */
    WarningCode[WarningCode["ApmResidualEcho"] = 1053] = "ApmResidualEcho";
})(WarningCode || (WarningCode = {}));
/**
 * The audio channel of the sound.
 */
export var AudioChannel;
(function (AudioChannel) {
    /**
     * 0: (Default) Supports dual channels. Depends on the upstream of the host.
     */
    AudioChannel[AudioChannel["Channel0"] = 0] = "Channel0";
    /**
     * 1: The audio stream of the host uses the FL audio channel. If the upstream of the host uses multiple audio channels, these channels will be mixed into mono first.
     */
    AudioChannel[AudioChannel["Channel1"] = 1] = "Channel1";
    /**
     * 2: The audio stream of the host uses the FC audio channel. If the upstream of the host uses multiple audio channels, these channels will be mixed into mono first.
     */
    AudioChannel[AudioChannel["Channel2"] = 2] = "Channel2";
    /**
     * 3: The audio stream of the host uses the FR audio channel. If the upstream of the host uses multiple audio channels, these channels will be mixed into mono first.
     */
    AudioChannel[AudioChannel["Channel3"] = 3] = "Channel3";
    /**
     * 4: The audio stream of the host uses the BL audio channel. If the upstream of the host uses multiple audio channels, these channels will be mixed into mono first.
     */
    AudioChannel[AudioChannel["Channel4"] = 4] = "Channel4";
    /**
     * 5: The audio stream of the host uses the BR audio channel. If the upstream of the host uses multiple audio channels, these channels will be mixed into mono first.
     */
    AudioChannel[AudioChannel["Channel5"] = 5] = "Channel5";
})(AudioChannel || (AudioChannel = {}));
/**
 * Video codec types.
 */
export var VideoCodecType;
(function (VideoCodecType) {
    /**
     * 1: Standard VP8.
     */
    VideoCodecType[VideoCodecType["VP8"] = 1] = "VP8";
    /**
     * 2: Standard H264.
     */
    VideoCodecType[VideoCodecType["H264"] = 2] = "H264";
    /**
     * 3: Enhanced VP8.
     */
    VideoCodecType[VideoCodecType["EVP"] = 3] = "EVP";
    /**
     * 4: Enhanced H264.
     */
    VideoCodecType[VideoCodecType["E264"] = 4] = "E264";
})(VideoCodecType || (VideoCodecType = {}));
/**
 * The publishing state.
 *
 * @since v3.1.2.
 */
export var StreamPublishState;
(function (StreamPublishState) {
    /**
     * 0: The initial publishing state after joining the channel.
     */
    StreamPublishState[StreamPublishState["Idle"] = 0] = "Idle";
    /**
     * 1: Fails to publish the local stream. Possible reasons:
     * - The local user calls [`muteLocalAudioStream(true)`]{@link RtcEngine.muteLocalAudioStream} or [`muteLocalVideoStream(true)`]{@link RtcEngine.muteLocalVideoStream} to stop sending local streams.
     * - The local user calls [`disableAudio`]{@link RtcEngine.disableAudio} or [`disableVideo`]{@link RtcEngine.disableVideo} to disable the entire audio or video module.
     * - The local user calls [`enableLocalAudio(false)`]{@link RtcEngine.enableLocalAudio} or [`enableLocalVideo(false)`]{@link enableLocalVideo} to disable the local audio sampling or video capturing.
     * - The role of the local user is `Audience`.
     */
    StreamPublishState[StreamPublishState["NoPublished"] = 1] = "NoPublished";
    /**
     * 2: Publishing.
     */
    StreamPublishState[StreamPublishState["Publishing"] = 2] = "Publishing";
    /**
     * 3: Publishes successfully.
     */
    StreamPublishState[StreamPublishState["Published"] = 3] = "Published";
})(StreamPublishState || (StreamPublishState = {}));
/**
 * The subscribing state.
 *
 * @since v3.1.2.
 */
export var StreamSubscribeState;
(function (StreamSubscribeState) {
    /**
     * 0: The initial subscribing state after joining the channel.
     */
    StreamSubscribeState[StreamSubscribeState["Idle"] = 0] = "Idle";
    /**
     * 1: Fails to subscribe to the remote stream. Possible reasons:
     * - The remote user:
     *   - Calls [`muteLocalAudioStream(true)`]{@link RtcEngine.muteLocalAudioStream} or [`muteLocalVideoStream(true)`]{@link RtcEngine.muteLocalVideoStream} to stop sending local streams.
     *   - The local user calls [`disableAudio`]{@link RtcEngine.disableAudio} or [`disableVideo`]{@link RtcEngine.disableVideo} to disable the entire audio or video module.
     *   - The local user calls [`enableLocalAudio(false)`]{@link RtcEngine.enableLocalAudio} or [`enableLocalVideo(false)`]{@link enableLocalVideo} to disable the local audio sampling or video capturing.
     *   - The role of the local user is `Audience`.
     * - The local user calls the following methods to stop receiving remote streams:
     *   - Calls [`muteRemoteAudioStream(true)`]{@link RtcEngine.muteRemoteAudioStream}, [`muteAllRemoteAudioStreams(true)`]{@link RtcEngine.muteAllRemoteAudioStreams}, or [`setDefaultMuteAllRemoteAudioStreams(true)`]{@link RtcEngine.setDefaultMuteAllRemoteAudioStreams} to stop receiving remote audio streams.
     *   - Calls [`muteRemoteVideoStream(true)`]{@link RtcEngine.muteRemoteVideoStream}, [`muteAllRemoteVideoStreams(true)`]{@link RtcEngine.muteAllRemoteVideoStreams}, or [`setDefaultMuteAllRemoteVideoStreams(true)`]{@link RtcEngine.setDefaultMuteAllRemoteVideoStreams} to stop receiving remote video streams.
     */
    StreamSubscribeState[StreamSubscribeState["NoSubscribed"] = 1] = "NoSubscribed";
    /**
     * 2: Subscribing.
     */
    StreamSubscribeState[StreamSubscribeState["Subscribing"] = 2] = "Subscribing";
    /**
     * 3: Subscribes to and receives the remote stream successfully.
     */
    StreamSubscribeState[StreamSubscribeState["Subscribed"] = 3] = "Subscribed";
})(StreamSubscribeState || (StreamSubscribeState = {}));
/**
 * Events during the RTMP streaming.
 */
export var RtmpStreamingEvent;
(function (RtmpStreamingEvent) {
    /**
     * 1: An error occurs when you add a background image or a watermark image to the RTMP stream.
     */
    RtmpStreamingEvent[RtmpStreamingEvent["FailedLoadImage"] = 1] = "FailedLoadImage";
})(RtmpStreamingEvent || (RtmpStreamingEvent = {}));
//# sourceMappingURL=Enums.js.map