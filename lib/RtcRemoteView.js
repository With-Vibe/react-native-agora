import React, { Component } from "react";
import { Platform } from "react-native";
import { RtcSurfaceView, RtcTextureView } from "./src/RtcRenderView.native";
/**
 * The SurfaceView class.
 *
 * **Note**
 *
 * SurfaceView is supported on Android only. Use UIView on iOS.
 *
 * @noInheritDoc
 */
class SurfaceView extends Component {
    render() {
        return (React.createElement(RtcSurfaceView, Object.assign({}, this.props)));
    }
}
/**
 * The TextureView class.
 *
 * **Note**
 *
 * TextureView is supported on Android only. iOS does not support TextureView.
 * @noInheritDoc
 */
class TextureView extends Component {
    render() {
        if (Platform.OS === 'ios')
            throw new Error('TextureView not support for iOS');
        return (React.createElement(RtcTextureView, Object.assign({}, this.props)));
    }
}
/**
 * View for rendering remote video.
 */
export default {
    SurfaceView,
    TextureView
};
//# sourceMappingURL=RtcRemoteView.js.map