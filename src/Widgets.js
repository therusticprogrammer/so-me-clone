import React from 'react';
import "./Widgets.css"

function Widgets() {
    return (
        <div className="widgets">
            {/* iframe is basically rendering and embedding another web page into your page * /}
            <iframe 
                title="iframe widget"
                src="https://www.geeksforgeeks.org/html-iframe-src-attribute/"
                width="340"
                height="100%"
                style={{
                    border: "none", overflow:"hidden"
                }}
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                allow="encrypted-media"
            ></iframe> */}
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
            width="340" 
            height="1500" 
            style={{
                border: "none", overflow:"hidden"
            }}
            scrolling="yes" 
            frameborder="0" 
            allowfullscreen="true" 
            title="widget_test"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

        </div>
    );
}

export default Widgets;