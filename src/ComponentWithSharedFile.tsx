import React from "react";
import sharedConfig from 'shared-config'

const Component = () => (
	<div id={'remote2-component-with-shared-file'} style={{ border: "5px solid darkblue" }}>
		<p>I'm a Component exposed from remote2 which use shared file !</p>
		<p>
      {sharedConfig.desc}
		</p>
	</div>
);
export default Component;
