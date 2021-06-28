import React from "react";
import {
    StarrySkyBg,
    StarrySpidersOne,
    StarrySpidersTwo,
    StarrySpidersThree,
} from './styleds';

function StarrySky() {
    return (
        <StarrySkyBg>
            <div>
                <StarrySpidersOne />
                <StarrySpidersTwo />
                <StarrySpidersThree />
            </div>
        </StarrySkyBg>
    );
};

export default StarrySky;
