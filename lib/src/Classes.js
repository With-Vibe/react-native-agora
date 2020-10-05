/**
 * The video resolution.
 */
export class VideoDimensions {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
/**
 * Definition of VideoEncoderConfiguration.
 */
export class VideoEncoderConfiguration {
    constructor({ dimensions, frameRate, minFrameRate, bitrate, minBitrate, orientationMode, degradationPrefer, mirrorMode }) {
        this.dimensions = dimensions;
        this.frameRate = frameRate;
        this.minFrameRate = minFrameRate;
        this.bitrate = bitrate;
        this.minBitrate = minBitrate;
        this.orientationMode = orientationMode;
        this.degradationPrefer = degradationPrefer;
        this.mirrorMode = mirrorMode;
    }
}
/**
 * Sets the image enhancement options.
 */
export class BeautyOptions {
    constructor({ lighteningContrastLevel, lighteningLevel, smoothnessLevel, rednessLevel }) {
        this.lighteningContrastLevel = lighteningContrastLevel;
        this.lighteningLevel = lighteningLevel;
        this.smoothnessLevel = smoothnessLevel;
        this.rednessLevel = rednessLevel;
    }
}
/**
 * Agora image properties. A class for setting the properties of the watermark and background images.
 */
export class AgoraImage {
    constructor(url, x, y, width, height) {
        this.url = url;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
/**
 * The transcodingUser class, which defines the audio and video properties in the CDN live. Agora supports a maximum of 17 transcoding users in a CDN live streaming channel.
 */
export class TranscodingUser {
    constructor(uid, x, y, { width, height, zOrder, alpha, audioChannel }) {
        this.uid = uid;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.zOrder = zOrder;
        this.alpha = alpha;
        this.audioChannel = audioChannel;
    }
}
/**
 * Color.
 */
export class Color {
    constructor(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
}
/**
 * A class for managing user-specific CDN live audio/video transcoding settings.
 */
export class LiveTranscoding {
    constructor(transcodingUsers, { width, height, videoBitrate, videoFramerate, lowLatency, videoGop, watermark, backgroundImage, audioSampleRate, audioBitrate, audioChannels, audioCodecProfile, videoCodecProfile, backgroundColor, userConfigExtraInfo }) {
        this.width = width;
        this.height = height;
        this.videoBitrate = videoBitrate;
        this.videoFramerate = videoFramerate;
        this.lowLatency = lowLatency;
        this.videoGop = videoGop;
        this.watermark = watermark;
        this.backgroundImage = backgroundImage;
        this.audioSampleRate = audioSampleRate;
        this.audioBitrate = audioBitrate;
        this.audioChannels = audioChannels;
        this.audioCodecProfile = audioCodecProfile;
        this.videoCodecProfile = videoCodecProfile;
        this.backgroundColor = backgroundColor;
        this.userConfigExtraInfo = userConfigExtraInfo;
        this.transcodingUsers = transcodingUsers;
    }
}
/**
 * The ChannelMediaInfo class.
 */
export class ChannelMediaInfo {
    constructor(uid, { channelName, token }) {
        this.channelName = channelName;
        this.token = token;
        this.uid = uid;
    }
}
/**
 * The ChannelMediaRelayConfiguration class.
 */
export class ChannelMediaRelayConfiguration {
    constructor(srcInfo, destInfos) {
        this.srcInfo = srcInfo;
        this.destInfos = destInfos;
    }
}
/**
 * Lastmile probe configuration.
 */
export class LastmileProbeConfig {
    constructor(probeUplink, probeDownlink, expectedUplinkBitrate, expectedDownlinkBitrate) {
        this.probeUplink = probeUplink;
        this.probeDownlink = probeDownlink;
        this.expectedUplinkBitrate = expectedUplinkBitrate;
        this.expectedDownlinkBitrate = expectedDownlinkBitrate;
    }
}
/**
 * The position and size of the watermark image.
 */
export class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
/**
 * Agora watermark options. A class for setting the properties of watermark.
 */
export class WatermarkOptions {
    constructor(positionInLandscapeMode, positionInPortraitMode, visibleInPreview) {
        this.visibleInPreview = visibleInPreview;
        this.positionInLandscapeMode = positionInLandscapeMode;
        this.positionInPortraitMode = positionInPortraitMode;
    }
}
/**
 * Configuration of the imported live interactive voice or video stream.
 */
export class LiveInjectStreamConfig {
    constructor({ width, height, videoGop, videoFramerate, videoBitrate, audioSampleRate, audioBitrate, audioChannels }) {
        this.width = width;
        this.height = height;
        this.videoGop = videoGop;
        this.videoFramerate = videoFramerate;
        this.videoBitrate = videoBitrate;
        this.audioSampleRate = audioSampleRate;
        this.audioBitrate = audioBitrate;
        this.audioChannels = audioChannels;
    }
}
/**
 * The definition of CameraCapturerConfiguration.
 */
export class CameraCapturerConfiguration {
    constructor(preference, cameraDirection) {
        this.preference = preference;
        this.cameraDirection = cameraDirection;
    }
}
/**
 * The channel media options.
 */
export class ChannelMediaOptions {
    constructor(autoSubscribeAudio, autoSubscribeVideo) {
        this.autoSubscribeAudio = autoSubscribeAudio;
        this.autoSubscribeVideo = autoSubscribeVideo;
    }
}
/**
 * Definition of `EncryptionConfig`.
 *
 * @since v3.1.2.
 */
export class EncryptionConfig {
    constructor(encryptionMode, encryptionKey) {
        this.encryptionMode = encryptionMode;
        this.encryptionKey = encryptionKey;
    }
}
//# sourceMappingURL=Classes.js.map