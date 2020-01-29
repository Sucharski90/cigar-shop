import React from "react";
import {StickyShareButtons} from 'sharethis-reactjs';

class Share extends React.Component {

  render () {
    return (
      <div>
        
        <StickyShareButtons
          config={{
            alignment: 'left',    // alignment of buttons (left, right)
            color: 'social',      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 16,        // font size for the buttons
            hide_desktop: false,  // hide buttons on desktop (true, false)
            labels: 'counts',     // button labels (cta, counts, null)
            language: 'en',       // which language to use (see LANGUAGES)
            min_count: 0,         // hide react counts less than min_count (INTEGER)
            networks: [           // which networks to include (see SHARING NETWORKS)
              'linkedin',
              'facebook',
              'twitter',
              'pinterest',
              'email'
            ],
            padding: 12,          // padding within buttons (INTEGER)
            radius: 4,            // the corner radius on each button (INTEGER)
            show_total: true,     // show/hide the total share count (true, false)
            show_mobile: true,    // show/hide the buttons on mobile (true, false)
            show_toggle: true,    // show/hide the toggle buttons (true, false)
            size: 48,             // the size of each button (INTEGER)
            top: 160,             // offset in pixels from the top of the page

            // OPTIONAL PARAMETERS
            url: 'https://sucharski90.github.io/cigar-shop/', // (defaults to current url)
            image: 'https://img.mshanken.com/d/cao/16_9/new_rules_cuban_1600-1.jpg',  // (defaults to og:image or twitter:image)
            description: 'custom text',       // (defaults to og:description or twitter:description)
            title: 'Cigar Shop',            // (defaults to og:title or twitter:title)
            username: 'custom twitter handle' // (only for twitter sharing)

          }}
        />

      </div>
    );
  }
};

// export
export default Share;