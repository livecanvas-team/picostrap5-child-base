

//FRAMEWORK SETTINGS: THE EDITOR CONFIGURATION ///////////////

//why using objects?
//https://www.stefanjudis.com/today-i-learned/property-order-is-predictable-in-javascript-objects-since-es2015/

//general policy
//put all bootstrap property info, add " when needed in array values, then
//add to property object: about - docs - class (if not specified)
//
//class is the prefix for all classes, that is added to each elemeent before array


//JUST A DEMO ALERT, YOU CAN PERFECTLY REMOVE IT
alert("A custom editor config is loaded");


//DEFINE FRAMEWORK SETTINGS OBJECT
const theFramework = {
    name: "Bootstrap",
    version: "5.3",
    documentation: "https://getbootstrap.com/docs/5.3/",
    breakpoints: {
        "XS": {
            name: "Extra small",
            infix: "",
            dimensions: "<576px"
        },
        "SM": {
            name: "Small",
            infix: "sm",
            dimensions: "≥576px"
        },
        "MD": {
            name: "Medium",
            infix: "md",
            dimensions: "≥768px"
        },
        "LG": {
            name: "Large",
            infix: "lg",
            dimensions: "≥992px"
        },
        "XL": {
            name: "Extra large",
            infix: "xl",
            dimensions: "≥1200px"
        },
        "XXL": {
            name: "Extra extra large",
            infix: "xxl",
            dimensions: "≥1400px"
        },
    },
    properties: {
        "Colors": {
            
            "Background": {
                "color": {
                    property: "background",
                    class: "bg",
                    widget: "colors",
                    values: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "body", "white", "transparent"],
                    shades: {
                        values: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark",],
                        strengths: [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
                    }, 
                    about: "Change background color",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/background/#background-color",
                },
                "gradient": {
                    property: "background",
                    widget: "select",
                    values: ["bg-gradient"],
                    about: "Adds a linear gradient",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/background/#background-gradient",
                    class: ""
                },
                "opacity": {
                    property: "background",
                    widget: "select",
                    values: ["10", "25", "50", "75",],
                    about: "Adds a linear gradient via  background image",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/background/#opacity",
                    class: "bg-opacity"
                },
            },
            "Text": {
                "color": {
                    property: "color",
                    class: "text",
                    widget: "colors",
                    values: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "body", "muted", "white", /* "black-50", "white-50", */ "reset"],
                    shades: {
                        values: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark",],
                        strengths: [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
                    },
                    about: "Colorize text",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/colors/",
                },
                "opacity": {
                    property: "opacity",
                    widget: "select",
                    values: ["75", "50", "25"],
                    about: "Set text color opacity",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/colors/#opacity",
                    class: "text-opacity"
                },
            },

        }, 
        "Layout": {
            "General": {
                "display": {
                    responsive: true,
                    print: true,
                    property: "display",
                    class: "d",
                    widget: "select",
                    values: ["inline", "inline-block", "block", "grid", "inline-grid", "table", "table-row", "table-cell", "flex", "inline-flex", "none"],
                    about: "Quickly and responsively toggle the display value of components and more. ",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/display/",
                },

                "float": {
                    responsive: true,
                    property: "float",
                    widget: "icons",
                    values: ["start", "end", "none"],
                    about: "These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the CSS float property. ",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/float/",
                    class: "float",
                },
            },
            "Text Alignment": {
                "Text Alignment": {
                    responsive: true,
                    print: true,
                    property: "display",
                    class: "text",
                    widget: "icons",
                    values: ["start", "center", "end"],
                    about: "Easily realign text to components with text alignment classes. ",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/text/#text-alignment",
                },

                "Vertical Alignment": {
                    property: "vertical-align",
                    widget: "select",
                    values: ["baseline", "top", "middle", "bottom", "text-bottom", "text-top"],
                    about: "Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/vertical-align/",
                    class: "align",
                },
            },
            "Children Spacing": {
                "gutters": {
                    responsive: true,
                    property: "gutters",
                    class: "g",
                    widget: "numeric",
                    min: 0,
                    max: 5,
                    about: "Gutters are the padding between your columns, used to responsively space and align content in the Bootstrap grid system.",
                    docs: "https://getbootstrap.com/docs/5.3/layout/gutters/#horizontal--vertical-gutters",
                },

                "gap": {
                    responsive: true,
                    property: "gap",
                    widget: "numeric",
                    min: 0,
                    max: 10,
                    about: "These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the CSS float property. ",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/spacing/#gap",
                    class: "gap",

                },
            },
            "Flex": {
                "flex-direction": {
                    responsive: true,
                    property: "flex-direction",
                    class: "flex",
                    widget: "icons",
                    values: ["row", "column", "row-reverse", "column-reverse"],
                    about: "Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is row.",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/flex/#direction",
                },

                "flex-wrap": {
                    responsive: true,
                    property: "flex-wrap",
                    class: "flex",
                    widget: "icons",
                    values: ["wrap", "nowrap", "wrap-reverse"],
                    about: "Change how flex items wrap in a flex container. ",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/flex/#wrap",
                },
                "justify-content": {
                    responsive: true,
                    property: "justify-content",
                    class: "justify-content",
                    widget: "icons",
                    values: ["start", "end", "center", "between", "around", "evenly",],
                    about: "Use justify-content utilities on flexbox containers to change the alignment of flex items on the main axis",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/flex/#justify-content",
                },
                "align-items": {
                    responsive: true,
                    property: "align-items",
                    class: "align-items",
                    widget: "icons",
                    values: ["start", "end", "center", "baseline", "stretch",],
                    about: "Use align-items utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if flex-direction: column). Choose from start, end, center, baseline, or stretch (browser default).",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/flex/#align-items",
                },
                "align-content": {
                    responsive: true,
                    property: "align-content",
                    class: "align-content",
                    widget: "icons",
                    values: ["start", "end", "center", "between", "around", "stretch",],
                    about: "Use align-content utilities on flexbox containers to align flex items together on the cross axis.",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/flex/#align-content",
                },
            },
            "Flex Child": {
                "order": {
                    responsive: true,
                    property: "flex-order",
                    class: "order",
                    widget: "select",
                    values: ["first", "0", "1", "2", "3", "4", "5", "last"],
                    about: "Change the visual order of specific flex items with a handful of order utilities.",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/flex/#order",
                },
                "Flex Grow": {
                    responsive: true,
                    property: "flex-grow",
                    class: "flex",
                    widget: "select",
                    values: ["grow-0", "grow-1"],
                    about: "Use .flex-grow-* utilities to toggle a flex item’s ability to grow to fill available space. ",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/flex/#grow-and-shrink",
                },
                "Flex Shrink": {
                    responsive: true,
                    property: "flex-shrink",
                    class: "flex",
                    widget: "select",
                    values: ["shrink-0", "shrink-1"],
                    about: "Use .flex-shrink-* utilities to toggle a flex item’s ability to shrink if necessary. ",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/flex/#grow-and-shrink",
                },
                "Flex Fill": {
                    responsive: true,
                    property: "flex-fill",
                    class: "flex",
                    widget: "select",
                    values: ["fill"],
                    about: "",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/flex/#fill",
                },
                "Align Self": {
                    responsive: true,
                    property: "align-self",
                    class: "align-self",
                    widget: "icons",
                    values: ["auto", "start", "end", "center", "baseline", "stretch"],
                    about: "Use align-self utilities on flexbox items to individually change their alignment on the cross axis",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/flex/#align-self",
                }
            },

        },
        "Spacing": {
            "Margin": {

                "margin-align-start": {
                    responsive: true,
                    property: "margin",
                    class: "ms",
                    widget: "icons",
                    values: ["auto",],
                    about: "",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/spacing/#margin-and-padding",
                },
                "margin-align-center": {
                    responsive: true,
                    property: "margin",
                    class: "mx",
                    widget: "icons",
                    values: ["auto",],
                    about: "Additionally, Bootstrap also includes an .mx-auto class for horizontally centering fixed-width block level content—that is, content that has display: block and a width set—by setting the horizontal margins to auto.",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/spacing/#horizontal-centering",
                },
                "margin-align-end": {
                    responsive: true,
                    property: "margin",
                    class: "me",
                    widget: "icons",
                    values: ["auto",],
                    about: "",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/spacing/#margin-and-padding",
                },


                "margin-top": {
                    responsive: true,
                    property: "margin-top",
                    class: "mt",
                    min: -10,
                    max: 10,
                    widget: "numeric",
                    about: "Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an element’s appearance.",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/spacing/"
                },


                "margin-right": {
                    responsive: true,
                    property: "margin-right",
                    class: "me",
                    min: -10,
                    max: 10,
                    widget: "numeric",
                    about: "Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an elements appearance.",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/spacing/"
                },

                "margin-bottom": {
                    responsive: true,
                    property: "margin-bottom",
                    class: "mb",
                    min: -10,
                    max: 10,
                    widget: "numeric",
                    about: "Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an elements appearance.",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/spacing/"
                },
                "margin-left": {
                    responsive: true,
                    property: "margin-left",
                    class: "ms",
                    min: -10,
                    max: 10,
                    widget: "numeric",
                    about: "Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an elements appearance.",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/spacing/"
                },
            },


            "Padding": {
                "padding-top": {
                    responsive: true,
                    property: "padding-top",
                    class: "pt",
                    min: 0,
                    max: 10,
                    widget: "numeric",
                    about: "Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an element’s appearance.",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/spacing/"
                },


                "padding-right": {
                    responsive: true,
                    property: "padding-right",
                    class: "pe",
                    min: 0,
                    max: 10,
                    widget: "numeric",
                    about: "Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an elements appearance.",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/spacing/"
                },

                "padding-bottom": {
                    responsive: true,
                    property: "padding-bottom",
                    class: "pb",
                    min: 0,
                    max: 10,
                    widget: "numeric",
                    about: "Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an elements appearance.",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/spacing/"
                },
                "padding-left": {
                    responsive: true,
                    property: "padding-left",
                    class: "ps",
                    min: 0,
                    max: 10,
                    widget: "numeric",
                    about: "Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an elements appearance.",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/spacing/"
                },
            },



        },
        "Sizing": {
            "Widths": {
                "width": {
                    property: "width",
                    class: "w",
                    widget: "select",
                    values: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65", "70", "75", "80", "85", "90", "95", "100", "auto"],
                    about: " ",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/sizing/",
                },

                "max-width": {
                    responsive: true,
                    property: "max-width",
                    class: "mw",
                    widget: "select",
                    values: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "none"],
                    about: " ",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/sizing/",
                },
                "viewport-width": {
                    property: "width",
                    class: "vw",
                    widget: "select",
                    values: ["100"],
                    about: " ",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/sizing/",
                },
                "min-viewport-width": {
                    property: "width",
                    class: "min-vw",
                    widget: "select",
                    values: ["25", "50", "75", "100"],
                    about: " ",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/sizing/",
                },

            },

            "Heights": {
                "height": {
                    property: "height",
                    class: "h",
                    widget: "select",
                    values: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65", "70", "75", "80", "85", "90", "95", "100", "auto"],
                    about: " ",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/sizing/",
                },

                "max-height": {
                    property: "max-height",
                    class: "mh",
                    widget: "select",
                    values: ["100"],
                    about: " ",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/sizing/",
                },
                "viewport-height": {
                    property: "height",
                    class: "vh",
                    widget: "select",
                    values: ["100"],
                    about: " ",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/sizing/",
                },
                "min-viewport-height": {
                    responsive: true,
                    property: "height",
                    class: "min-vh",
                    widget: "select",
                    values: ["25", "50", "75", "100"],
                    about: " ",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/sizing/",
                },

            },
            "Utility": {
                "overflow": {
                    property: "overflow",
                    class: "overflow",
                    widget: "select",
                    values: ["auto", "hidden", "visible", "scroll"],
                    about: "Use these shorthand utilities for quickly configuring how content overflows an element.",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/overflow/",
                },


            },
            "Column": {
                "Column Size": {
                    responsive: true,
                    property: "width",
                    class: "col",
                    widget: "numeric",
                    min: 0,
                    max: 12,
                    about: "Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes.",
                    docs: "https://getbootstrap.com/docs/5.3/layout/columns/",
                },

                "Column Offset": {
                    responsive: true,
                    property: "",
                    class: "offset",
                    widget: "numeric",
                    min: 0,
                    max: 12,
                    about: "Move columns to the right",
                    docs: "https://getbootstrap.com/docs/5.3/layout/columns/#offsetting-columns",
                },

            },
            "Container": {
                "Container Width": {
                    property: "width",
                    widget: "select",
                    values: ["", "sm", "md", "lg", "xl", "xxl", "fluid"],
                    about: "Containers are a fundamental building block of Bootstrap that contain, pad, and align your content within a given device or viewport.",
                    docs: "https://getbootstrap.com/docs/5.3/layout/containers/",
                    class: "container"
                },
            }

        },
        "Position": {
            "General": {
                "Position": {
                    responsive: true,
                    property: "position",
                    widget: "select",
                    values: ["static", "relative", "absolute", "fixed", "sticky"],
                    about: "Use these shorthand utilities for quickly configuring the position of an element.",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/position/",
                    class: "position"
                },
                "Top": {
                    responsive: true,
                    property: "top",
                    widget: "select",
                    values: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65", "70", "75", "80", "85", "90", "95", "100", "auto"],
                    about: "Vertical top position",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/position/#arrange-elements",
                    class: "top"
                },
                "Bottom": {
                    responsive: true,
                    property: "bottom",
                    widget: "select",
                    values: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65", "70", "75", "80", "85", "90", "95", "100", "auto"],
                    about: "Vertical bottom position",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/position/#arrange-elements",
                    class: "bottom"
                },
                "Start": {
                    responsive: true,
                    property: "left",
                    widget: "select",
                    values: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65", "70", "75", "80", "85", "90", "95", "100", "auto"],
                    about: "Horizontal left position (in LTR)",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/position/#arrange-elements",
                    class: "start"
                },
                "End": {
                    responsive: true,
                    property: "right",
                    widget: "select",
                    values: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65", "70", "75", "80", "85", "90", "95", "100", "auto"],
                    about: "Horizontal right position (in LTR)",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/position/#arrange-elements",
                    class: "end"
                },
                "Translate Middle": {
                    responsive: true,
                    property: "transform",
                    widget: "select",
                    values: ["", "x", "y"],
                    about: "Center the elements with the transform utility class",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/position/#center-elements",
                    class: "translate-middle"
                },



            },
            "Helpers": {
                "Fixed": {
                    property: "position",
                    widget: "select",
                    values: ["top", "bottom"],
                    about: "Use these helpers for quickly configuring the position of an element.",
                    docs: "https://getbootstrap.com/docs/5.3/helpers/position/#fixed-top",
                    class: "fixed"
                },

                "Sticky": {
                    responsive: true,
                    property: "position",
                    widget: "select",
                    values: ["top", "bottom"],
                    about: "Position an element at the top of the viewport, from edge to edge, but only after you scroll past it.",
                    docs: "https://getbootstrap.com/docs/5.3/helpers/position/#sticky-top",
                    class: "sticky",
                },



                "Visibility": {
                    property: "visibility",
                    widget: "select",
                    values: ["visible", "invisible"],
                    about: "Control the visibility of elements, without modifying their display, with visibility utilities.",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/visibility/",
                    class: "",
                },
                "Clearfix": {
                    property: "clear",
                    widget: "select",
                    values: ["clearfix"],
                    about: "Quickly and easily clear floated content within a container by adding a clearfix utility.",
                    docs: "https://getbootstrap.com/docs/5.3/helpers/clearfix/",
                    class: "",
                },

            },

        },
        "Borders": {
            "General": {
                "additive-border": {
                    class: "border",
                    widget: "select",
                    values: ["", "top", "bottom", "start", "end",],
                    about: "Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/borders/#additive",
                },

                "Color": {
                    property: "border-color",
                    class: "border",
                    widget: "colors",
                    values: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "body", "muted", "white"],
                    about: "Colorize borders",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/borders/#color",
                },
                "Opacity": {
                    property: "opacity",
                    widget: "select",
                    values: ["75", "50", "25"],
                    about: "Set border color opacity",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/borders/#opacity",
                    class: "border-opacity"
                },
                "Width": {
                    property: "",
                    widget: "select",
                    values: ["1", "2", "3", "4", "5"],
                    about: "Set border color width",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/borders/#width",
                    class: "border"
                },
                "Radius": {
                    property: "",
                    widget: "select",
                    values: ["", "top", "end", "bottom", "start", "circle"],
                    about: "Set border color width",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/borders/#radius",
                    class: "rounded"
                },
                "Sizes": {
                    property: "",
                    widget: "select",
                    values: ["1", "2", "3", "4", "5"],
                    about: "Use the scaling classes for larger or smaller rounded corners.",
                    docs: "https://getbootstrap.com/docs/5.3//utilities/borders/#sizes",
                    class: "rounded"
                },
            },

            /* "Responsive border": {
                "responsive-border-start": {
                    class: "border-start",
                    widget: "select",
                    values: ["0","sm","md","lg","xl","xxl"],
                    about: "The border will be displayed only from the selected breakpoint onwards.",
                    docs: "https://bootstrap.ninja/ninjabootstrap/#borders",
                },
                "responsive-border-top": {
                    class: "border-top",
                    widget: "select",
                    values: ["0","sm","md","lg","xl","xxl"],
                    about: "The border will be displayed only from the selected breakpoint onwards.",
                    docs: "https://bootstrap.ninja/ninjabootstrap/#borders",
                },
                "responsive-border-bottom": {
                    class: "border-bottom",
                    widget: "select",
                    values: ["0","sm","md","lg","xl","xxl"],
                    about: "The border will be displayed only from the selected breakpoint onwards.",
                    docs: "https://bootstrap.ninja/ninjabootstrap/#borders",
                },
                "responsive-border-end": {
                    class: "border-end",
                    widget: "select",
                    values: ["0","sm","md","lg","xl","xxl"],
                    about: "The border will be displayed only from the selected breakpoint onwards.",
                    docs: "https://bootstrap.ninja/ninjabootstrap/#borders",
                },
            }, */
        },
        "Decoration": {
            "General": {
                "Background image": {
                    widget: "custom",
                    about: "Adds a custom background image to the element.",
                    custom: ` <div> <label>Background <a style="float:right;text-decoration: underline" class="open-background-image-panel" href="#">Image</a></label> <ul class="ul-to-selection" id="backgrounds"> <li class="first" style="background:rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box"></li> <li style=""></li> <div class="automatic-library-filler" the-style="background:url(https://cdn.livecanvas.com/media/backgrounds/trianglify/@id@.svg)  50% 50% / cover no-repeat;" max="18"><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/trianglify/1.svg)  50% 50% / cover no-repeat;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/trianglify/2.svg)  50% 50% / cover no-repeat;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/trianglify/3.svg)  50% 50% / cover no-repeat;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/trianglify/4.svg)  50% 50% / cover no-repeat;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/trianglify/5.svg)  50% 50% / cover no-repeat;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/trianglify/6.svg)  50% 50% / cover no-repeat;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/trianglify/7.svg)  50% 50% / cover no-repeat;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/trianglify/8.svg)  50% 50% / cover no-repeat;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/trianglify/9.svg)  50% 50% / cover no-repeat;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/trianglify/10.svg)  50% 50% / cover no-repeat;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/trianglify/11.svg)  50% 50% / cover no-repeat;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/trianglify/12.svg)  50% 50% / cover no-repeat;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/trianglify/13.svg)  50% 50% / cover no-repeat;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/trianglify/14.svg)  50% 50% / cover no-repeat;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/trianglify/15.svg)  50% 50% / cover no-repeat;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/trianglify/16.svg)  50% 50% / cover no-repeat;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/trianglify/17.svg)  50% 50% / cover no-repeat;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/trianglify/18.svg)  50% 50% / cover no-repeat;"></li></div> <div class="automatic-library-filler" the-style="background:url(https://cdn.livecanvas.com/media/backgrounds/pattern/@id@.png)  50% 50%;" max="14"><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/pattern/1.png)  50% 50%;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/pattern/2.png)  50% 50%;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/pattern/3.png)  50% 50%;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/pattern/4.png)  50% 50%;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/pattern/5.png)  50% 50%;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/pattern/6.png)  50% 50%;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/pattern/7.png)  50% 50%;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/pattern/8.png)  50% 50%;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/pattern/9.png)  50% 50%;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/pattern/10.png)  50% 50%;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/pattern/11.png)  50% 50%;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/pattern/12.png)  50% 50%;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/pattern/13.png)  50% 50%;"></li><li style="background:url(https://cdn.livecanvas.com/media/backgrounds/pattern/14.png)  50% 50%;"></li></div> </ul> </div> `,
                },

                "Shape Divider": {
                    widget: "custom",
                    about: " Adds an SVG item at the bottom of the element. You may have to assign a backgound to see the effect.",
                    custom: `<ul class="ul-to-selection" id="shape_dividers"> <li class="first"></li> <li></li> <li> <svg class="lc-shape-divider-bottom" viewBox="0 0 140 24" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"> <path d="M0 24H1440V0C722.5 52 0 0 0 0V24Z" fill="white"></path> </svg> </li> <li> <svg class="lc-shape-divider-bottom" style=" fill:white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 206.86" preserveAspectRatio="none"> <path d="M475.75 65c85.1-33.38 176.3-53 268-48.16a485.87 485.87 0 0 1 122.69 22.3A620.49 620.49 0 0 0 769 11.3c-166-32.36-329.9 9.06-482 69.91-98.73 39.51-191.5 86.25-287 125.65h167c65.37-30.67 129.71-65 197.67-94.61C400.93 96.47 438 79.79 475.75 65z" opacity=".15"></path> <path d="M741.62 52.76c-129.82-27.54-258 7.7-376.92 59.49-68 29.59-132.3 63.94-197.67 94.61h833v-9.09C930.63 126.88 832.81 72.1 741.62 52.76z"></path> <path d="M866.44 39.14a485.87 485.87 0 0 0-122.66-22.31C652.05 12 560.85 31.61 475.75 65c-37.73 14.8-74.82 31.48-111 47.26 118.93-51.79 247.1-87 376.92-59.49 91.19 19.34 189 74.12 258.38 145v-84.5a329.47 329.47 0 0 0-50-36.65 723 723 0 0 0-83.61-37.48z" opacity=".3"></path></svg> </li> <li> <svg class="lc-shape-divider-bottom" style=" fill:white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4200 512" preserveAspectRatio="xMidYMin slice"> <path style="isolation:isolate" d="M200 500l100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100V400l-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100L0 400v100l100-100z" opacity=".75"></path> <path d="M4200 500l-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100L0 500v12h4200z"></path> <path style="isolation:isolate" d="M200 400l100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100V300l-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100L0 300v100l100-100z" opacity=".5"></path> <path style="isolation:isolate" d="M200 300l100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100V200l-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100-100 100-100-100L0 200v100l100-100z" opacity=".25"></path> <path style="isolation:isolate" d="M200 200l100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100 100-100 100 100V100L4100 0l-100 100L3900 0l-100 100L3700 0l-100 100L3500 0l-100 100L3300 0l-100 100L3100 0l-100 100L2900 0l-100 100L2700 0l-100 100L2500 0l-100 100L2300 0l-100 100L2100 0l-100 100L1900 0l-100 100L1700 0l-100 100L1500 0l-100 100L1300 0l-100 100L1100 0l-100 100L900 0 800 100 700 0 600 100 500 0 400 100 300 0 200 100 100 0 0 100v100l100-100z" opacity=".12"></path></svg> </li> <li> <svg class="lc-shape-divider-bottom" style=" fill:white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 279.24" preserveAspectRatio="none"> <path d="M1000 0S331.54-4.18 0 279.24h1000z" opacity=".25"></path> <path d="M1000 279.24s-339.56-44.3-522.95-109.6S132.86 23.76 0 25.15v254.09z"></path></svg> </li> <li> <svg class="lc-shape-divider-bottom" width="100%" style="height: 6vh;" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none"> <path d="M0,0 C40,33 66,52 75,52 C83,52 92,33 100,0 L100,100 L0,100 L0,0 Z" fill="#ffffff"></path> </svg> </li> <li> <svg class="lc-shape-divider-bottom" width="100%" style="height: 6vh;fill:white" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none"> <path d="M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z"></path> </svg> </li> <li> <svg class="lc-shape-divider-bottom" width="100%" style="height: 6vh;" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none"> <path d="M0,0 C6.83050094,50 15.1638343,75 25,75 C41.4957514,75 62.4956597,0 81.2456597,0 C93.7456597,0 99.9971065,0 100,0 L100,100 L0,100" fill="#FFFFFF"></path> </svg> </li> <li> <svg fill="white" class="lc-shape-divider-bottom" style="transform:rotate(-180deg);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"> <path d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path> </svg> </li> <li> <svg class="lc-shape-divider-bottom" style="fill:white; " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1440 126"> <path d="M685.6,38.8C418.7-11.1,170.2,9.9,0,30v96h1440V30C1252.7,52.2,1010,99.4,685.6,38.8z"></path> </svg> </li> <li> <svg class="lc-shape-divider-bottom" style="fill:white; height: 6vh;" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none"> <path d="M0 100 C 20 0 50 0 100 100 Z"></path> </svg> </li> </ul>`,
                },

                "Shadow": {
                    property: "box-shadow",
                    widget: "select",
                    values: ["sm", "", "lg"],
                    about: "Add or remove shadows to elements with box-shadow utilities.",
                    docs: "https://getbootstrap.com/docs/5.3/utilities/shadows",
                    class: "shadow"
                },
            },

        },
        "Animation": {
            "General": {
                "Animation Type": {
                    target: "html",
                    widget: "custom",
                    about: "Enables animation using the Animate On Scroll library.",
                    docs: "https://michalsnik.github.io/aos/",
                    custom: `<select class="form-control" name="aos_animation_type_no" attribute-name="data-aos"> <option value="">None</option> <optgroup label="Fade animations"> <option value="fade">Fade</option> <option value="fade-up">Fade Up</option> <option value="fade-down">Fade Down</option> <option value="fade-left">Fade Left</option> <option value="fade-right">Fade Right</option> <option value="fade-up-right">Fade Up Right</option> <option value="fade-up-left">Fade Up Left</option> <option value="fade-down-right">Fade Down Right</option> <option value="fade-down-left">Fade Down Left</option> </optgroup> <optgroup label="Flip animations"> <option value="flip-up">Flip Up</option> <option value="flip-down">Flip Down</option> <option value="flip-left">Flip Left</option> <option value="flip-right">Flip Right</option> </optgroup> <optgroup label="Slide animations"> <option value="slide-up">Slide Up</option> <option value="slide-down">Slide Down</option> <option value="slide-left">Slide Left</option> <option value="slide-right">Slide Right</option> </optgroup> <optgroup label="Zoom animations"> <option value="zoom-in">Zoom In</option> <option value="zoom-in-up">Zoom In Up</option> <option value="zoom-in-down">Zoom In Down</option> <option value="zoom-in-left">Zoom In Left</option> <option value="zoom-in-right">Zoom In Right</option> <option value="zoom-out">Zoom Out</option> <option value="zoom-out-up">Zoom Out Up</option> <option value="zoom-out-down">Zoom Out Down</option> <option value="zoom-out-left">Zoom Out Left</option> <option value="zoom-out-right">Zoom Out Right</option> </optgroup> </select> `,
                },
                "Delay (ms)": {
                    target: "html",
                    widget: "custom",
                    about: "Sets the delay of the animation play time. The duration value can be anywhere between 0 and 3000 with steps of 50ms. Since the duration is handled in CSS, using smaller steps or a wider range would have unnecessarily increased the size of the CSS code. The default value for this attribute is 0.",
                    custom: `<input type="number" class="form-control" name="aos_delay" min="0" max="3000" step="50" attribute-name="data-aos-delay">`,
                },
                "Duration (ms)": {
                    target: "html",
                    widget: "custom",
                    about: "Sets the duration of the animation. The duration value can be anywhere between 50 and 3000 with steps of 50ms. Since the duration is handled in CSS, using smaller steps or a wider range would have unnecessarily increased the size of the CSS code. This range should be sufficient for almost all animations. The default value for this attribute is 400.",
                    custom: `<input type="number" class="form-control" name="aos_duration" min="0" max="3000" step="50" attribute-name="data-aos-duration">`,
                },
                "Easing": {
                    target: "html",
                    widget: "custom",
                    about: " Use this attribute to control the timing function of the animation.",
                    custom: `<select class="form-control" name="aos_easing" attribute-name="data-aos-easing"> <option value=""></option> <option value="linear">linear</option> <option value="ease">ease</option> <option value="ease-in">ease-in</option> <option value="ease-out">ease-out</option> <option value="ease-in-out">ease-in-out</option> <option value="ease-in-back">ease-in-back</option> <option value="ease-out-back">ease-out-back</option> <option value="ease-in-out-back">ease-in-out-back</option> <option value="ease-in-sine">ease-in-sine</option> <option value="ease-out-sine">ease-out-sine</option> <option value="ease-in-out-sine">ease-in-out-sine</option> <option value="ease-in-quad">ease-in-quad</option> <option value="ease-out-quad">ease-out-quad</option> <option value="ease-in-out-quad">ease-in-out-quad</option> <option value="ease-in-cubic">ease-in-cubic</option> <option value="ease-out-cubic">ease-out-cubic</option> <option value="ease-in-out-cubic">ease-in-out-cubic</option> <option value="ease-in-quart">ease-in-quart</option> <option value="ease-out-quart">ease-out-quart</option> <option value="ease-in-out-quart">ease-in-out-quart</option> </select>`,
                },
                "Once": {
                    target: "html",
                    widget: "custom",
                    about: "By default, the animations are replayed every time the elements scroll into view. You can set the value of this attribute to true in order to animate the elements only once.",
                    custom: `<select class="form-control" name="aos_once" attribute-name="data-aos-once"> <option value="false">False</option>	<option value="true">True</option>	</select>`,
                },
                "Mirror": {
                    target: "html",
                    widget: "custom",
                    about: "Prevents the animation from disappearing when scrolling back up the page, so once the animations appear when you scroll down they will not animate on scroll up.",
                    custom: `<select class="form-control" name="aos_mirror" attribute-name="data-aos-mirror">	<option value="">No</option>	<option value="true">Mirror</option></select>`,
                },
                "Offset (px)": {
                    target: "html",
                    attribute: "data-aos-offset",
                    widget: "custom",
                    custom: `<input type="number" class="form-control" name="aos_duration" min="0" max="9999" step="1" attribute-name="data-aos-offset">`,
                    class: '', //the prefix
                    about: "Use this attribute to trigger the animation sooner or later than the designated time. Its default value is 120px.",
                },
                




            },

        },

    },
    layout_elements: {
        "Main": {
            selector: "main > section",

        },
        "Container": {
            selector: "main .container, main .container-fluid, main .container-sm,main .container-md,main .container-lg,main .container-xl",


        },
        "Row": {
            selector: "main .row",

        },
        "Column": {
            selector: "main *[class^='col-'], main *[class*=' col-'],main .col",
            /*
            get demo_dyn_prop() {
                return (theFramework.properties.Size.Column);
            }
            */

        },
        "Block": {
            selector: "main .lc-block",
        },

    },

};

//console.log(theFramework);




//DEFINE INTRO PANELS STRUCTURE DYNAMICALLY recalling bits and bobs
function getCompleteProperties(layoutElementName, thePropertiesOriginal = theFramework.properties) {

    //deep clone config obj
    let theProperties = JSON.parse(JSON.stringify(thePropertiesOriginal));

    //define intro panel for columns
    if (layoutElementName.includes('Column')) {

        //add element to object before all others
        theProperties = Object.assign({}, {
            'Column': {
                'Column': (theProperties['Sizing']['Column']),
            }
        }, theProperties);
    }

    //define intro panel for containers
    if (layoutElementName.includes('Container')) {

        //add element to object before all others
        theProperties = Object.assign({}, {
            'Container': {
                'Container': (theProperties['Sizing']['Container']),
            }
        }, theProperties);
    }

    return theProperties;
}

