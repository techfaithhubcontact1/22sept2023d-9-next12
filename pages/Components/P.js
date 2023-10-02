import React from 'react'
import QQ from './QQ';

export default function P(pp) {
    console.log(pp);
    return (
        <>
           <div>P Component {pp.name13}</div>
           <QQ name14="Questions" mssg={pp.msggggg}></QQ>
        </>
    )
}
