﻿/// <reference path="actions/lifecycleactions.ts" />
/// <reference path="util/appstart.ts" />
/// <reference path="components/elementtile.tsx" />
/// <reference path="../librarydefinitions/react-stub.d.ts" />
module SearchTiles {

    import RegisterDOMReadyFunction = Utils.AppStart.RegisterDomReadyFunction;
    import TriggerApplicationStartedAction = Actions.Lifecyle.ApplicationStarted;
    import ElementTileComponent = Components.ElementTile;

    var Application = React.createClass({

        render: function () {
            return (
                <div>
                    Hey, look! React initialized and mounted the root component!
                    <ElementTileComponent />
                </div>
            );
        }

    });

    // This root application component gets to reach into the DOM.
    // Such things won't happen anywhere else.
    function InitializeApplication() {

        // This tells ReactDOM to mount the root component in the DOM
        ReactDOM.render(
            <Application />,
            document.getElementById('application')
        );

        // This kicks off everything going on in the Flux pattern
        TriggerApplicationStartedAction();

    }

    // This binds our startup to the DOM being ready
    RegisterDOMReadyFunction(InitializeApplication);

}