import React, { Component } from "react";
import { requireNativeComponent } from "react-native";
/**
 * @ignore
 */
const RCTRtcSurfaceView = requireNativeComponent('RCTAgoraRtcSurfaceView');
/**
 * @ignore
 */
export class RtcSurfaceView extends Component {
    render() {
        const { channelId = null, uid, ...others } = this.props;
        return (React.createElement(RCTRtcSurfaceView, Object.assign({ key: `surface-${channelId}-${uid}`, data: { channelId, uid } }, others)));
    }
}
/**
 * @ignore
 */
const RCTRtcTextureView = requireNativeComponent('RCTAgoraRtcTextureView');
/**
 * @ignore
 */
export class RtcTextureView extends Component {
    render() {
        const { channelId = null, uid, ...others } = this.props;
        return (React.createElement(RCTRtcTextureView, Object.assign({ key: `texture-${channelId}-${uid}`, data: { channelId, uid } }, others)));
    }
}
//# sourceMappingURL=RtcRenderView.native.js.map