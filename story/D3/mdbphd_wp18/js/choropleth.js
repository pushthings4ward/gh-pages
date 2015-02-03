  /* Backbone style execution */
  var map = new Map({
      scope: 'usa',
      el: $('#container91'),
      geography: { 
        highlightBorderColor: '#222',
        highlightOnHover: true,
        popupTemplate: _.template('<div class="hoverinfo" style="height: 100%; width: 100%"><strong> <%= geography.properties.name %> </strong> <% if (data.electoralVotes) { %><hr/> <%= data.electoralVotes %> <% } %></div>')
      },
      
      fills: {
        'A': '#FEE5D9',
        'B': '#FEE5D9',
        'C': '#FCBBA1',
        'D': '#FCBBA1',
        'E': '#FC9272',
        'F': '#FC9272',
        'G': '#FB6A4A',
        'H': '#FB6A4A',
        'I': '#EF3B2C',
        'J': '#EF3B2C',
        'K': '#CB181D',
        'L': '#99000D',
        defaultFill: '#D9D9D9'
      },
      data: {
        "AZ": {
            "fillKey": "F",
            "electoralVotes": 'Seit 1977 wurden <b>32 Menschen</b> hingerichtet.'  

        },
        "CO": {
            "fillKey": "A",
            "electoralVotes": 'Seit 1977 wurde <b>1 Mensch</b> hingerichtet.'
        },
        "DE": {
            "fillKey": "B",
            "electoralVotes": 'Seit 1977 wurden <b>16 Menschen</b> hingerichtet.'
        },
        "FL": {
            "fillKey": "H",
            "electoralVotes": 'Seit 1977 wurden <b>74 Menschen</b> hingerichtet.'
        },
        "GA": {
            "fillKey": "F",
            "electoralVotes": 'Seit 1977 wurden <b>52 Menschen</b> hingerichtet.'
        },
        "HI": {
            "fillKey": "",
            "electoralVotes": 'Seit 1977 wurde <b>kein Mensch</b> hingerichtet.'
        },
        "ID": {
            "fillKey": "A",
            "electoralVotes": 'Seit 1977 wurden <b>3 Menschen</b> hingerichtet.'
        },
        "IL": {
            "fillKey": "B",
            "electoralVotes": 'Seit 1977 wurden <b>12 Menschen</b> hingerichtet.'
        },
        "IN": {
            "fillKey": "B",
            "electoralVotes": 'Seit 1977 wurden <b>20 Menschen</b> hingerichtet.'
        },
        "IA": {
            "fillKey": "",
            "electoralVotes": 'Seit 1977 wurde <b>kein Mensch</b> hingerichtet.'
        },
        "KS": {
            "fillKey": "",
            "electoralVotes": 'Seit 1977 wurde <b>kein Menschen</b> hingerichtet.'
        },
        "KY": {
            "fillKey": "A",
            "electoralVotes": 'Seit 1977 wurden <b>3 Menschen</b> hingerichtet.'
        },
        "LA": {
            "fillKey": "C",
            "electoralVotes": 'Seit 1977 wurden <b>28 Menschen</b> hingerichtet.'
        },
        "MD": {
            "fillKey": "A",
            "electoralVotes": 'Seit 1977 wurden <b>5 Menschen</b> hingerichtet.'
        },
        "ME": {
            "fillKey": "",
            "electoralVotes": 'Seit 1977 wurde <b>kein Mensch</b> hingerichtet.'
        },
        "MA": {
            "fillKey": "",
            "electoralVotes": 'Seit 1977 wurde <b>kein Mensch</b> hingerichtet.'
        },
        "MN": {
            "fillKey": "",
            "electoralVotes": 'Seit 1977 wurde <b>kein Mensch</b> hingerichtet.'
        },
        "MI": {
            "fillKey": "",
            "electoralVotes": 'Seit 1977 wurde <b>kein Mensch</b> hingerichtet.'
        },
        "MS": {
            "fillKey": "C",
            "electoralVotes": 'Seit 1977 wurden <b>21 Menschen</b> hingerichtet.'
        },
        "MO": {
            "fillKey": "G",
            "electoralVotes": 'Seit 1977 wurden <b>68 Menschen</b> hingerichtet.'
        },
        "MT": {
            "fillKey": "A",
            "electoralVotes": 'Seit 1977 wurden <b>3 Menschen</b> hingerichtet.'
        },
        "NC": {
            "fillKey": "E",
            "electoralVotes": 'Seit 1977 wurden <b>43 Menschen</b> hingerichtet.'
        },
        "NE": {
            "fillKey": "A",
            "electoralVotes": 'Seit 1977 wurden <b>3 Menschen</b> hingerichtet.'
        },
        "NV": {
            "fillKey": "B",
            "electoralVotes": 'Seit 1977 wurden <b>12 Menschen</b> hingerichtet.'
        },
        "NH": {
            "fillKey": "",
            "electoralVotes": 'Seit 1977 wurde <b>kein Mensch</b> hingerichtet.'
        },
        "NJ": {
            "fillKey": "",
            "electoralVotes": 'Seit 1977 wurde <b>kein Mensch</b> hingerichtet.'
        },
        "NY": {
            "fillKey": "",
            "electoralVotes": 'Seit 1977 wurde <b>kein Mensch</b> hingerichtet.'
        },
        "ND": {
            "fillKey": "",
            "electoralVotes": 'Seit 1977 wurde <b>kein Mensch</b> hingerichtet.'
        },
        "NM": {
            "fillKey": "A",
            "electoralVotes": 'Seit 1977 wurde <b>1 Mensch</b> hingerichtet.'
        },
        "OH": {
            "fillKey": "E",
            "electoralVotes": 'Seit 1977 wurden <b>49 Menschen</b> hingerichtet.'
        },
        "OK": {
            "fillKey": "K",
            "electoralVotes": 'Seit 1977 wurden <b>102 Menschen</b> hingerichtet.'
        },
        "OR": {
            "fillKey": "A",
            "electoralVotes": 'Seit 1977 wurden <b>2 Menschen</b> hingerichtet.'
        },
        "PA": {
            "fillKey": "A",
            "electoralVotes": 'Seit 1977 wurden <b>3 Menschen</b> hingerichtet.'
        },
        "RI": {
            "fillKey": "",
            "electoralVotes": 'Seit 1977 wurde <b>kein Mensch</b> hingerichtet.'
        },
        "SC": {
            "fillKey": "E",
            "electoralVotes": 'Seit 1977 wurden <b>43 Menschen</b> hingerichtet.'
        },
        "SD": {
            "fillKey": "A",
            "electoralVotes": 'Seit 1977 wurden <b>3 Menschen</b> hingerichtet.'
        },
        "TN": {
            "fillKey": "A",
            "electoralVotes": 'Seit 1977 wurden <b>6 Menschen</b> hingerichtet.'
        },
        "TX": {
            "fillKey": "L",
            "electoralVotes": 'Seit 1977 wurden <b>492 Menschen</b> hingerichtet.'
        },
        "UT": {
            "fillKey": "A",
            "electoralVotes": 'Seit 1977 wurden <b>7 Menschen</b> hingerichtet.'
        },
        "WI": {
            "fillKey": "",
            "electoralVotes": 'Seit 1977 wurde <b>kein Mensch</b> hingerichtet.'
        },
        "VA": {
            "fillKey": "K",
            "electoralVotes": 'Seit 1977 wurden <b>109 Menschen</b> hingerichtet.'
        },
        "VT": {
            "fillKey": "",
            "electoralVotes": 'Seit 1977 wurde <b>kein Mensch</b> hingerichtet.'
        },
        "WA": {
            "fillKey": "A",
            "electoralVotes": 'Seit 1977 wurden <b>5 Menschen</b> hingerichtet.'
        },
        "WV": {
            "fillKey": "",
            "electoralVotes": 'Seit 1977 wurde <b>kein Mensch</b> hingerichtet.'
        },
        "WY": {
            "fillKey": "A",
            "electoralVotes": 'Seit 1977 wurde <b>1 Mensch</b> hingerichtet.'
        },
        "CA": {
            "fillKey": "B",
            "electoralVotes": 'Seit 1977 wurden <b>13 Menschen</b> hingerichtet.'
        },
        "CT": {
            "fillKey": "A",
            "electoralVotes": 'Seit 1977 wurde <b>1 Menschen</b> hingerichtet.'
        },
        "AK": {
            "fillKey": "",
            "electoralVotes": 'Seit 1977 wurde <b>kein Mensch</b> hingerichtet.'
        },
        "AR": {
            "fillKey": "",
            "electoralVotes": 'Seit 1977 wurde <b>kein Mensch</b> hingerichtet.'
        },
        "AL": {
            "fillKey": "C",
            "electoralVotes": 'Seit 1977 wurden <b>27 Menschen</b> hingerichtet.'
        }
      }
    });

   map.render();