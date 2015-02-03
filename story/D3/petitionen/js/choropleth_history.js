  /* Backbone style execution */
  var map = new Map({
      scope: 'usa',
      el: $('#container1'),
      geography: { 
        highlightBorderColor: '#222',
        highlightOnHover: true,
        popupTemplate: _.template('<div class="hoverinfo" style="height: 100%; width: 100%"><strong><%= geography.properties.name %></strong> <% if (data.electoralVotes) { %><hr/> <%= data.electoralVotes %> <% } %></div>')
      },
      
      fills: {
        'A': '#FFF7BC',
        'B': '#FEC44F',
        'C': '#D95F0E',
        defaultFill: '#D9D9D9'
      },
      data: {
        "AZ": {
            "fillKey": "B",
            "electoralVotes": '2012 wurden <b>6</b> Menschen hingerichtet.'
        },
        "CO": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "DE": {
            "fillKey": "A",
            "electoralVotes": '2012 wurde <b>1</b> Mensch hingerichtet.'
        },
        "FL": {
            "fillKey": "A",
            "electoralVotes": '2012 wurden <b>3</b> Menschen hingerichtet.'
        },
        "GA": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "HI": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "ID": {
            "fillKey": "A",
            "electoralVotes": '2012 wurde <b>1</b> Mensch hingerichtet.'
        },
        "IL": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "IN": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "IA": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "KS": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "KY": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "LA": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "MD": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "ME": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "MA": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "MN": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "MI": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "MS": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "MO": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "MT": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "NC": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "NE": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "NV": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "NH": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "NJ": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "NY": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "ND": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "NM": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "OH": {
            "fillKey": "A",
            "electoralVotes": '2012 wurden <b>3</b> Menschen hingerichtet.'
        },
        "OK": {
            "fillKey": "B",
            "electoralVotes": '2012 wurden <b>6</b> Menschen hingerichtet.'
        },
        "OR": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "PA": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "RI": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "SC": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "SD": {
            "fillKey": "A",
            "electoralVotes": '2012 wurden <b>2</b> Menschen hingerichtet.'
        },
        "TN": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "TX": {
            "fillKey": "C",
            "electoralVotes": '2012 wurden <b>15</b> Menschen hingerichtet.'
        },
        "UT": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "WI": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "VA": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "VT": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "WA": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "WV": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "WY": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "CA": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "CT": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "AK": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "AR": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        },
        "AL": {
            "fillKey": "",
            "electoralVotes": '2012 wurde <b>kein</b> Mensch hingerichtet.'
        }
      }
    });

   map.render();